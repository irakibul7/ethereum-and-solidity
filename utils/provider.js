const ethers = require('ethers');
require('dotenv').config();

const API_KEY = process.env.INFURA_ID;

const goerli = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${API_KEY}`
);

const mainnet = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${API_KEY}`
);

module.exports = {
  goerli,
  mainnet,
};
