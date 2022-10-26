const ethers = require('ethers');
const provider = require('./provider');
const mnemonic =
  'yellow truly boil elegant hunt raven abstract tail view real gasp doll';

const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

const wallet = walletMnemonic.connect(provider);

const getBalance = async (address) => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(
      balance
    )} ETH\n`
  );
};

getBalance('0x99aA1b4f0d866d6bfFDDF8258E6EDdc3B373B3d5');
