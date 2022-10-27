// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Counter {
    string public name;
    uint256 public count;

    constructor(string memory _name, uint256 _initialCount) {
        name = _name;
        count = _initialCount;
    }

    function increment() public returns (uint256 newCount) {
        count = count + 1;
        return count;
    }

    function decrement() public returns (uint256 newCount) {
        count--;
        return count;
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function getName() public view returns (string memory currentName) {
        return name;
    }

    function setName(string memory _newName)
        public
        returns (string memory newName)
    {
        name = _newName;
        return name;
    }
}
