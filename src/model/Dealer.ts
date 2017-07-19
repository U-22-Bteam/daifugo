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
    private rules: RuleSet;
    private players: Player[];

    readonly cards: Card[];

    constructor(rules: RuleSet, players: Player[]) {
        this.rules = rules;
        this.cards = Object.create(rules.deck.cards);
        this.players = players;
    }

    /**
     * カードを全プレイヤーに配る（メソッド名は適当）
     */
    public dealToAllPlayers(): void {
        const playersCount = this.players.length;

        let dealIndex = 0;
        this.cards.forEach(card => {
            dealIndex = dealIndex + 1 % playersCount;
            this.players[dealIndex].draw(card);
        });
    }

    /**
     * カードをシャッフルするメソッド
     */
    public shuffleCards() {
        for (let fromIndex = 0, len = this.cards.length; fromIndex < len; fromIndex++) {
            let toIndex = Math.floor(Math.random() * len);
            let temp = this.cards[fromIndex];
            this.cards[fromIndex] = this.cards[toIndex];
            this.cards[toIndex] = temp;
        }
    }
}