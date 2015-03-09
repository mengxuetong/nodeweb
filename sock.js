/**
 * Created by MENG on 2015/3/9.
 */
var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.get('/sock',function(req,res){
    //req.setRequestHeader("Access-Control-Allow-Origin: http://localhost");
    res.sendfile('./sock.html');
})
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection',function(socket){
    socket.send('服务端的消息');
    socket.on('message',function(data){
        console.log(data);
        //socket.emit('messsage',"你更"+data);
    });
    console.log('connected');
});

server.listen(8888);