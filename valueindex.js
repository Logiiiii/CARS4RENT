var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');
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
    var Piclocation = req.body.piclocation;
    var Droplocation = req.body.droplocation;
    var Picdate = req.body.piclocation;
    var Dropdate = req.body.dropdate;
    var data = {
        "piclocation":Piclocation,
        "droplocation":Droplocation,
        'picdate':Picdate,
        'dropdate':Dropdate
    }
db.collection('location').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Thanks for Login into Cars 4 Rent");       
    });
     return res.redirect('index.html');
})
app.listen(8000);
console.log("server listening at port 8000");