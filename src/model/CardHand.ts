import { Card } from './Card';

/**
 * カードの組み合わせを表すクラス (手)
 *   大富豪では通常(?)、1~4枚の組み合わせで構成された手を切る。
 */
export class CardHand {
    readonly cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }
}