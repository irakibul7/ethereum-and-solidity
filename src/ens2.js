const { Keypair } = require('@solana/web3.js');
const bip39 = require('bip39');

const HDKey = require('hdkey');
require('dotenv').config();
const mnemonic = process.env.MNEMONIC_PHARSE;
const seed = bip39.mnemonicToSeedSync(mnemonic);
const hdkey = HDKey.fromMasterSeed(Buffer.from(seed), 'hex');
let seed2 = Uint8Array.from(hdkey._publicKey);
let accountFromSeed = Keypair.fromSeed(seed2);

console.log(accountFromSeed.publicKey.toBase58());
