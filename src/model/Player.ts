import { Card } from './Card';
import { User, ConnectionUser } from './User';

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
}

/**
 * 人間が操作するプレイヤー
 */
export class HumanPlayer extends Player {
    readonly user: ConnectionUser;

    constructor(user: ConnectionUser) {
        super(user);
    }
}