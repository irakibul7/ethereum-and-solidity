const { ethers } = require('ethers');
require('dotenv').config();
const network = require('../utils/provider');
const weiToEth = require('../utils/weiToEth');
const ethToWei = require('../utils/ethToWei');

const provider = network.goerli;

// Set the address of the account that you want to send the transaction from
const fromAddress = process.env.FROM_ADDRESS;

// Set the address of the account that you want to send the transaction to
const toAddress = process.env.TO_ADDRESS;

const privateKey = process.env.PRIVATE_KEY; // Private key of account 1
const walletSigner = new ethers.Wallet(privateKey, provider);

const main = async (from, to) => {
  const senderBalanceBefore = await provider.getBalance(fromAddress);
  const recieverBalanceBefore = await provider.getBalance(toAddress);

  console.log(
    `\nSender balance before: ${weiToEth(senderBalanceBefore)}`
  );
  console.log(
    `reciever balance before: ${weiToEth(recieverBalanceBefore)}\n`
  );

  // Set the amount of Ether to send (in wei)
  const amount = ethToWei('.04');

  // Calculate the network fee for the transaction
  provider
    .estimateGas({ from: fromAddress, to: toAddress, value: amount })
    .then((gasEstimate) => {
      console.log(
        `The estimated gas cost for this transaction is ${gasEstimate} wei`
      );
      console.log(
        `The estimated network fee for this transaction is ${weiToEth(
          gasEstimate
        )} ETH`
      );
    })
    .catch((error) => {
      console.error(error);
    });

  const tx = await walletSigner.sendTransaction({
    to: toAddress,
    value: amount,
  });

  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(fromAddress);
  const recieverBalanceAfter = await provider.getBalance(toAddress);

  console.log(
    `\nSender balance after: ${weiToEth(senderBalanceAfter)}`
  );
  console.log(
    `reciever balance after: ${weiToEth(recieverBalanceAfter)}\n`
  );
};

main(fromAddress, toAddress);
