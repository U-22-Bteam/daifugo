import * as SocketIO from 'socket.io';
import * as Express from 'express';
import * as Http from 'http';
//import * as fs from 'fs';
//import * as path from 'path';

export class MainServer {
    readonly app: Express.Express;
    readonly http: Http.Server;
    readonly io: SocketIO.Server;

    constructor() {
        this.app = Express();
        this.http = Http.createServer(this.app);
        this.io = SocketIO(this.http);
    }

    public listen(port: number): void {
        // 公開ディレクトリ
        this.app.use(Express.static('public'));

        // インデックス
        this.app.get('/', (req, res) => {
            res.redirect('top.html');
        });
        
        this.http.listen(process.env.PORT || port, () => {
            console.log(`Server is listening on port ${this.http.address().port}...`);
        });
    }
}