const request = require('request');
require('dotenv').config();
const API_KEY = process.env.ETHERSCAN_API_KEY;

function getTransactions(address) {
  return new Promise((resolve, reject) => {
    const options = {
      url: `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`,
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
getTransactions('0x4Acd02010399a2D1C20ff611eD82a0cD42b7Ea87')
  .then((result) => {
    console.log(result);
    // result is an object containing the transactions for the address
  })
  .catch((error) => {
    console.error(error);
  });
