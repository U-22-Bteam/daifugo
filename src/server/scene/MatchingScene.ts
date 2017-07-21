import { Scene } from './Scene';
import { ConnectionUser } from '../../model/User';
import { EventCode } from '../../event/EventCode';

/**
 * マッチング・ユーザー
 */
class MatchingUser extends ConnectionUser {
    public isReady: boolean = false;

    constructor(username: string, socket: SocketIO.Socket) {
        super(username, socket);
    }
}

interface UsersMap {
    [key: string]: MatchingUser;
}

/**
 * マッチング中のシーン
 */
export class MatchingScene extends Scene {
    private users: UsersMap = {};

    readonly needUserCount: number;

    constructor(needUserCount: number) {
        super();
        this.needUserCount = needUserCount;
    }

    public setup(io: SocketIO.Server): void {
        io.on(EventCode.Connect, (socket: SocketIO.Socket) => this.handleConnection(socket));

        console.log('[MatchingScene] セットアップ完了');
    }

    /**
     * 接続中の処理をハンドル
     */
    private handleConnection(socket: SocketIO.Socket): void {
        //socket.on(EventCode.Disconnect, () => this.onDisconnect(socket));
        socket.on(EventCode.UserJoin, (username: string) => this.onJoin(socket, username));
        socket.on(EventCode.UserReady, (id: string) => this.onReady(socket, id));
        socket.on(EventCode.UserUnready, (id: string) => this.onUnready(socket, id))
    }

    /**
     * ユーザー接続切断時の処理
     */
    private onDisconnect(socket: SocketIO.Socket): void {
        if (!this.containsUser(socket.id)) { return; }

        console.log(`[${this.users[socket.id].username}]さんが切断されました`);
        delete this.users[socket.id];
    }

    /**
     * ユーザー接続時の処理
     */
    private onJoin(socket: SocketIO.Socket, username: string): void {
        const id = socket.id;

        if (this.containsUser(id)) { return; }

        this.users[id] = new MatchingUser(username, socket);
        socket.emit(EventCode.AcceptJoin, id);

        console.log(`[${this.users[id].username}]さんが接続しました`);
    }

    /**
     * ユーザー準備完了時の処理
     */
    private onReady(socket: SocketIO.Socket, id: string): void {
        if (!this.containsUser(id)) { return; }
        if (this.users[id].isReady) { return; }

        // HACK: ソケットが維持できないので更新する (やばい)
        this.users[id].socket = socket;
        this.users[id].isReady = true;

        console.log(`[${this.users[id].username}]さんが準備完了しました`);

        if (this.readyingUserCount() >= this.needUserCount) {
            this.emit(EventCode.GameReady, this.toUserArray());
        }
    }

    private onUnready(socket: SocketIO.Socket, id: string): void {
        if (!this.containsUser(id)) { return; }
        if (!this.users[id].isReady) { return; }

        // HACK: ソケットが維持できないので更新する (やばい)
        this.users[id].socket = socket;
        this.users[id].isReady = false;

        console.log(`[${this.users[id].username}]さんが準備完了を解除しました`);        
    }

    /**
     * ユーザーが存在しているか?
     */
    private containsUser(id: string): boolean {
        return id in this.users;
    }

    /**
     * 準備完了中のユーザー数
     */
    private readyingUserCount(): number {
        let count = 0;
        for (let key in this.users) {
            const user = this.users[key];
            if (user.isReady) { count++; }
        }
        return count;
    }

    /**
     * ユーザーの配列にして返す
     */
    private toUserArray(): ConnectionUser[] {
        let users: ConnectionUser[] = [];
        for (let key in this.users) {
            const user = this.users[key];
            users.push(user);
        }
        return users;
    }
}