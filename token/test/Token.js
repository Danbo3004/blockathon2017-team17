var Token = artifacts.require("./Token.sol");

contract('Token', function(accounts) {
  it("Total supply must be 200tokens", function(){
    return Token.deployed().then(function(instance) {
      return instance.totalSupply.call();
    }).then(function(total) {
      assert.equal(total.valueOf(), 200);
    });
  });
  it("Issue token", function(){
    return Token.deployed().then(function(instance) {
var rs=      web3.eth.sendTransaction({from: accounts[2], to: instance.address, value: 1.5*1e18})
console.log(rs)      
return instance.balanceOf.call(accounts[2]);
    }).then(function(total) {
      assert.equal(total.valueOf(), 150);
    });
  });
  
});
