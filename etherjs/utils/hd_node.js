const ethers = require('ethers');
require('dotenv').config();

const HDNode = ethers.utils.HDNode.fromMnemonic(
  process.env.MNEMONIC_PHRASE
);

module.exports = HDNode;
