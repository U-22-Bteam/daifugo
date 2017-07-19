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

    readonly cards: Card[];
    readonly players: Player[];

    constructor(rules: RuleSet, players: Player[]) {
        this.rules = rules;
        this.cards = Object.create(rules.deck.cards);
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