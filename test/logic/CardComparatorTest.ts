import * as assert from 'power-assert';
import { CardPowerComparator } from 'logic/CardComparator';
import { Card, Trump, JokerTrump, TrumpSuitType } from 'model/Card';

describe('カード比較器', () => {
    const comparator = new CardPowerComparator();

    context('比較', () => {
        it('スペードの11とハートの13: ハートの13', () => {
            const card1 = new Trump(TrumpSuitType.Spades, 11);
            const card2 = new Trump(TrumpSuitType.Hearts, 13);
            assert.equal(comparator.compare(card1, card2) > 0, true);
        });
        it('クラブの2とクラブの7: クラブの2', () => {
            const card1 = new Trump(TrumpSuitType.Crabs, 2);
            const card2 = new Trump(TrumpSuitType.Crabs, 7);
            assert.equal(comparator.compare(card1, card2) < 0, true);
        });
        it('ジョーカーとダイヤの1: ジョーカー', () => {
            const card1 = new JokerTrump(0);
            const card2 = new Trump(TrumpSuitType.Diamonds, 1);
            assert.equal(comparator.compare(card1, card2) < 0, true);
        });
        it('ダイヤの3とクラブの3: 同じ', () => {
            const card1 = new Trump(TrumpSuitType.Diamonds, 3);
            const card2 = new Trump(TrumpSuitType.Crabs, 3);
            assert.equal(comparator.compare(card1, card2) == 0, true);
        });
    });

    context('並び替え', () => {
        it('[C3,D5,J0,C1,H1] -> [C3,D5,C1,H1,J0]', () => {
            const C3 = new Trump(TrumpSuitType.Crabs, 3);
            const D5 = new Trump(TrumpSuitType.Diamonds, 5);
            const J0 = new JokerTrump(0);
            const C1 = new Trump(TrumpSuitType.Crabs, 1);
            const H1 = new Trump(TrumpSuitType.Hearts, 1);

            const cards: Card[] = [C3,D5,J0,C1,H1];
            cards.sort(comparator.compare);

            assert.equal(cards, [C3,D5,C1,H1,J0]);
        });
    });
});