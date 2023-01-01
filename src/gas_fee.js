const Web3 = require('web3');
const contractAbi = require('./contractAbi');
require('dotenv').config();
const infuraProjectId = process.env.INFURA_ID_MAINNET;
const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const toAddress = process.env.ADDRESS;
const exchangeRate = 1195.53; // ether current exchange rate in dollar

// Connect to the Ethereum blockchain using Infura
const web3 = new Web3(
  `https://mainnet.infura.io/v3/${infuraProjectId}`
);

// Convert 1 ether to wei
const value = web3.utils.toWei('.0021', 'ether');

// Create an instance of the contract
const contract = new web3.eth.Contract(contractAbi, contractAddress);
const data = contract.methods.transfer(toAddress, value).encodeABI();

async function getNetworkFee() {
  // Get the current gas price
  const gasPrice = await web3.eth.getGasPrice();
  console.log(`Current gas price: ${gasPrice} wei`);

  // The amount of gas used by the transaction
  const gasUsed = await web3.eth.estimateGas({
    to: toAddress,
    data,
    value,
  });

  console.log(`Gas Used: ${gasUsed}`);

  // Calculate the network fee in Ether
  const networkFeeInEther = (gasPrice * gasUsed) / 1e18;
  console.log(`Network fee: ${networkFeeInEther} Ether`);

  // Calculate the network fee in dollars
  const networkFeeInDollars = networkFeeInEther * exchangeRate;
  console.log(`Network fee: $${networkFeeInDollars}`);
}

getNetworkFee();
