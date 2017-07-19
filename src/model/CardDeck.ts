import { Card, Trump, JokerTrump, TrumpSuitType } from './Card';

/**
 * カードを構成するクラス
 */
export class CardDeck {
    readonly cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    /**
     * 普段よく使われるデッキを作成するメソッド
     * @param useJokers ジョーカーを使用するか?
     */
    public static createCommonlyUsedDeck(useJokers: boolean = true): CardDeck {
        let cards: Card[] = new Array<Card>();

        for (let rank = 1; rank <= 13; rank++) {
            cards.push(new Trump(TrumpSuitType.Spades, rank));
            cards.push(new Trump(TrumpSuitType.Crabs, rank));
            cards.push(new Trump(TrumpSuitType.Diamonds, rank));
            cards.push(new Trump(TrumpSuitType.Hearts, rank));
        }

        if (useJokers) {
            cards.push(new JokerTrump(1));
            cards.push(new JokerTrump(2));
        }

        return new CardDeck(cards);
    }
}