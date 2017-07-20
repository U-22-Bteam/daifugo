import * as assert from 'power-assert';
import { Field } from 'model/Field';
import { JokerTrump } from 'model/Card';
import { CardHand } from 'model/CardHand';

describe('フィールド', () => {
    context('場を流す', () => {
        it('何もない状態で流す', () => {
            const field = new Field();
            field.clear();
            assert.equal(field.getHands().length, 0);
        });
        it('2セット置いて流す', () => {
            const field = new Field();
            field.put(new CardHand([new JokerTrump(1), new JokerTrump(2)]));
            field.put(new CardHand([new JokerTrump(3)]));
            field.put(new CardHand([new JokerTrump(4), new JokerTrump(5)]));
            field.clear();
            assert.equal(field.getHands().length, 0);
        })
    });

    context('場に置く', () => {
        it('場に置いた数', () => {
            const field = new Field();
            field.put(new CardHand([new JokerTrump(1), new JokerTrump(2)]));
            field.put(new CardHand([new JokerTrump(3)]));
            assert.equal(field.getHands().length, 2);
        });
    });

    context('最後のセットを取得', () => {
        it('何もない状態で取得 => null', () => {
            const field = new Field();
            assert.equal(field.peek(), null);
        })
        it('1セット置いて取得', () => {
            const field = new Field();
            const hand = new CardHand([new JokerTrump(1), new JokerTrump(2)]);
            field.put(hand);
            assert.equal(field.peek(), hand);
        });
        it('2セット置いて取得', () => {
            const field = new Field();
            const hand1 = new CardHand([new JokerTrump(1), new JokerTrump(2)]);
            const hand2 = new CardHand([new JokerTrump(3)]);
            field.put(hand1);
            field.put(hand2);
            assert.equal(field.peek(), hand2);
        });
    });

    context('全セットを取得', () => {
        it('何もない状態で取得 => lengthが0', () => {
            const field = new Field();
            assert.equal(field.getHands().length, 0);
        });
    });
});