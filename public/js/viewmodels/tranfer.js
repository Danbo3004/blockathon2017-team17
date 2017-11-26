
var currPoint = 20000;

function Dashboad() {
    var self = this;

    self.To = ko.observable();
    self.Amount = ko.observable();
    self.isLoading = ko.observable(false);

    self.Submit = function () {
        if (!Validate())
            return;

        $("#dvMsg").addClass("display-hide");

        swal({
            title: "",
            text: "Are your sure want execute the action?",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            confirmButtonText: "OK", closeOnConfirm: true
        }, function (isChoose) {
            if (isChoose) {
                self.isLoading(true);
                //call smart contact to exec transaction
                var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";
                
                web3.eth.sendTransaction({data: code}, function(err, transactionHash) {
                    if (!err)
                    console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"

                    setTimeout(function () {
                        self.isLoading(false);

                        toastr.success("The transaction has been successfully!");
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
    var address = $.trim($("#txtTo").val());
    if (address == "") {
        $("#msg").text("Please enter address you want to tranfer point!")
        $("#dvMsg").addClass("alert-danger").removeClass("display-hide");
        $("#txtTo").focus();
        return false;
    }

    if (address.length != 42) {
        $("#message").text("The address is incorrect!")
        $("#txtPassword").focus();
        $("#dvMsg").addClass("alert-danger").removeClass("display-hide");
        return false;
    }

    var amount = $.trim($("#txtAmount").val());

    if (amount == "") {
        $("#msg").text("Please enter amount point!")
        $("#txtAmount").focus();
        $("#dvMsg").addClass("alert-danger").removeClass("display-hide");
        return false;
    }

    if (amount == 0) {
        $("#msg").text("Amount point must be > 0!")
        $("#txtAmount").focus();
        $("#dvMsg").addClass("alert-danger").removeClass("display-hide");
        return false;
    }

    if (currPoint < amount) {
        $("#msg").text("Amount point must be <= " + currPoint + "!")
        $("#txtAmount").focus();
        $("#dvMsg").addClass("alert-danger").removeClass("display-hide");
        return false;
    }

    return true;
}

$(document).ready(function () {
    $("#txtTo").on("change", function () {
        if ($.trim($("#txtTo").val()) == "") {
            $("#dvMsg").addClass("alert-danger").removeClass("display-hide");
            return;
        }
    });

    $("#txtAmount").on("change", function () {
        if ($.trim($("#txtAmount").val()) == "") {
            $("#dvMsg").addClass("alert-danger").removeClass("display-hide");
            return;
        }
    });

    web3.eth.getBalance("0xf0da26fd490d42cd39e13c36e459b7ee3cd2bd11", function(error, result){
        currPoint = web3.fromWei(result.toString())*convertRate;
        $("#balance").text(currPoint);        
    });    
});