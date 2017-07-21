import { RuleSet } from 'model/RuleSet';
import { GameState } from 'model/GameState';
import { CardHand } from 'model/CardHand';

/**
 * カードの組み合わせが現在の状況に適用できるか（正しい組み合わせか）を検証するクラス
 */
export class CardValidator {
    private _state: GameState;      // ゲームの状態
    private _message: string = '';  // 検証時に報告したいメッセージ

    constructor(state: GameState) {
        this._state = state;
    }

    public get message(): string {
        return this._message;
    }

    /**
     * 検証する
    */
    public validate(hand: CardHand): boolean {
        return true;
    }
}