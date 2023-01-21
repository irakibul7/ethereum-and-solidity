const ethers = require('ethers');
require('dotenv').config();

// create a new random account
const wallet = ethers.Wallet.createRandom();
console.log(wallet);
// 12 words mnemonic phrase
const mnemonic = wallet.mnemonic.phrase;

const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);
const walletPrivateKey = walletMnemonic.privateKey;

console.log(`\nAddress: `, walletMnemonic.address);
console.log(`Mnemonic phrase: ${mnemonic}`);
console.log(`Private key: ${walletPrivateKey}\n`);
