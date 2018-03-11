interface IAdapter {
  request(newParams: string): string;
}
interface IAdaptee {
  requestInOldWay(oldParams: number): string;
}

export class Adapter {
  public request(newParams: string): string {
    const old = new Adaptee();
    const oldParams = newParams.charCodeAt(0);
    return old.requestInOldWay(oldParams);
  }
}

class Adaptee implements IAdaptee {
  public requestInOldWay(oldParams: number): string {
    if (typeof oldParams !== 'number') { return ''; }
    return String.fromCharCode(oldParams) + '.inOldWay';
  }
}
