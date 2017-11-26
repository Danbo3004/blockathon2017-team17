
var currPoint = 20000;
var amount = 0;


function Dashboad() {
    var self = this;

    self.To = ko.observable();
    self.Amount = ko.observable();
    self.isLoading = ko.observable(false);

    self.Submit = function () {
        if (!Validate())
            return;

        swal({
            title: "Are you sure?",
            text: "Want buy this product!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "Yes, buy it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
            function (isConfirm) {
                if (isConfirm) {
                    var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";
                    
                    web3.eth.sendTransaction({data: code}, function(err, transactionHash) {
                        if (!err)
                        console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
    
                        setTimeout(function () {
                            self.isLoading(false);
                                
                            swal("Done!", "We'll give your product in 3 days.", "success");
                            
                            window.location.href = '/dashboad';
                        }, 1000);
                    });
                    
                } 
            });
    }
}

var modelView = new Dashboad();

ko.applyBindings(modelView, $('.page-content')[0]);

function Validate() {
    if (currPoint < parseFloat(amount)) {
        swal("Failed!", "Amount point must be <= " + currPoint + "!", "error");
        return false;
    }

    return true;
}

$(document).ready(function () {
    $("#productName").text($.urlParam("name"));
    $("#price").text($.urlParam("price"));
    amount = $.urlParam("price");

    web3.eth.getBalance("0xf0da26fd490d42cd39e13c36e459b7ee3cd2bd11", function(error, result){
        currPoint = web3.fromWei(result.toString())*convertRate;        
    });    
});