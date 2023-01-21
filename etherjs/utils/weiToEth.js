const ethers = require('ethers');
const weiToEth = (value) => {
  return ethers.utils.formatEther(value);
};
module.exports = weiToEth;
