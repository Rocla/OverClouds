//var web3 = require('ethereum.js');
var web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new web3(new web3.providers.HttpProvider("http://localhost:8545"));
}

