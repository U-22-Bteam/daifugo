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
    Spades,     // スペード
    Crabs,      // クラブ
    Diamonds,   // ダイヤ
    Hearts,     // ハート
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
        const headerCode = CodeSuitConverter.suitTypeToHeaderCode(this.suit);
        const rankCode = this.rank.toString();
        return headerCode + rankCode;
    }
}

/**
 * ジョーカー・トランプ
 *   今回は、ジョーカーを特殊化
 */
export class JokerTrump extends Card {
    readonly id: number;
    
    constructor(id: number) {
        super();
        this.id = id;
    }

    public getCode(): string {
        return 'J' + this.id;
    }
}

/**
 * カードの識別コードとトランプの種別を相互変換するクラス
 *   HACK: メソッドに改善の余地あり。
 */
export class CodeSuitConverter {
    /**
     * カードのヘッダーコードからトランプの種別に変換する
     * @param code カードのヘッダーコード
     * @return トランプの種別。存在しない種別が指定された場合、undefinedを返す。
     */
    public static headerCodeToSuitType(headerCode: string): TrumpSuitType|undefined {
        switch (headerCode) {
            case 'S': return TrumpSuitType.Spades;
            case 'C': return TrumpSuitType.Crabs;
            case 'D': return TrumpSuitType.Diamonds;
            case 'H': return TrumpSuitType.Hearts;
        }
        return undefined;
    }

    /**
     * トランプの種別からカードのヘッダーコードに変換する
     * @param code トランプの種別
     * @return カードのヘッダーコード。存在しない種別が指定された場合、undefinedを返す。
     */
    public static suitTypeToHeaderCode(suit: TrumpSuitType): string|undefined {
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
        // 2文字未満の際はエラー
        if (code.length < 2) {
            throw new TypeError('不正なコード: 無効なコードです');
        }

        // ヘッダーコードと数値コードを分離
        const headerCode = code.charAt(0);
        const numberCode = code.substring(1)

        const number = parseInt(numberCode, 10);
        if (isNaN(number)) {
            throw new TypeError('不正なコード: 数値コードが数値に変換できません');
        }

        // ジョーカー
        if (headerCode == 'J') {
            return new JokerTrump(number);
        }

        const suit = CodeSuitConverter.headerCodeToSuitType(headerCode);
        if (suit === undefined) {
            throw new TypeError('不正なコード: トランプのヘッダーコードが無効です');
        }
        return new Trump(suit, number);
    }

    public static toCode(card: Card): string {
        return card.getCode();
    }
}