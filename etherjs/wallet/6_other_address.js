const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const { BIP32Factory } = require('bip32');
const ecc = require('tiny-secp256k1');
const bchaddr = require('bchaddrjs');
const fs = require('fs-extra');
require('dotenv');

// wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);

const main = async () => {
  const mnemonic = process.env.MNEMONIC_PHARSE;
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  // Address using bip84 derivation path
  const keypair2 = bip32.fromSeed(seed).derivePath("m/84'/2'/0'/0/0");
  const bip84_address = bitcoin.payments.p2wpkh({
    pubkey: keypair2.publicKey,
  }).address;

  console.log(`Litecoin Address: ${bip84_address}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
