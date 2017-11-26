var CurrentPage = 1;
var RecordPerPage = 10;
var totalPage = 0;

function Dashboad() {
    var self = this;	
 
    self.Transactions = ko.observableArray([]);
    self.Offers = ko.observableArray([]);

    $(function () {
        //init temp data when code the project need get it from server site
        self.Transactions.push(new Transaction('2017/11/25 11:10', 100, 'Thế giới đi động'));
        self.Transactions.push(new Transaction('2017/11/24 8:10', 1000, 'Thời trang Nem'));
        self.Transactions.push(new Transaction('2017/11/21 11:10', -5000, 'BigC'));
        self.Transactions.push(new Transaction('2017/10/15 11:10', 1200, 'Điện máy Xanh'));
        self.Transactions.push(new Transaction('2017/10/12 21:10', 1000, 'AEON Long Biên'));
		 self.Transactions.push(new Transaction('2017/10/12 21:5', 900, 'AEON Long Biên'));
		 
		//offers
		self.Offers.push(new Offer('2017/11/25 11:10', 'Tặng 1000 Point khi mua hàng ngày 23/11', 'Thế giới đi động'));
        self.Offers.push(new Offer('2017/11/26 12:10', 'Mua sắm thả ga cả nhà cùng thích', 'Thời trang Nem'));
        self.Offers.push(new Offer('2017/11/24 11:10', 'Tặng phí bảo hiểm và 50.000 POINT khi mua Mazda 5 2017', 'BigC'));
        self.Offers.push(new Offer('2017/11/26 11:9', 'Join THE FIRST BLOCKCHAIN HACKATHON IN VIET NAM to get 2000 POINT', 'Infinity Blockchain Labs'));
        
        web3.eth.getBalance("0xf0da26fd490d42cd39e13c36e459b7ee3cd2bd11", function(error, result){
            currPoint = web3.fromWei(result.toString())*convertRate;
            $("#balance").text(currPoint);        
        });   
    });
}

var modelView = new Dashboad();

ko.applyBindings(modelView, $('.page-content')[0]);

function Transaction(time, amount, merchant){
    this.Time = Date(time);
    this.Amount = amount;
    this.Merchant = merchant;
}

function Offer(time, content, merchant){
    this.Time = moment(time);
    this.Content =content;
    this.Merchant = merchant;
}