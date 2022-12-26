const { PublicKey } = require('@solana/web3.js');
const bip39 = require('bip39');
const { BIP32Factory } = require('bip32');
const ecc = require('tiny-secp256k1');

// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);
const mnemonic = 'topic agent hidden lawn rent fold unveil goose any lonely ladder vacuum';
const derivePath = "m/44'/501'/0'/0'";

const seed = bip39.mnemonicToSeedSync(mnemonic);
const keypair = keypairFromSeed(seed, derivePath);

// Convert the public key from a Buffer object to a Uint8Array
const publicKeyBuffer = keypair.publicKey;
const publicKeyArray = new Uint8Array(publicKeyBuffer);

const solanaAddress = new PublicKey(publicKeyArray).toBase58();

console.log(solanaAddress);

function keypairFromSeed(seed, derivePath) {
  const node = bip32.fromSeed(seed).derivePath(derivePath);
  const keypair = {
    publicKey: node.publicKey,
    privateKey: node.privateKey,
  };
  return keypair;
}
