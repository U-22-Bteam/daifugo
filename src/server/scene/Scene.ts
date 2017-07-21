import { EventEmitter } from '../../event/Event';

export abstract class Scene extends EventEmitter {
    public abstract setup(...args: any[]): void;
}