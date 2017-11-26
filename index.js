const path = require('path');
const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
})

app.get('/dashboad', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboad.html'));
})

app.get('/gift', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gift.html'));
})

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'));
})

app.get('/lucky', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lucky.html'));
})

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'shop.html'));
})

app.get('/tranfer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tranfer.html'));
})

function getUserByUserNameAndPass(userName, pass, callback) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/mydb";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;

      db.collection("users").find({Username: userName, Password:pass}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

        if(callback)
        {
          callback(result);
        }

        db.close();
      });          
    });
}

app.post('/doLogin', (req, res) => {

    // console.log(req.body.Username)
    // res.json(req.body.pass);

    getUserByUserNameAndPass(req.body.Username, req.body.pass, function(users)
    {        
        if(users == null || users.length == 0)
        {
            return res.json(-1);
        }
        else{
            return res.json(1);
        }
    });
})

app.listen(8888, () => console.log('Example app listening on port 8888!'))
