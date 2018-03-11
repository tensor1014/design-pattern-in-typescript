"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const assert = require("assert");
const adapter_1 = require("@src/adapter");
describe(`适配器(Adapter),别名包装器(Wrapper)
   \t将一个接口转换成客户希望的另一个接口，使接口不兼容但能满足功能需求的类可以一起工作`, () => {
    it(`角色:
  \t Target: 目标抽象类
  \t Adapter: 适配器类
  \t Adaptee: 适配者类
  \t Client: 客户类
  \t 应用：如 web 框架 orm 模型，可以对不同的的数据库进行相同的操作
  `);
    it('将 old api 转换为 new api', () => {
        const adapter = new adapter_1.Adapter();
        assert.equal(adapter.request('A'), 'A.inOldWay');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9hZGFwdGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLDBDQUF1QztBQUV2QyxRQUFRLENBQUM7K0NBQ3NDLEVBQUUsR0FBRyxFQUFFO0lBQ3BELEVBQUUsQ0FBQzs7Ozs7O0dBTUYsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtRQUMvQixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9