const ethers = require('ethers');
require('dotenv').config();
const weiToEth = require('../utils/weiToEth');
const provider = require('../utils/provider');
const address = process.env.FROM_ADDRESS;

const getBalance = async (address) => {
  const balance = await provider.goerli.getBalance(address);
  console.log(
    `\nBalance of ${address} --> ${weiToEth(balance)} ETH\n`
  );
};

getBalance(address);
