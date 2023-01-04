const { ethers } = require('ethers');
require('dotenv').config();
const network = require('../utils/provider');
const weiToEth = require('../utils/weiToEth');
const ethToWei = require('../utils/ethToWei');

const provider = network.goerli;

const address = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'; // Chain Link contract address in goreli

const ERC20_ABI = [
  'function transfer(address recipient, uint256 amount) public returns (bool)',
  'function balanceOf(address account) public view returns (uint256)',
];

const contract = new ethers.Contract(address, ERC20_ABI, provider);

// Set the address of the account that you want to send the transaction from
const fromAddress = process.env.FROM_ADDRESS;

// Set the address of the account that you want to send the transaction to
const toAddress = process.env.TO_ADDRESS;

const privateKey = process.env.PRIVATE_KEY; // Private key of account 1
const walletSigner = new ethers.Wallet(privateKey, provider);

const main = async () => {
  const balance = await contract.balanceOf(fromAddress);

  console.log(`\nReading from ${address}`);
  console.log(`Balance of sender: ${balance}\n`);

  // Calculate the network fee for the transaction
  // provider
  //   .estimateGas({ from: fromAddress, to: toAddress, value: balance })
  //   .then((gasEstimate) => {
  //     console.log(
  //       `The estimated gas cost for this transaction is ${gasEstimate} wei`
  //     );
  //     console.log(
  //       `The estimated network fee for this transaction is ${weiToEth(
  //         gasEstimate
  //       )} ETH`
  //     );
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  const contractWithWallet = contract.connect(walletSigner);
  const tx = await contractWithWallet.transfer(toAddress, balance);
  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await contract.balanceOf(fromAddress);
  const recieverBalanceAfter = await contract.balanceOf(toAddress);

  console.log(`\nSender balance after: ${senderBalanceAfter}`);
  console.log(`Reciever balance after: ${recieverBalanceAfter}\n`);
};

main();
