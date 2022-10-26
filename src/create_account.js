const ethers = require('ethers');

const HDNode = ethers.utils.HDNode.fromMnemonic(
  'yellow truly boil elegant hunt raven abstract tail view real gasp doll'
);

const createAccount = (n) => {
  const derivedNode = HDNode.derivePath(`m/44'/60'/0'/0/${n}`);
  console.log(`Address ${n}: `, derivedNode.address);
};

createAccount(2);
