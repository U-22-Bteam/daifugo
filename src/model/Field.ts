import { CardHand } from './CardHand';

/**
 * 場を構成するクラス
 */
export class Field {
    private hands: CardHand[] = [];

    /**
     * 場を流す（初期化）
     */
    public clear(): void {
        this.hands = [];
        console.log('場が流れました');
    }

    /**
     * 場に置く
     */
    public put(hand: CardHand): void {
        this.hands.push(hand);
        console.log(`場にカード置かれました: ${hand.cards}`);
    }

    /**
     * 最後に置かれた1セットだけ取得（削除はしない）
     */
    public peek(): CardHand | null {
        if (this.hands.length == 0) { return null; }
        
        const lastIndex = this.hands.length - 1;
        return this.hands[lastIndex];
    }

    /**
     * 場に置かれた全てカードセットを取得
     */
    public getHands(): CardHand[] {
        return this.hands;
    }
}