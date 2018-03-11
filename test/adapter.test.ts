import 'module-alias/register';
import * as assert from 'assert';
import { Adapter } from '@src/adapter';

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
    const adapter = new Adapter();
    assert.equal(adapter.request('A'), 'A.inOldWay');
  });

});
