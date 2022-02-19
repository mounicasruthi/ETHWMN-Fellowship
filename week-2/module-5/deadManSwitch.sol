// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract DeadManSwitch {

    address public owner;
    address payable transferOwner;
    uint256 public blockNumber;

    constructor() payable {
        owner = msg.sender;
        transferOwner = payable(0xdb03FB01a9BA1F50F6e7F323f6eC6Ca46b37ce52);
    } 

     modifier _ownerOnly() {
      require(msg.sender == owner);
      _;
     }

    function still_alive() public _ownerOnly {
        blockNumber = block.number;
    }

    function isOwnerNotAlive() public view returns(bool) {
        if(block.number - blockNumber > 10 )
            return true;
        else 
            return false;
    }

    function transferBalance() public {
        if(isOwnerNotAlive())
            selfdestruct(transferOwner);
    }

}