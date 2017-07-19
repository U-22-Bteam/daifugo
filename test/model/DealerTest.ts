import * as assert from 'power-assert';
import { User } from 'model/User';
import { Player } from 'model/Player';
import { Dealer } from 'model/Dealer';
import { CardDeck } from 'model/CardDeck';

describe('ディーラー', () => {
    const players = [
        new Player(new User('test_user1')),
        new Player(new User('test_user2')),
        new Player(new User('test_user3')),
        new Player(new User('test_user4')),
    ];
    const deck = CardDeck.createCommonlyUsedDeck();
    const dealer = new Dealer(deck, players);

    context('シャッフル', () => {
        it('枚数は同じ', () => {
            dealer.shuffleCards();
            assert.equal(deck.cards.length, dealer.cards.length);
        });
    });
});