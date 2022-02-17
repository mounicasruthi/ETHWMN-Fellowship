// SPDX-License-Identifier: GPL-3.0
        
pragma solidity >=0.4.22 <0.9.0;

// This import is automatically injected by Remix
import "remix_tests.sol"; 

// This import is required to use custom transaction context
// Although it may fail compilation in 'Solidity Compiler' plugin
// But it will work fine in 'Solidity Unit Testing' plugin
import "remix_accounts.sol";
import "../contracts/1_Storage.sol";

// File name has to end with '_test.sol', this file can contain more than one testSuite contracts
contract testSuite {

    Storage testContract;
    uint setNumber;

    /// 'beforeAll' runs before all other tests
    /// More special functions are: 'beforeEach', 'beforeAll', 'afterEach' & 'afterAll'
    function beforeAll() public {
        // <instantiate contract>
        testContract = new Storage();
    }

    function checkValueEqual() public {
        setNumber = 11;
        testContract.store(setNumber);
        uint getNumber = testContract.retrieve();
        Assert.equal(getNumber, setNumber, "test failed, values do not match.");
    }

    function checkValueEqual2() public {
        setNumber = 97765433212346567878876565;
        testContract.store(setNumber);
        uint getNumber = testContract.retrieve();
        Assert.equal(getNumber, setNumber, "test failed, values do not match.");
    }

    /// Custom Transaction Context: https://remix-ide.readthedocs.io/en/latest/unittesting.html#customization
    /// #sender: account-1
    /// #value: 100
    function checkSenderAndValue() public payable {
        // account index varies 0-9, value is in wei
        Assert.equal(msg.sender, TestsAccounts.getAccount(1), "Invalid sender");
        Assert.equal(msg.value, 100, "Invalid value");
    }
}
    