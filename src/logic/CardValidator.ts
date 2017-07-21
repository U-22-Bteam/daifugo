import { RuleSet } from 'model/RuleSet';
import { GameState } from 'model/GameState';
import { CardHand } from 'model/CardHand';

/**
 * カードの組み合わせが現在の状況に適用できるか（正しい組み合わせか）を検証するクラス
 */
export class CardValidator {
    private rules: RuleSet;
    private state: GameState;

    constructor(rules: RuleSet, state: GameState) {
        this.rules = rules;
        this.state = state;
    }

    /**
     * 検証する
    */
    public validate(hand: CardHand) {
        
    }
}