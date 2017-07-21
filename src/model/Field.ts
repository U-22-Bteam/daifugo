import { CardHand } from './CardHand';
import { MainServer } from 'server/MainServer';
import { EventCode } from '../event/EventCode';

/**
 * 場を構成するクラス
 */
export class Field {
    private _hands: CardHand[] = [];

    public hands(): CardHand[] {
        return this._hands;
    }

    /**
     * 場を流す（初期化）
     */
    public clear(): void {
        this._hands = [];
        console.log('場が流れました');
    }

    /**
     * 場に置く
     */
    public put(hand: CardHand): void {
        this._hands.push(hand);
        console.log(`場にカード置かれました: ${hand.cards}`);
    }

    /**
     * 最後に置かれた1セットだけ取得（削除はしない）
     */
    public peek(): CardHand | null {
        if (this._hands.length == 0) { return null; }
        
        const lastIndex = this._hands.length - 1;
        return this._hands[lastIndex];
    }
}

/**
 * サーバー・クライアント間でイベント処理を行うフィールド（場）
 */
export class ConnectionField extends Field {
    private server: MainServer;

    constructor(server: MainServer) {
        super();
        this.server = server;
    }

    public clear(): void {
        super.clear();
        this.server.io.emit(EventCode.FieldClear);
    }

    public put(hand: CardHand): void {
        super.put(hand);
        this.server.io.emit(EventCode.FieldPut, hand);
    }
}