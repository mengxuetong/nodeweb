var express = require('express');
var url = require('url');
var bodyParser= require('body-parser');
var multer = require('multer');
var util = require('util');
var app = express();
var fs = require('fs');
app.use(express.static(__dirname));
app.use(multer({dest:"./"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendfile('./index.html');
});
//app.get('/sock',function(req,res){
//    res.sendFile('sock.html',{root:__dirname})
//});
app.post('/reg',function(req,res){
    var urlObj = url.parse(req.url,true);
    fs.createReadStream(req.files.avatar.path).pipe(res); //读取数据流
});

app.listen(8333);