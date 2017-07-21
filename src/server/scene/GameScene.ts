import { MainServer } from 'server/MainServer';
import { Scene } from './Scene';
import { Table } from '../../model/Table';
import { RuleSet } from '../../model/RuleSet';
import { Player, ConnectionPlayer } from '../../model/Player';
import { TableController } from '../../control/TableController';

import { EventEmitter } from '../../event/Event';

export class GameScene extends Scene {
    private table: TableController;
    
    public setup(server: MainServer, players: Player[]): void {
        const rules = RuleSet.createDefault();

        const table = new Table(server, rules, players);
        this.table = new TableController(table);
        
        console.log('[GameScene] セットアップ完了');
    }

    public start(): void {
        console.log('[GameScene] ゲームを開始します');
        this.table.prepare();
    }
}