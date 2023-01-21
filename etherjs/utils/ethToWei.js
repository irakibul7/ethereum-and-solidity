const ethers = require('ethers');
const ethToWei = (value) => {
  return ethers.utils.parseEther(value);
};
module.exports = ethToWei;
