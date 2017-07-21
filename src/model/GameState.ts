import { RuleSet } from './RuleSet';
import { Field } from './Field';

/**
 * ゲームの状態
 */
export class GameState {
    readonly rules: RuleSet;    // ルール・セット
    readonly field: Field;

    constructor(rules: RuleSet, field: Field) {
        this.rules = rules;
        this.field = field;
    }
}