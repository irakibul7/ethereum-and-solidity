const { ethers } = require('ethers');
const { ENS, getEnsAddress } = require('@ensdomains/ensjs');

require('dotenv').config();
const API_KEY = process.env.INFURA_ID_MAINNET;
const url = `https://mainnet.infura.io/v3/${API_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(url);
async function main() {
  let resolver = await provider.resolveName('swop.eth');

  const ens = new ENS({
    provider,
    ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  });
  await ens.setProvider(provider);

  var balance = await provider.getBalance('swop.eth');
  var eth = ethers.utils.formatEther(balance);
  var dollar = eth * 1196.89;

  console.log(eth);
  console.log(dollar);
}
main();
