const { ethers } = require('ethers');
require('dotenv').config();
const provider = require('../utils/provider');
const weiToEth = require('../utils/weiToEth');

const walletAddress = process.env.ADDRESS;

const address = '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE'; // SHIBA INU Token address

const ERC20_ABI = [
  'function name() public view returns (string)',
  'function symbol() public view returns (string)',
  'function totalSupply() public view returns (uint256)',
  'function balanceOf(address account) public view returns (uint256)',
];

const contract = new ethers.Contract(
  address,
  ERC20_ABI,
  provider.mainnet
);
const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nToken Address ${address}\n`);
  console.log(`Name : ${name}`);
  console.log(`Symbol : ${symbol}`);
  console.log(`Total Supply : ${totalSupply}\n`);

  const balance = await contract.balanceOf(walletAddress);

  console.log(
    `Balance of ${walletAddress} in ${name} : ${weiToEth(balance)}`
  );
};

main();
