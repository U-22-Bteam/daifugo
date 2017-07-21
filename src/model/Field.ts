import { CardHand } from './CardHand';

/**
 * 場を構成するクラス
 */
export class Field {
    private _hands: CardHand[] = [];

    public hands(): CardHand[] {
        return this._hands;
    }

    /**
     * 場を流す（初期化）
     */
    public clear(): void {
        this._hands = [];
        console.log('場が流れました');
    }

    /**
     * 場に置く
     */
    public put(hand: CardHand): void {
        this._hands.push(hand);
        console.log(`場にカード置かれました: ${hand.cards}`);
    }

    /**
     * 最後に置かれた1セットだけ取得（削除はしない）
     */
    public peek(): CardHand | null {
        if (this._hands.length == 0) { return null; }
        
        const lastIndex = this._hands.length - 1;
        return this._hands[lastIndex];
    }
}