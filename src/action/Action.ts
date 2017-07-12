
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
     * アクションを取得する
     * @param code アクションコード
     */
    getAction(code: string): Action {
        // アクションコードが存在しない
        if (code in this.actions === false) {
            throw new TypeError('登録されていないアクションコードが指定されました');
        }
        return this.actions[code];
    }
}