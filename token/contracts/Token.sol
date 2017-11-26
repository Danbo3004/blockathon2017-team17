pragma solidity ^0.4.0;

contract Token {
    uint public totalSupply;
    mapping (address=>uint)public balanceOf;
    uint price = 100;

    event Issue(address indexed _addr, uint _amount );

    function Token(uint _totalSupply) {
        totalSupply = _totalSupply;
    }

    // Fallback function
    function () payable{
        uint amount = msg.value*100/ 1 ether;
        balanceOf[msg.sender] += amount;
        Issue(msg.sender, amount);
    }
}