
export interface ListenerCallback {
    (...args: any[]): void;
}

export interface EventHandler {
    on(eventType: string, listener: ListenerCallback): void;
}

export interface ListenersMap {
    [key: string]: ListenerCallback[];
}

/**
 * イベントの管理を行うクラス
 */
export class EventEmitter implements EventHandler {
    protected listenersMap: ListenersMap = {};

    /**
     * リスナーが登録されているか?
     */
    protected hasListeners(eventType: string): boolean {
        return eventType in this.listenersMap;
    }

    /**
     * イベントリスナーの追加
     */
    public on(eventType: string, listener: ListenerCallback) {
        if (!this.hasListeners(eventType)) {
            this.listenersMap[eventType] = [];
        }
        this.listenersMap[eventType].push(listener);
    }

    /**
     * イベントを発火する
     */
    protected emit(eventType: string, ...args: any[]): void {
        if (!this.hasListeners(eventType)) { return; }

        let listeners = this.listenersMap[eventType];
        listeners.forEach(v => v(...args));
    }

    /**
     * イベントリスナーの削除
     */
    public removeListener(eventType: string, listener: ListenerCallback) {
        let listeners = this.listenersMap[eventType];

        const index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
    }
}