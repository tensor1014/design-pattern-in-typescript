"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const assert = require("assert");
const bridge_1 = require("@src/bridge");
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
        const implX = new bridge_1.ImplementorX();
        const bridgeA = new bridge_1.RefinedAbstractionA(implX);
        assert.equal(bridgeA.action(), `${bridge_1.CONSTANT.contentA}.${bridge_1.CONSTANT.channelX}`);
        const implY = new bridge_1.ImplementorY();
        const bridgeB = new bridge_1.RefinedAbstractionB(implY);
        assert.equal(bridgeB.action(), `${bridge_1.CONSTANT.contentB}.${bridge_1.CONSTANT.channelY}`);
        const bridgeC = new bridge_1.RefinedAbstractionA(implY);
        assert.equal(bridgeC.action(), `${bridge_1.CONSTANT.contentA}.${bridge_1.CONSTANT.channelY}`);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpZGdlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L2JyaWRnZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQStCO0FBQy9CLGlDQUFpQztBQUNqQyx3Q0FBNkc7QUFFN0csUUFBUSxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsRUFBRTtJQUN6RCxFQUFFLENBQUM7Ozs7Ozs7R0FPRixFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLEVBQUU7UUFDOUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUM7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSw0QkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLGlCQUFRLENBQUMsUUFBUSxJQUFJLGlCQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RSxNQUFNLEtBQUssR0FBRyxJQUFJLHFCQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLDRCQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsaUJBQVEsQ0FBQyxRQUFRLElBQUksaUJBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sT0FBTyxHQUFHLElBQUksNEJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxpQkFBUSxDQUFDLFFBQVEsSUFBSSxpQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9