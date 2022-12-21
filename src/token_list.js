const request = require('request');
require('dotenv').config();
const API_KEY = process.env.ETHERSCAN_API_KEY;

function getTokens(address) {
  return new Promise((resolve, reject) => {
    const options = {
      url: `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`,
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

getTokens(process.env.ADDRESS)
  .then((result) => {
    console.log(result);
    // result is an object containing the tokens associated with the address
  })
  .catch((error) => {
    console.error(error);
  });
