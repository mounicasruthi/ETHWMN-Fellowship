const { expect } = require("chai");

describe("Transactions", function() {
  it("Should transfer tokens between accounts", async function() {
    
    // getting multiple accounts other than the default account as well
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    // connect() method is sued to connect one account to another 
    // This method is used to send a transation from an account that is not the default one
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
  });
});
