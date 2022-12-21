const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const bip32 = require('bip32');
const HDKey = require('hdkey');
const mnemonic = process.env.MNEMONIC_PHARSE;
const seed = bip39.mnemonicToSeedSync(mnemonic);
const hdkey = HDKey.fromMasterSeed(Buffer.from(seed), 'hex');
const node = bip32.fromBase58(
  'xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi'
);
let child = node.derivePath('m/0/0');
console.log(child);
