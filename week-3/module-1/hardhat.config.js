// const { hardhatArguments } = require("hardhat/config");

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

// require("dotenv").config({ path: "module-1/.env" });
require("dotenv").config();

const alchemy_api_key = process.env.ALCHEMY_API_KEY;
const ropsten_private_key = process.env.ROPSTEN_PRIVATE_KEY;

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${alchemy_api_key}`,
      accounts: [`${ropsten_private_key}`]
    }
  }
};


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
