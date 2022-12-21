const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${process.env.INFURA_ID}`
);

module.exports = provider;
