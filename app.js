var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/login');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/sign_up', function(req,res){
    var Username = req.body.username;
    var Password = req.body.password;
    var data = {
        "username":Username,
        "password":Password,
    }
db.collection('page').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Thanks for Login into Cars 4 Rent");       
    });
     return res.redirect('index.html');
})
app.listen(3000);
console.log("server listening at port 3000");