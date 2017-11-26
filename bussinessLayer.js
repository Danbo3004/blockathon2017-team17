function getUserByUserNameAndPass(userName, pass) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/mydb";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;

      db.collection("user").find({Username: userName, Password: pass}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    });
}