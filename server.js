/*
    本例子未成功，没有实现聊天通讯功能，暂且搁置
    20180330
 */
var ws = require("nodejs-websocket");
var obj = {};
var str1 = null,str2 = null;
var server = ws.createServer(function (conn) {
    conn.on('text', function (str) {
        console.log(str)
        if(str.split(',')[0] == 'name'){
            console.log('新的用户登录');
            obj[str.split(',')[1]] = conn
        }else{
            obj[str.split(':')[0]].sendText(str)
        }
        console.log(obj)
    })
 
    conn.on("close", function (code, reason) {
        console.log("关闭连接");
    })
    conn.on("error", function (code, reason) {
        console.log("异常关闭");
    });
}).listen(8083);
console.log("websocket连接完毕");
var express = require('express');
const path = require('path')
var app = express();
app.use(express.static(path.join(__dirname, 'html')))
app.listen(8082, () => {
    console.log(`App listening at port 8082`)
})

