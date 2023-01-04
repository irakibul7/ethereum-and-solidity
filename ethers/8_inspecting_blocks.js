const { ethers } = require('ethers');
require('dotenv').config();
const provider = require('../utils/provider');

const main = async () => {
  const latestBlock = await provider.mainnet.getBlockNumber();

  const blockInfo = await provider.mainnet.getBlock(latestBlock);
  console.log(blockInfo);

  const { transactions } =
    await provider.mainnet.getBlockWithTransactions(latestBlock);
  console.log(transactions[0]);
};

main();
