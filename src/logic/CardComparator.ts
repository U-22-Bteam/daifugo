'use strict';

import { IComparator } from '../common/Common';
import { Card } from '../model/Card';

/**
 * カード比較器のベース
 */
export abstract class CardComparator implements IComparator<Card> {
    public abstract compare(one: Card, another: Card): number;
}

// TODO: 強さを元に比較する比較器を作る
export class CardPowerComparator extends CardComparator {
    // TODO compareメソッドを何とかする
}