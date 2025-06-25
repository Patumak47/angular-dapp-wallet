// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Wallet {
    string public message;

    constructor() {
        message = "Bienvendo a mi blockchain!";
    }

    function setMessage(string calldata newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
