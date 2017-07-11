'use strict';

import * as assert from 'power-assert';
import { Card, Trump, JokerTrump, TrumpSuitType, CodeSuitConverter, CardHelper } from '../../src/model/CardModel';

describe('カード', () => {
    context('オブジェクトコード', () => {
        it('スペードの11 (S11)', () => {
            const card : Card = new Trump(TrumpSuitType.Spades, 11);
            assert.equal(card.getCode(), 'S11');
        });
        it('クラブの3 (C3)', () => {
            const card : Card = new Trump(TrumpSuitType.Crabs, 3);
            assert.equal(card.getCode(), 'C3');
        });
        it('ダイヤの1 (D1)', () => {
            const card : Card = new Trump(TrumpSuitType.Diamonds, 1);
            assert.equal(card.getCode(), 'D1');
        });
        it('ハートの7 (H7)', () => {
            const card : Card = new Trump(TrumpSuitType.Hearts, 7);
            assert.equal(card.getCode(), 'H7');
        });
        it('ジョーカー (J)', () => {
            const card : Card = new JokerTrump();
            assert.equal(card.getCode(), 'J');
        });
    });

    context('変換系', () => {
        it('スペード -> S', () => {
            assert.equal(CodeSuitConverter.suitTypeToHeaderCode(TrumpSuitType.Spades), 'S');
        });
        it('クラブ -> C', () => {
            assert.equal(CodeSuitConverter.suitTypeToHeaderCode(TrumpSuitType.Crabs), 'C');
        });
        it('ダイヤ -> D', () => {
            assert.equal(CodeSuitConverter.suitTypeToHeaderCode(TrumpSuitType.Diamonds), 'D');
        });
        it('ハート -> H', () => {
            assert.equal(CodeSuitConverter.suitTypeToHeaderCode(TrumpSuitType.Hearts), 'H');
        });

        it('S -> スペード', () => {
            assert.equal(CodeSuitConverter.headerCodeToSuitType('S'), TrumpSuitType.Spades);
        });
        it('C -> クラブ', () => {
            assert.equal(CodeSuitConverter.headerCodeToSuitType('C'), TrumpSuitType.Crabs);
        });
        it('D -> ダイヤ', () => {
            assert.equal(CodeSuitConverter.headerCodeToSuitType('D'), TrumpSuitType.Diamonds);
        });
        it('H -> ハート', () => {
            assert.equal(CodeSuitConverter.headerCodeToSuitType('H'), TrumpSuitType.Hearts);
        });
    });

    context('ヘルパー', () => {
        it('S3 -> スペードの3', () => {
            let trump = CardHelper.createByCode('S3') as Trump;
            assert.equal(trump.suit, TrumpSuitType.Spades);
            assert.equal(trump.rank, 3);
        });
        it('H11 -> ハートの11', () => {
            let trump = CardHelper.createByCode('H11') as Trump;
            assert.equal(trump.suit, TrumpSuitType.Hearts);
            assert.equal(trump.rank, 11);
        });
        it('J -> ジョーカー', () => {
            let joker = CardHelper.createByCode('J') as JokerTrump;
            assert.equal(joker.getCode(), 'J');
        });
    });
});