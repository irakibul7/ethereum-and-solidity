// alchemy-token-api/axios-script.js
const axios = require('axios');

// Replace with your Alchemy API key:
const apiKey = '6WBsg7Xg8oFri6ovGrJeLeYwZjAEYol5';
const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
// Replace with the wallet address you want to query:
const tokenAddr = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

var data = JSON.stringify({
  jsonrpc: '2.0',
  method: 'alchemy_getTokenMetadata',
  params: [`${tokenAddr}`],
  id: 42,
});

var config = {
  method: 'post',
  url: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data.result, null, 2));
  })
  .catch(function (error) {
    console.log(error);
  });
