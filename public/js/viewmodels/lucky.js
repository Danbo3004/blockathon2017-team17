
var currPoint = 20000;

function Dashboad() {
    var self = this;

    self.To = ko.observable();
    self.Amount = ko.observable();
    self.isLoading = ko.observable(false);

    self.runRandom = function (number) {

        var luckyNumber = Math.floor((Math.random() * 10) + 1);

        if (luckyNumber > 5) {
            luckyNumber = luckyNumber - (luckyNumber - 4);
        }

        if (number == luckyNumber) {            
            swal({
                title: "So Sweet!",
                text: "You are lucky man, you have "+ luckyNumber*10 +" point",
                imageUrl: 'https://lipis.github.io/bootstrap-sweetalert/assets/thumbs-up.jpg'
            });
        }
        else {
            swal({
                title: "Bored!",
                text: "Good luck, please try again!",
                imageUrl: '/public/img/game/cry.png'
            });
        }
    }
}

var modelView = new Dashboad();

ko.applyBindings(modelView, $('.page-content')[0]);
