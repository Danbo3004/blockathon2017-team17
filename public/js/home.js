
var abiToken = [{
    "constant": true,
    "inputs": [
        {
            "name": "_addr",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "type": "function"
}];


$(document).ready(() => {
    var addressToken = '0x9b63124631f53fb9e6accfc6f13856463888e56d'
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    var ethWallet = window.ethlib.ethereumjswallet;
    var Transaction = window.ethlib.ethereumjstx;

    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    // var walletData = window.Common.getWallet();
    // if (!walletData) {
    //     return alert('Wallet doesn\'t exit')
    // }
    // var walletData = JSON.parse(walletData);

    // $('#txt-address').val(walletData.address);
    // $('#txt-contract').val(addressToken);

    // Load contract
    var tokenContract = web3.eth.contract(abiToken).at(addressToken);
    loadInfo(tokenContract)

    // Get token number
    tokenContract.balanceOf('0x' + walletData.address, function (err, rs) {
        if (err) {
            return alert(err);
        }
        $('#txt-token').val(rs.toString(10));
    });

    $('#btn-buy').on('click', function () {
        var pwd = prompt("Input password ");
        if (!pwd || !pwd.length) {
            return alert("Input password");
        }
        var wallet;
        try {
            var wallet = ethWallet.fromV3(walletData, pwd);
        } catch (err) {
            return alert('Wrong password')
        }

        var privKey = wallet.getPrivateKey();

        web3.eth.getTransactionCount('0x' + walletData.address, function (err, txCount) {
            console.log('txCount ', txCount, 'walletData.address ', walletData.address);
            if (typeof txCount == 'object') {
                txCount = txCount.toString(10);
            }
            var rawTransactionObj = {
                nonce: web3.toHex(txCount),
                to: addressToken,
                value: web3.toHex(web3.toWei(0.1, 'ether')),
                gasPrice: web3.toHex(21 * 1e9),
                gasLimit: web3.toHex(300000),
            }
            var tx = new Transaction(rawTransactionObj);
            tx.sign(privKey)
            var serializeTx = '0x' + tx.serialize().toString('hex')
            console.log(serializeTx);
            web3.eth.sendRawTransaction(serializeTx, (error, txHash) => {
                if (err) {
                    alert(err);
                }
                if (txHash) {
                    loadInfo(tokenContract);
                    $('#list-tx').append(`<li>${txHash}</li>`)

                } else {
                    alert("There is something wrong: Please check your balance or smartcontract address")
                }
            })
        })
    })


    function loadInfo(tokenContract) {
        // Get ETH balance 
        web3.eth.getBalance('0x' + walletData.address, function (err, rs) {
            if (err) {
                return alert(err);
            }
            console.log(rs.toString(10));
            $('#txt-balance').val(rs.toString(10))
        })

        // Get token number
        tokenContract.balanceOf('0x' + walletData.address, function (err, rs) {
            if (err) {
                return alert(err);
            }
            $('#txt-token').val(rs.toString(10));
        });
    }

})