import { Card, CardHelper } from './Card';

/**
 * カードの組み合わせを表すクラス (手)
 *   大富豪では通常(?)、1~4枚の組み合わせで構成された手を切る。
 */
export class CardHand {
    readonly cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public static fromCodes(codes: string[]): CardHand {
        let cards: Card[] = [];
        codes.forEach(c => cards.push(CardHelper.createByCode(c)));
        return new CardHand(cards);
    }

    public toString(): string {
        return this.cards.toString();
    }
}