const { ethers } = require('ethers');
const provider = require('./provider');

const account1 = '0x4Acd02010399a2D1C20ff611eD82a0cD42b7Ea87'; // Your account address 1
const account2 = '0x16017Db9c20C3321887B1343F5c7E55D2db74568'; // Your account address 2

const privateKey1 =
  'e191c8d6a78797693d6ab86a56533e5e44d6a8fe2b320d23e4fdc70690bfc99c'; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async (from, to) => {
  const senderBalanceBefore = await provider.getBalance(from);
  const recieverBalanceBefore = await provider.getBalance(to);

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

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther('0.010'),
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

main(account1, account2);
