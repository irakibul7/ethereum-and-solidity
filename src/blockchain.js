const { ethers } = require('ethers');
require('dotenv').config();
const API_KEY = process.env.INFURA_ID_MAINNET;
const url = `https://mainnet.infura.io/v3/${API_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(url);

const queryBlock = async () => {
  const block = await provider.getBlockNumber();
  console.log('current Block Number: ', block);

  const balance = await provider.getBalance('swop.eth');
  const balanceETH = ethers.utils.formatEther(balance);
  console.log('Balance: ', balanceETH);
};
queryBlock();
