const ethers = require('ethers');
const fs = require('fs-extra');
require('dotenv');

const weiToEth = require('../utils/weiToEth');
const provider = require('../utils/provider');

const encryptedJson = fs.readFileSync('./.encryptedKey.json');

const wallet = new ethers.Wallet.fromEncryptedJsonSync(
  encryptedJson,
  process.env.PRIVATE_KEY_PASSWORD
);

const main = async () => {
  const balance = await provider.goerli.getBalance(wallet.address);
  console.log(`Balance of ${wallet.address} is ${balance}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
