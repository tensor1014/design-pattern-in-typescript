type Callback = (payload?: any) => void;
class Subscription {
  constructor(
    public id: number,
    public callback: Callback)  {}
}
interface IListener {
  subscribe(callback: Callback): number;
  unsubscribe(id: number): void;
  notify(payload?: any): void;
}
class Listener implements IListener {
  private _subscriptions: Subscription[];
  private _nextId: number;

  constructor() {
    this._subscriptions = [];
    this._nextId = 0;
  }
  public subscribe(callback: Callback): number {
    const subscription = new Subscription(this._nextId++, callback);
    this._subscriptions[subscription.id] = subscription;
    return subscription.id;
  }
  public unsubscribe(id: number): void {
    this._subscriptions[id] = undefined;
  }
  public notify(payload?: any): void {
    this._subscriptions.forEach((sub) => {
      if (sub) {
        sub.callback(payload);
      }
    });
  }
}

export class EventManager {
  private _listeners: Map<string, IListener>;
  constructor() {
    this._listeners = new Map();
  }
  public subscribe(message: string, callback: Callback): number {
    if (typeof message !== 'string') {
      console.warn('请使用字符串作为事件名');
      return -1;
    }
    if (!this._listeners.has(message)) {
      this._listeners.set(message, new Listener());
    }
    return this._listeners.get(message).subscribe(callback);
  }
  public unsubscribe(message: string, token: number) {
    if (this._listeners.get(message)) {
      this._listeners.get(message).unsubscribe(token);
    }
  }
  public publish(message: string, payload?: any) {
    if (this._listeners.has(message)) {
      this._listeners.get(message).notify(payload);
    }
  }
}
