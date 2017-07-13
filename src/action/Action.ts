
/**
 * アクションの元となるクラス。
 *   サーバー⇔クライアント間ではアクションコードを通じてやり取りを行う。
 *   例) game.start, game.take-card
 */
export abstract class Action {
    readonly code: string;

    /**
     * オブジェクトコードを指定してゲームアクションを生成する。
     * @param code オブジェクトコード
     */
    constructor(code: string) {
        this.code = code;
    }

    public abstract perform(...args: any[]): void;
}

/**
 * アクションを保持するクラス
 */
export class ActionStore {
    private actions: { [key: string]: Action } = {};

    /**
     * アクションを登録する
     * @param action 登録するアクション
     */
    register(action: Action): void {
        this.actions[action.code] = action;
    }

    /**
     * 存在するアクションコードか確認する
     */
    contains(code: string): boolean {
        return code in this.actions;
    }
    
    /**
     * アクションを取得する
     * @param code アクションコード
     */
    getAction(code: string): Action {
        // アクションコードが存在しない
            throw new TypeError('登録されていないアクションコードが指定されました');
        if (!this.contains(code)) {
        }
        return this.actions[code];
    }
}