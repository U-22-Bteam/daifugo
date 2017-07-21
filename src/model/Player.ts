import { Card } from './Card';
import { User, ConnectionUser } from './User';
import { EventCode } from 'event/EventCode';

/**
 * プレイヤーの基底クラス
 */
export class Player {
    readonly user: User;
    readonly cards: Card[] = [];

    constructor(user: User) {
        this.user = user;
    }

    /**
     * カードを引くメソッド
     */ 
    public draw(card: Card): void {
        this.cards.push(card);
    }

    /**
     * カードを捨てるメソッド
     */
    public discard(card: Card): void {
        const index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
    }

    /**
     * コードからカードを捨てるメソッド
     */
    public discardByCode(code: string): void {
        const filteredCards = this.cards.filter(c => c.getCode() == code);
        if (filteredCards.length == 0) {
            throw new TypeError('存在しないコード');
        }
        
        const card = filteredCards[0];
        this.discard(card);
    }
}

/**
 * 人間が操作するプレイヤー
 */
export class ConnectionPlayer extends Player {
    readonly user: ConnectionUser;

    constructor(user: ConnectionUser) {
        super(user);
    }

    public draw(card: Card): void {
        super.draw(card);
        this.user.socket.emit(EventCode.UserCardDraw, card);
    }

    public discard(card: Card): void {
        super.discard(card);
        this.user.socket.emit(EventCode.UserCardDiscard, card);
    }
}