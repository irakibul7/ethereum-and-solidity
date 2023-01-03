const { ethers } = require('ethers');
const walletAbi = require('./ensContractAbi');
require('dotenv').config();
const API_KEY = process.env.INFURA_ID_MAINNET;
const url = `https://mainnet.infura.io/v3/${API_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(url);
const walletAddress = '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85';

const tokenIdFrom = (name) => {
  const labelHash = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes(name)
  );
  return ethers.BigNumber.from(labelHash).toString();
};

const contractIntraction = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletAbi,
    provider
  );
  const balance = await walletContract.balanceOf('swop.eth');
  const balanceETH = ethers.utils.formatEther(balance);
  console.log('Balance: ', balanceETH);

  const namehash = tokenIdFrom('rakib.swop.eth');
  const nameAvail = await walletContract.available(namehash);
  console.log(nameAvail);
  const signer = provider.getSigner()
  const contracts = new ethers.Contract(walletAddress, walletAbi, signer)
  await contracts.
};
contractIntraction();
