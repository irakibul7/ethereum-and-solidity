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

// Mnemonic phrase: yellow truly boil elegant hunt raven abstract tail view real gasp doll

// Private key: 0x9a736877c0d7ee920950a3b48a5b9d37f760306109391ee6f4e73c07ec1349c5

// Address: 0x99aA1b4f0d866d6bfFDDF8258E6EDdc3B373B3d5
