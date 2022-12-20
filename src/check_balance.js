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

getBalance('0x4Acd02010399a2D1C20ff611eD82a0cD42b7Ea87');
