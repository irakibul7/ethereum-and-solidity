const { ethers } = require('ethers');
const provider = require('./provider');

// Set the address of the account that you want to send the transaction from
const fromAddress = '0x4Acd02010399a2D1C20ff611eD82a0cD42b7Ea87';

// Set the address of the account that you want to send the transaction to
const toAddress = '0x4765027f9E6C7a9118a63BE16C985c7368B55AD9';

const privateKey1 =
  'e191c8d6a78797693d6ab86a56533e5e44d6a8fe2b320d23e4fdc70690bfc99c'; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

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
  const amount = ethers.utils.parseEther('.0002');

  // Calculate the network fee for the transaction
  provider
    .estimateGas({ from: fromAddress, to: toAddress, value: amount })
    .then((gasEstimate) => {
      console.log(
        `The estimated gas cost for this transaction is: ${gasEstimate} wei`
      );
      console.log(
        `The estimated network fee for this transaction is: ${ethers.utils.formatEther(
          gasEstimate
        )} ETH`
      );
    })
    .catch((error) => {
      console.error(error);
    });

  const tx = await wallet.sendTransaction({
    to: account2,
    value: amount,
  });

  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(from);
  const recieverBalanceAfter = await provider.getBalance(to);

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
