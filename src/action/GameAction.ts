'use strict';

import { Action } from './Action';

/**
 * ゲームアクションの元となるクラス (暫定)
 */
export abstract class GameAction extends Action {
    constructor(code: string) {
        super('game.' + code);
    }
}

/**
 * カードに関するアクション (暫定)
 */
export abstract class CardAction extends GameAction {
    constructor(code: string) {
        super('card.' + code);
    }
}
