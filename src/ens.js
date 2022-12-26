const { ethers } = require('ethers');
require('dotenv').config();
const API_KEY = process.env.INFURA_ID_MAINNET;
const url = `https://mainnet.infura.io/v3/${API_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(url);
async function main() {
  let resolver = await provider.getResolver('rakibtest2.cb.id');
  if (resolver) {
    const ethAddress = await resolver.getAddress();
    console.log(`Ethereum address: ${ethAddress}`);
    const btcAddress = await resolver.getAddress(0);
    console.log(`Bitcoin address: ${btcAddress}`);
    const liteAddress = await resolver.getAddress(2);
    console.log(`Litecoin address: ${liteAddress}`);
    const DogeAddress = await resolver.getAddress(3);
    console.log(`Dogecoin address: ${DogeAddress}`);
    for (let i = 100; i < 150; i++) {
      try {
        const add = await resolver.getAddress(i);
        console.log(`address ${i}: ${add}`);
      } catch (error) {
        console.log(`Error ${i}: ${error.errorMessage}`);
      }
    }

    // const monaAddress = await resolver.getAddress(22);
    // const ethClassicAddress = await resolver.getAddress(61);
    //const rootStockAddress = await resolver.getAddress(5);
    //const rippleAddress = await resolver.getAddress(144);
    // const btcCashAddress = await resolver.getAddress(145);
    // const binanceAddress = await resolver.getAddress(714);
    // console.log(`Monacoin address: ${monaAddress}`);
    // console.log(`Ethereum classic address: ${ethClassicAddress}`);
    //console.log(`Ethereum classic address: ${rootStockAddress}`);
    //console.log(`Ripple address: ${rippleAddress}`);
    // console.log(`Bitcoin Cash address: ${btcCashAddress}`);
    // console.log(`Binance address: ${binanceAddress}`);
  }
}
main();
