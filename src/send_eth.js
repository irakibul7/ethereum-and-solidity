const { ethers } = require('ethers');
require('dotenv').config();
const provider = require('./provider');

// Set the address of the account that you want to send the transaction from
const fromAddress = process.env.FROM_ADDRESS;

// Set the address of the account that you want to send the transaction to
const toAddress = process.env.TO_ADDRESS;

const privateKey = process.env.PRIVATE_KEY; // Private key of account 1
const wallet = new ethers.Wallet(privateKey, provider);

function etherToWei(ether) {
  return ether * Math.pow(10, 18);
}

const main = async (from, to) => {
  const senderBalanceBefore = await provider.getBalance(fromAddress);
  const recieverBalanceBefore = await provider.getBalance(toAddress);

  console.log(
    `\nSender balance before: ${ethers.utils.formatEther(
      senderBalanceBefore
    )}`
  );
  console.log(
    `reciever balance before: ${ethers.utils.formatEther(
      recieverBalanceBefore
    )}\n`
  );

  // Set the amount of Ether to send (in wei)
  const amount = ethers.utils.parseEther('.04');

  // Calculate the network fee for the transaction
  provider
    .estimateGas({ from: fromAddress, to: toAddress, value: amount })
    .then((gasEstimate) => {
      console.log(
        `The estimated gas cost for this transaction is ${gasEstimate} wei`
      );
      console.log(
        `The estimated network fee for this transaction is ${ethers.utils.formatEther(
          gasEstimate
        )} ETH`
      );
    })
    .catch((error) => {
      console.error(error);
    });

  const tx = await wallet.sendTransaction({
    to: toAddress,
    value: amount,
  });

  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(fromAddress);
  const recieverBalanceAfter = await provider.getBalance(toAddress);

  console.log(
    `\nSender balance after: ${ethers.utils.formatEther(
      senderBalanceAfter
    )}`
  );
  console.log(
    `reciever balance after: ${ethers.utils.formatEther(
      recieverBalanceAfter
    )}\n`
  );
};

main(fromAddress, toAddress);
