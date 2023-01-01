const { ENS } = require('@ensdomains/ensjs');
const { ethers } = require('ethers');
const API_KEY = process.env.INFURA_ID_MAINNET;
const providerUrl = `https://mainnet.infura.io/v3/${API_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(providerUrl);
const privateKey =
  '0x3f424816d7ac248dd5055a33595cff817480f75c83a97a890a87989a6bb1e042';
// const signer = new ethers.Signer(privateKey, provider);
// console.log(signer);
const domain = 'swop.eth';
const subdomain = 'rakib.swop.eth';
//const owner = signer.address;
async function main() {
  const ENSInstance = new ENS();
  await ENSInstance.setProvider(provider);
  const transaction = await ENSInstance.setSubnodeOwner(
    ethers.utils.namehash(domain),
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes(subdomain)),
    '0xbA5847FCc7E029070435729Ef1b2B06dF93CEa23'
  );

  await transaction.wait();
  console.log(`Successfully added ${subdomain}.${domain} to ENS.`);
}
main();
