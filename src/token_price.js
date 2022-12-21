const request = require('request');

const API_KEY = 'AY2NAKP9AFVJUEPXZSSHWXHCQVW3593SRQ';
function getTokenBalance(contractAddress) {
  return new Promise((resolve, reject) => {
    const options = {
      url: `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=0xC6C24883836c239339e5D1c7D0300765c68aD699&tag=latest&apikey=${API_KEY}`,
      json: true,
    };

    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}
function getEthPrice() {
  return new Promise((resolve, reject) => {
    const options = {
      url: `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_KEY}`,
      json: true,
    };

    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

Promise.all([
  getTokenBalance('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
  getEthPrice(),
])
  .then(([balanceResult, priceResult]) => {
    const balance = balanceResult.result;
    console.log(balance);
    const price = priceResult.result.ethusd;
    console.log(price);
    const tokenPrice = balance * price;
    console.log(tokenPrice);
    // tokenPrice is the current price of the token in USD
  })
  .catch((error) => {
    console.error(error);
  });
