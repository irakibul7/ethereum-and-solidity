const ethers = require('ethers');
require('dotenv').config();

const { API_KEY_GORELI, API_KEY_MAINNET } = process.env;

const goerli = new ethers.providers.JsonRpcProvider(
  `https://eth-goerli.g.alchemy.com/v2/${API_KEY_GORELI}`
);

const mainnet = new ethers.providers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${API_KEY_MAINNET}`
);

module.exports = {
  goerli,
  mainnet,
};
