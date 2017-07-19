import { Card } from './Card';
import { CardDeck } from './CardDeck'
import { Player } from './Player';

/**
 * ディーラー（雰囲気）
 *   カードをシャッフルして配るやつ。
 *   カードを交換する際の橋渡し役にもなるかもしれない(?)
 *   たぶんプレイヤーを知っている必要がある。
 */
export class Dealer {
    readonly cards: Card[];
    readonly players: Player[];

    constructor(deck: CardDeck, players: Player[]) {
        this.cards = Object.create(deck.cards);
        this.players = players;
    }

    /**
     * カードを全プレイヤーに配る（メソッド名は適当）
     */
    public dealToAllPlayers(): void {
    }

    /**
     * カードをシャッフルするメソッド
     */
    public shuffleCards() {
    }
}