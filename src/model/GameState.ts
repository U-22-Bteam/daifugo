
import { Field } from './Field';

/**
 * ゲームの状態
 */
export class GameState {
    readonly field: Field;

    constructor(field: Field) {
        this.field = field;
    }
}