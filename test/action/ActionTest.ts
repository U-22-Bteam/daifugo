import * as assert from 'power-assert';
import { Action, ActionStore } from 'action/Action';

describe('アクション', () => {
    const TestActionCode = 'test.action';

    class TestAction extends Action {
        constructor(code: string) {
            super(code);
        }

        public perform(): void {
        }
    };

    context('アクション（ベース）', () => {
        it('正しいコードを返す', () => {
            const action: Action = new TestAction(TestActionCode);
            assert.equal(action.code, TestActionCode);
        });
    });    
    context('アクション・ストア', () => {
        it('正しいアクションとコードを返す', () => {
            const store: ActionStore = new ActionStore();
            store.register(new TestAction(TestActionCode));

            const returnAction: Action = store.getAction(TestActionCode);
            assert.equal(returnAction.code, TestActionCode);
        });
    });
});
