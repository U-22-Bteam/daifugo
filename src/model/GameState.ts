import { Player } from './Player';
import { RuleSet } from './RuleSet';
import { Field } from './Field';

/**
 * ゲームの状態
 */
export class GameState {
    readonly players: Player[]; // プレイヤー
    readonly rules: RuleSet;    // ルール・セット
    readonly field: Field;

    constructor(players: Player[], rules: RuleSet, field: Field) {
        this.players = players;
        this.rules = rules;
        this.field = field;
    }
}