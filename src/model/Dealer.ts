import { RuleSet } from './RuleSet'
import { Card } from './Card';
import { Player } from './Player';

/**
 * ディーラー（雰囲気）
 *   カードをシャッフルして配るやつ。
 *   カードを交換する際の橋渡し役にもなるかもしれない(?)
 *   たぶんプレイヤーを知っている必要がある。
 */
export class Dealer {
    private _rules: RuleSet;
    private _players: Player[];
    private _cards: Card[];

    constructor(rules: RuleSet, players: Player[]) {
        this._rules = rules;
        this._players = players;
        this._cards = Object.create(rules.deck.cards);
    }

    public get cards(): Card[] {
        return this._cards;
    }

    /**
     * カードを全プレイヤーに配る（メソッド名は適当）
     */
    public dealToAllPlayers(): void {
        const playersCount = this._players.length;

        let dealIndex = 0;
        this._cards.forEach(card => {
            dealIndex = (dealIndex + 1) % playersCount;
            this._players[dealIndex].draw(card);
        });
        this._cards = [];
    }

    /**
     * カードをシャッフルするメソッド
     */
    public shuffleCards() {
        for (let fromIndex = 0, len = this._cards.length; fromIndex < len; fromIndex++) {
            let toIndex = Math.floor(Math.random() * len);
            let temp = this._cards[fromIndex];
            this._cards[fromIndex] = this._cards[toIndex];
            this._cards[toIndex] = temp;
        }
    }
}