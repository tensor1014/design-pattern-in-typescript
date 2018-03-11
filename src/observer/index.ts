interface IObserver {
  uniqueID: string;
  update(): void;
}

export class ConcreteObserver implements IObserver {
  public uniqueID: string;
  private cb: () => void;
  constructor(uniqueID: string, cb: () => void) {
    this.uniqueID = uniqueID;
    this.cb = cb;
  }
  public update(): void {
    console.warn('\t', this.uniqueID, 'upates something...');
    this.cb();
  }
}

class ObserverList {
  private _list: IObserver[];
  constructor() {
    this._list = [];
  }
  public add(observer: IObserver) {
    this._list.push(observer);
  }
  public remove(observer: IObserver) {
    const i = this.indexOf(observer);
    if (i !== -1) {
      this._list.splice(i, 1);
    }
  }
  public indexOf(observer: IObserver): number {
    return this._list.findIndex((ob) => {
      return observer.uniqueID === ob.uniqueID;
    });
  }
  public count(): number {
    return this._list.length;
  }
  public get(index: number): IObserver {
    return this._list[index];
  }
}

export class Subject {
  private _observers: ObserverList;
  constructor() {
    this._observers = new ObserverList();
  }
  public register(ob: IObserver) {
    const i = this._observers.indexOf(ob);
    if (i !== -1) {
      console.warn('Observer', ob.uniqueID, 'is already in list before register');
    } else {
      this._observers.add(ob);
    }
  }
  public remove(ob: IObserver) {
    this._observers.remove(ob);
  }
  public notify() {
    const count = this._observers.count();
    for (let i = 0; i < count; i++) {
      this._observers.get(i).update();
    }
  }
}
