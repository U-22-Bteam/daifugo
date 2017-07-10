'use strict';

/**
 * カードのインターフェース
 */
export interface ICard {
    /**
     * カードの識別番号を取得するメソッド
     */
    getCode(): string;
}

/**
 * カード
 */
export abstract class Card implements ICard {
    public abstract getCode(): string;
}

/**
 * カードの模様（スートというらしい）
 *   命名は様々あるが、今回はフランス式スートの英語版を採用。
 *   参照: https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%88
 */
export enum TrumpSuitType {
    Invalid,

    Spades,
    Crabs,
    Diamonds,
    Hearts,
}

/**
 * トランプ
 */
export class Trump extends Card {
    readonly suit: TrumpSuitType;
    readonly rank: number;

    /**
     * @param suit トランプの模様
     * @param rank トランプの階級（数字）
     */
    constructor(suit: TrumpSuitType, rank: number) {
        super();
        this.suit = suit;
        this.rank = rank;
    }

    public getCode(): string {
        let headerCode = CodeSuitConverter.suitTypeToHeaderCode(this.suit);
        let rankCode = this.rank.toString();
        return headerCode + rankCode;
    }
}

/**
 * ジョーカー・トランプ
 *   今回は、ジョーカーを特殊化
 */
export class JokerTrump extends Card {
    public getCode(): string {
        return 'J';
    }
}

/**
 * カードの識別コードとトランプの種別を相互変換するクラス
 */
export class CodeSuitConverter {
    /**
     * カードのヘッダーコードからトランプの種別に変換する
     * @param code カードのヘッダーコード
     * @return トランプの種別。存在しない種別が指定された場合、Invalidを返す。
     */
    public static headerCodeToSuitType(headerCode: string): TrumpSuitType {
        switch (headerCode) {
            case 'S': return TrumpSuitType.Spades;
            case 'C': return TrumpSuitType.Crabs;
            case 'D': return TrumpSuitType.Diamonds;
            case 'H': return TrumpSuitType.Hearts;
        }
        return TrumpSuitType.Invalid;
    }

    /**
     * トランプの種別からカードのヘッダーコードに変換する
     * @param code トランプの種別
     * @return カードのヘッダーコード。存在しない種別が指定された場合、undefinedを返す。
     */
    public static suitTypeToHeaderCode(suit: TrumpSuitType): string | undefined {
        switch (suit) {
            case TrumpSuitType.Spades: return 'S';
            case TrumpSuitType.Crabs: return 'C';
            case TrumpSuitType.Diamonds: return 'D';
            case TrumpSuitType.Hearts: return 'H';            
        }
        return undefined;
    }
}

/**
 * カードのヘルパクラス
 */
export class CardHelper {
    public static createByCode(code: string): Card {
        // TODO: 念のため、空白削除と大文字化
        code = code.trim().toUpperCase();

        // ジョーカー
        if (code == 'J') {
            return new JokerTrump();
        }

        // TODO: Joker以外は、2文字未満の時にエラー
        if (code.length < 2) {
            throw new TypeError('不正なコードが指定されました');
        }

        // 頭と数字を分解
        let headerCode: string = code.substring(0, 1);
        let rankCode: string = code.substring(1);

        return new Trump(CodeSuitConverter.headerCodeToSuitType(headerCode), parseInt(rankCode));
    }

    public static toCode(card: Card): string {
        return card.getCode();
    }
}