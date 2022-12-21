const ethers = require('ethers');
require('dotenv').config();

const HDNode = require('./hd_node');

const createAccount = (n) => {
  const derivedNode = HDNode.derivePath(`m/44'/60'/0'/0/${n}`);
  console.log(`Address ${n}: `, derivedNode.address);
};

createAccount(3);
