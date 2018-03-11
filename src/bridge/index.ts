interface IAction {
  prepareContent(): string;
}
abstract class Abstraction {
  protected implementor: IImplementor;
  constructor(impl: IImplementor) {
    this.implementor = impl;
  }
  protected send(content: string): string {
    return this.implementor.send(content);
  }
}

export const CONSTANT = {
  contentA: 'ContentA',
  contentB: 'ContentB',
  channelX: 'ChannelX',
  channelY: 'ChannelY',
};
export class RefinedAbstractionA extends Abstraction {
  public action() {
    const content = this.prepareContent();
    return this.send(content);
  }
  private prepareContent() {
    return CONSTANT.contentA;
  }
}

export class RefinedAbstractionB extends Abstraction {
  public action() {
    const content = this.prepareContent();
    return this.send(content);
  }
  public prepareContent() {
    return CONSTANT.contentB;
  }
}

interface IImplementor {
  send(content: string): string;
}
export class ImplementorX implements IImplementor {
  public send(content: string): string {
    return `${content}.${CONSTANT.channelX}`;
  }
}
export class ImplementorY implements IImplementor {
  public send(content: string): string {
    return `${content}.${CONSTANT.channelY}`;
  }
}
