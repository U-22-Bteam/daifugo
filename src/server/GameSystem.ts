import { MainServer } from './MainServer';
import { GameScene } from './scene/GameScene';
import { MatchingScene } from './scene/MatchingScene';
import { EventCode } from '../event/EventCode';
import { Player, ConnectionPlayer } from '../model/Player';
import { ConnectionUser } from 'model/User';

export class GameSystem {
    private server: MainServer;

    constructor(server: MainServer) {
        this.server = server;
    }

    public launch(): void {
        this.matching();
    }

    public matching(): void {
        let scene = new MatchingScene(4);
        scene.setup(this.server.io);
        scene.on(EventCode.GameReady, (users: ConnectionUser[]) => this.gaming(users))
    }

    public gaming(users: ConnectionUser[]): void {
        let scene = new GameScene();

        let players: Player[] = [];
        users.forEach(u => players.push(new ConnectionPlayer(u)));

        scene.setup(this.server, players);
        scene.start();
    }
}