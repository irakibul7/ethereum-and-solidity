const ethers = require('ethers');
require('dotenv').config();

const HDNode = require('../utils/hd_node');

const createAccount = (n) => {
  const derivedNode = HDNode.derivePath(`m/44'/60'/0'/0/${n}`);
  console.log(`Address ${n}: `, derivedNode.address);
  const privateKey = derivedNode.privateKey;
  console.log(`Private key: `, privateKey);
};

createAccount(0);
createAccount(1);
