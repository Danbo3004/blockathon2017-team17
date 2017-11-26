$(document).ready(() => {
    var ethWallet = window.ethlib.ethereumjswallet;
    console.log('ready');
    $('#btn-login').on('click', function () {
        var privateKey = $('#txt-prv-key').val();
        var pwd = $('#txt-pwd').val();
        try {
            privateKey = window.ethlib.stringToBuffer(privateKey);
            var wallet = ethWallet.fromPrivateKey(privateKey);
            var v3 = wallet.toV3(pwd, {
                kdf: 'scrypt',
                dklen: 32,
                n: 2, //
                r: 8,
                p: 1,
                cipher: 'aes-128-ctr'
            })
            // https://github.com/ethereumjs/ethereumjs-wallet#remarks-about-tov3
            window.Common.saveWallet(JSON.stringify(v3));
            window.location = './home'
        }  catch(err) {
            console.log(err);
            alert('Private key does not satisfy the curve requirements')
        }
    })
})