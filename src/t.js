// alchemy-token-api/axios-script.js
const axios = require('axios');

// Replace with your Alchemy API key:
const apiKey = '6WBsg7Xg8oFri6ovGrJeLeYwZjAEYol5';
const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
// Replace with the wallet address you want to query:
const ownerAddr = '0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be';
// Replace with the token contract address you want to query:
const tokenAddr = '0x607f4c5bb672230e8672085532f7e901544a7375';

// Wallet address
const address = '0xC6C24883836c239339e5D1c7D0300765c68aD699';

// Data for making the request to query token balances
const data = JSON.stringify({
  jsonrpc: '2.0',
  method: 'alchemy_getTokenBalances',
  headers: {
    'Content-Type': 'application/json',
  },
  params: [`${address}`],
  id: 42,
});

// config object for making a request with axios
const config = {
  method: 'post',
  url: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
};

async function main() {
  // fetching the token balances
  let response = await axios(config);
  response = response['data'];

  // Getting balances from the response
  const balances = response['result'];

  // Remove tokens with zero balance
  const nonZeroBalances = await balances.tokenBalances.filter(
    (token) => {
      return token.tokenBalance !== '0';
    }
  );

  console.log(`Token balances of ${address}: \n`);

  // Counter for SNo of final output
  let i = 1;

  // Loop through all tokens with non-zero balance
  for (let token of nonZeroBalances) {
    // Get balance of token
    let balance = token.tokenBalance;

    // options for making a request to get the token metadata
    const options = {
      method: 'POST',
      url: baseURL,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      data: {
        id: 1,
        jsonrpc: '2.0',
        method: 'alchemy_getTokenMetadata',
        params: [token.contractAddress],
      },
    };

    // getting the token metadata
    const metadata = await axios.request(options);
    console.log(JSON.stringify(response.data.result, null, 2));
    // Compute token balance in human-readable format
    balance =
      balance / Math.pow(10, metadata['data']['result'].decimals);
    balance = balance.toFixed(2);

    // Print name, balance, and symbol of token
    console.log(
      `${i++}. ${metadata['data']['result'].name}: ${balance} ${
        metadata['data']['result'].symbol
      }`
    );
  }
}

main();
