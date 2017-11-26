module.exports = {
    ethereumjstx: require('ethereumjs-tx'),
    ethereumjswallet: require('ethereumjs-wallet'),
    stringToBuffer: function(str) {
        console.log('str ', str);
        return Buffer.from(str, 'hex');
    }
}