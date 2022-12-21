const ethers = require('ethers');
require('dotenv').config();

const provider = require('./provider');
const address = process.env.ADDRESS;

const getBalance = async (address) => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(
      balance
    )} ETH\n`
  );
};

getBalance('0x4Acd02010399a2D1C20ff611eD82a0cD42b7Ea87');
