const ethers = require('ethers');

const INFURA_ID = 'd686fe6859ea4d2cadbee3b3a93a05c3';

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${INFURA_ID}`
);

module.exports = provider;
