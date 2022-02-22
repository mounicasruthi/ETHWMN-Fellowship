const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {

    //getting the list of accounts in Hardhat Network (node that its connected to) and keeping the first account.
    const [owner] = await ethers.getSigners();

    //Here, Token is a factory for instances of our token contract (used to deploy new smart contracts)
    const Token = await ethers.getContractFactory("Token");

    //Calling deploy() on a ContractFactory will start the deployment and return a Promise that resolves to a Contract. 
    //This is the object that has a method for each of the smart contract functions.
    const hardhatToken = await Token.deploy();

    //contract methods can be called after the contract is deployed.
    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    //using the Contract instance to call a smart contract.
    //checking if totalSupply is equal to ownerBalance using Chai (assertions library)
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});