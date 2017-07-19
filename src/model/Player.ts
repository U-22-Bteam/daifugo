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

    drawCards(...cards: Card[]) {
        this.cards.push(...cards)
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