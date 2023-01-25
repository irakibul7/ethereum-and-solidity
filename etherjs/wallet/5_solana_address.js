const { Keypair, PublicKey, Account } = require('@solana/web3.js');
const bip39 = require('bip39');
const bip32 = require('bip32');
const { derivePath } = require('ed25519-hd-key');
const nacl = require('tweetnacl');
require('dotenv').config();
const mnemonic = process.env.MNEMONIC_PHRASE;
const seed = bip39.mnemonicToSeedSync(mnemonic);

const DERIVATION_PATH = {
  deprecated: undefined,
  bip44: 'bip44',
  bip44Change: 'bip44Change',
  bip44Root: 'bip44Root', // Ledger only.
};

function getAccountFromSeed(
  seed,
  walletIndex,
  dPath,
  accountIndex = 0
) {
  const derivedSeed = deriveSeed(
    seed,
    walletIndex,
    dPath,
    accountIndex
  );
  const acc = new Account(
    nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
  );
  console.log(acc.publicKey.toString());
}

function deriveSeed(seed, walletIndex, derivationPath, accountIndex) {
  switch (derivationPath) {
    case DERIVATION_PATH.deprecated:
      const path = `m/501'/${walletIndex}'/0/${accountIndex}`;
      return bip32.fromSeed(seed).derivePath(path).privateKey;
    case DERIVATION_PATH.bip44:
      const path44 = `m/44'/501'/${walletIndex}'`;
      return derivePath(path44, seed).key;
    case DERIVATION_PATH.bip44Change:
      const path44Change = `m/44'/501'/${walletIndex}'/0'`;
      return derivePath(path44Change, seed).key;
    default:
      throw new Error(`invalid derivation path: ${derivationPath}`);
  }
}
getAccountFromSeed(seed, 0, 'bip44Change', 0);
