const ENS = require('@ensdomains/ensjs').default;
const { getEnsAddress } = require('@ensdomains/ensjs');
const { ethers } = require('ethers');

require('dotenv').config();
const API_KEY = process.env.INFURA_ID_MAINNET;
const url = `https://mainnet.infura.io/v3/${API_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(url);
async function main() {
  let resolver = await provider.resolveName('swop.eth');

  const ens = new ENS({ provider, ensAddress: getEnsAddress('1') });

  const address = await ens.name('swop.eth').createSubdomain('rakib');
  console.log(address);

  // const transaction = await ENSInstance.setSubnodeOwner(
  //   ethers.utils.namehash(domain),
  //   ethers.utils.keccak256(ethers.utils.toUtf8Bytes(subdomain)),
  //   '0xbA5847FCc7E029070435729Ef1b2B06dF93CEa23'
  // );

  // await transaction.wait();
  // console.log(`Successfully added ${subdomain}.${domain} to ENS.`);

  // var balance = await provider.getBalance('swop.eth');
  // var eth = ethers.utils.formatEther(balance);
  // var dollar = eth * 1196.89;

  // console.log(eth);
  // console.log(dollar);
}
main();
