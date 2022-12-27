const { Keypair, web3, PublicKey } = require('@solana/web3.js');
const bip39 = require('bip39');
const bip32 = require('bip32');
require('dotenv').config();
const mnemonic =
  'topic agent hidden lawn rent fold unveil goose any lonely ladder vacuum';
const seed = bip39.mnemonicToSeedSync(mnemonic).slice(0, 32);
const keypair = Keypair.fromSeed(seed);

const address = keypair.publicKey.toString();

console.log(address);
const solanaAddress = new PublicKey(address).toBase58();

console.log(solanaAddress);

let firstWinWallet = Keypair.fromSeed(
  Uint8Array.from(keypair.privateKey)
);
console.log(firstWinWallet.secretKey);
console.log(firstWinWallet.publicKey.toString());
