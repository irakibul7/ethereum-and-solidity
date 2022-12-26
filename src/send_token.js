const Web3 = require('web3');

const web3 = new Web3(
  'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'
);
const contractAddress = '0xCONTRACT_ADDRESS';
const contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  ...
];
const contract = new web3.eth.Contract(contractABI, contractAddress);
const fromAddress = '0xFROM_ADDRESS';
const toAddress = '0xTO_ADDRESS';
const amount = '1';  // 1 token
const nonce = await web3.eth.getTransactionCount(fromAddress);
const tx = {
  from: fromAddress,
  to: contractAddress,
  nonce: nonce,
  data: contract.methods.transfer(toAddress, web3.utils.toWei(amount, 'ether')).encodeABI()
};
const signedTx = await web3.eth.accounts.signTransaction(tx, 'PRIVATE_KEY');
const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
console.log(receipt); 
