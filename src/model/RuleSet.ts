import { CardDeck } from './CardDeck';

/**
 * ルール・セット（雰囲気）
 */
export class RuleSet {
    public deck: CardDeck;
    public useJokers: boolean;

    public static createDefault(): RuleSet {
        let rules = new RuleSet();
        rules.useJokers = true;
        rules.deck = CardDeck.createCommonlyUsedDeck(rules.useJokers);
        return rules;
    }
}