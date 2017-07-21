import * as assert from 'power-assert';
import { User } from 'model/User';
import { Player } from 'model/Player';
import { Dealer } from 'model/Dealer';
import { RuleSet } from 'model/RuleSet';

describe('ディーラー', () => {
    const players = [
        new Player(new User('test_user1')),
        new Player(new User('test_user2')),
        new Player(new User('test_user3')),
        new Player(new User('test_user4')),
    ];

    const rules = RuleSet.createDefault();
    const dealer = new Dealer(rules, players);

    context('配る', () => {
        it('とりあえず通るか', () => {
            dealer.dealToAllPlayers();
        });
    });

    context('シャッフル', () => {
        it('枚数は同じ', () => {
            dealer.shuffleCards();
            assert.equal(rules.deck.cards.length, dealer.cards.length);
        });
    });
});