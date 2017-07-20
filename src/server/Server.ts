import * as express from 'express'
import * as SocketIO from 'socket.io'
import * as http from 'http'
import *as path from 'path'

const app = express();

let mime:any = {
    ".html": "text/html",
    ".css":  "text/css"
    // 読み取りたいMIMEタイプはここに追記
};
const server = http.createServer(app);
    /*
    function(req, res) {
    res.writeHead(200, {"Content-Type": mime[path.extname('/Users/リュウ/IdeaProjects/daifugo/c_src/MatchScreen.html')] || "text/plain"})
});
*/
const io = SocketIO.listen(server);


server.listen(1234);

app.get('/', function(req, res){
   // res.writeHead(200, {"Content-Type": mime[path.extname('/Users/リュウ/IdeaProjects/daifugo/c_src/MatchScreen.html')] || "text/plain"})
    res.sendFile('/Users/リュウ/IdeaProjects/daifugo/c_src/MatchScreen.html'); //絶対パス
});

app.use(express.static('c_src'));
