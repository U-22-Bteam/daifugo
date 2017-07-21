import * as assert from 'power-assert';
import { CardDeck } from 'model/CardDeck';

context('カードデッキ', () => {
    it('普段使われるカードデッキ', () => {
        const deck = CardDeck.createCommonlyUsedDeck(true);
        assert.equal(deck.cards.length, 54, "SCDHの1~13: 52枚 + Jokerの1と2: 2枚 = 54枚");
    });
});