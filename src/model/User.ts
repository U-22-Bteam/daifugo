import * as SocketIO from 'socket.io';

export class User {
    readonly username: string;

    constructor(username: string) {
        this.username = username;
    }
}

export class ConnectionUser extends User {
    public socket: SocketIO.Socket;

    constructor(username: string, socket: SocketIO.Socket) {
        super(username);
        this.socket = socket;
    }
}