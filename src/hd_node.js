const ethers = require('ethers');

const HDNode = ethers.utils.HDNode.fromMnemonic(
  process.env.MNEMONIC_PHARSE
);

module.exports = HDNode;
