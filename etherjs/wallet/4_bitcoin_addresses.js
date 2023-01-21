const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const { BIP32Factory } = require('bip32');
const ecc = require('tiny-secp256k1');
const bchaddr = require('bchaddrjs');
require('dotenv').config();

// wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);

const mnemonic = process.env.MNEMONIC_PHARSE;
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Address using bip44 derivation path
const keypair1 = bip32.fromSeed(seed).derivePath("m/44'/0'/0'/0/0");
const bip44_address = bitcoin.payments.p2pkh({
  pubkey: keypair1.publicKey,
}).address;

console.log(`Address using bip44: ${bip44_address}`);

// Address using bip84 derivation path
const keypair2 = bip32.fromSeed(seed).derivePath("m/84'/0'/0'/0/0");
const bip84_address = bitcoin.payments.p2wpkh({
  pubkey: keypair2.publicKey,
}).address;

console.log(`Bitcoin Address using bip84: ${bip84_address}`);

const keypair3 = bip32.fromSeed(seed).derivePath("m/44'/145'/0'/0/0");
const bip145_address = bitcoin.payments.p2pkh({
  pubkey: keypair3.publicKey,
}).address;
const toCashAddress = bchaddr.toCashAddress;
const cashAddress = toCashAddress(bip145_address);
console.log(`Bitcoin Cash Address: ${cashAddress}`);
const toLegacyAddress = bchaddr.toLegacyAddress;
const cashLegacyAddress = toLegacyAddress(bip44_address);
console.log(`Bitcoin Legacy Address: ${cashLegacyAddress}`);
