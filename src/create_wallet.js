const ethers = require('ethers');

// create a new random account
const wallet = ethers.Wallet.createRandom();

// 12 words mnemonic phrase
const mnemonic = wallet.mnemonic.phrase;

// first address of wallet
const address = wallet.address;

// wallet private key
const privateKey = wallet.privateKey;

console.log(`\nMnemonic phrase: ${mnemonic}\n`);
console.log(`Private key: ${privateKey}\n`);
console.log(`Address: ${address}\n`);
