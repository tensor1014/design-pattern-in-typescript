import 'module-alias/register';
import * as assert from 'assert';
import { CONSTANT, ImplementorX, ImplementorY, RefinedAbstractionA, RefinedAbstractionB } from '@src/bridge';

describe('桥接(Bridge)模式：分离了应用的抽象部分和实现部分，使得这两部分可以独立修改', () => {
  it(`组成:
    \t- Abstraction: 抽象类，包含抽象的业务方法或者具体的业务方法(如 implementor 的调用)
    \t- RefinedAbstraction: 扩充抽象类
    \t- Implementor: 实际类接口
    \t- ConcreteImplementor: 具体实现类
    实现:
    \t- 将一个方案的实现区分为抽象部分(如内容、功能部分)和具体部分(如平台、配置等部分),
  `, () => { assert(true); });
  it('combine content and send as you wish', () => {
    const implX = new ImplementorX();
    const bridgeA = new RefinedAbstractionA(implX);
    assert.equal(bridgeA.action(), `${CONSTANT.contentA}.${CONSTANT.channelX}`);
    const implY = new ImplementorY();
    const bridgeB = new RefinedAbstractionB(implY);
    assert.equal(bridgeB.action(), `${CONSTANT.contentB}.${CONSTANT.channelY}`);
    const bridgeC = new RefinedAbstractionA(implY);
    assert.equal(bridgeC.action(), `${CONSTANT.contentA}.${CONSTANT.channelY}`);
  });
});
