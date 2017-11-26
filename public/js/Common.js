var convertRate = 1000;
var Common = function(){}
var constant = {
    wallet: 'wallet'
}
Common.saveWallet = function(data) {
    localStorage.setItem(constant.wallet, data);
}
Common.getWallet = function() {
    return localStorage.getItem(constant.wallet);
}

window.Common = Common;

function positiveNumbersonly(myfield, e, dec) {
    var key;
    var keychar;

    if (window.event)
        key = window.event.keyCode;
    else if (e)
        key = e.which;
    else
        return true;

    e = e || window.event; // IE support
    var ctrlDown = e.ctrlKey || e.metaKey; // Mac support

    // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
    if (ctrlDown && e.altKey) return true;
    else if (key === 37 || key === 39 || key === 8) return true;// left, right, back
    // Check for ctrl+c, v and x
    else if (ctrlDown && e.keyCode === 65) return true;// c
    else if (ctrlDown && e.keyCode === 67) return true; // c
    else if (ctrlDown && e.keyCode === 86) return true; // v
    else if (ctrlDown && e.keyCode === 88) return true; // x

    if (e.keyCode === 35 || e.keyCode === 36) {
        myfield.focus();
        myfield.select();

        return true;
    }

    keychar = String.fromCharCode(key);

    // control keys
    if ((key == null) || (key === 0) || (key === 8) || (key === 9) || (key === 27)) {
        return true;
    }
    else if (key === 13) {
        return false;
    }
    // numbers
    else if ((("0123456789.,").indexOf(keychar) > -1))
        return true;

    // decimal point jump
    else if (dec && (keychar == "." || keychar == ",")) {
        myfield.form.elements[dec].focus();
        return false;
    }
    else
        return false;
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}