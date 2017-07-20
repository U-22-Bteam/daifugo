"use strict";
exports.__esModule = true;
var express = require("express");
var SocketIO = require("socket.io");
var http = require("http");
var app = express();
var mime = {
    ".html": "text/html",
    ".css": "text/css"
    // 読み取りたいMIMEタイプはここに追記
};
var server = http.createServer(app);
/*
function(req, res) {
res.writeHead(200, {"Content-Type": mime[path.extname('/Users/リュウ/IdeaProjects/daifugo/c_src/MatchScreen.html')] || "text/plain"})
});
*/
var io = SocketIO.listen(server);
server.listen(1234);
app.get('/', function (req, res) {
    // res.writeHead(200, {"Content-Type": mime[path.extname('/Users/リュウ/IdeaProjects/daifugo/c_src/MatchScreen.html')] || "text/plain"})
    res.sendFile('/Users/リュウ/IdeaProjects/daifugo/c_src/MatchScreen.html'); //絶対パス
});
app.use(express.static('c_src'));
