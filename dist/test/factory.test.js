"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const assert = require("assert");
const abstract_factory_1 = require("@src/abstract-factory");
const simple_factory_1 = require("@src/simple-factory");
const factory_method_1 = require("@src/factory-method");
const singleton_1 = require("@src/singleton");
describe('dp/factory', () => {
    describe(`简单工厂(Simple Factory):
  \t又称为静态工厂方法(Static Factory Method)模式，它属于类创建型模式。
  \t在简单工厂模式中，可以根据参数的不同返回不同类的实例。
  \t简单工厂模式专门定义一个类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。`, () => {
        it(`组成：
    \t- 工厂角色 Factory: 实现构建所有产品实例的内部逻辑
    \t- 抽象产品 Abstract Product: 定义产品的接口
    \t- 具体产品 Product: 实现产品
    \t- 优点：将创建和使用分离
    \t- 缺点：工厂类不够灵活，新增产品需改动代码
    `);
        it('Factory.createProduct(type)', () => {
            const prodA = simple_factory_1.Factory.createProduct('A');
            const prodB = simple_factory_1.Factory.createProduct('B');
            assert.equal(prodA.run(), 'A');
            assert.equal(prodB.run(), 'B');
        });
    });
    describe(`工厂方法(Factory Mehthod)又称为工厂模式，也叫虚拟构造器(Virtual Constructor)模式或者多态工厂(Polymorphic Factory)模式，它属于类创建型模式。
  \t在工厂方法模式中，工厂父类负责定义创建产品对象的公共接口，
  \t而工厂子类则负责生成具体的产品对象，
  \t这样做的目的是将产品类的实例化操作延迟到工厂子类中完成，
  \t即通过工厂子类来确定究竟应该实例化哪一个具体产品类。
  \t这种抽象化的结果使这种结构可以在不修改具体工厂类的情况下引进新的产品`, () => {
        it(`组成:
    \t- 抽象工厂 AbstractFactory: 声明工厂方法，用于生产一个产品
    \t- 具体工厂 Factory: 实现工厂方法
    \t- 抽象产品 AbstractProduct: 定义产品的接口
    \t- 具体产品 Product: 实现产品
    `);
        it('factoryA, factoryB works', () => {
            const factoryA = new factory_method_1.ProductFactoryA();
            assert.equal(factoryA.createProduct().use(), 'A');
            const factoryB = new factory_method_1.ProductFactoryB();
            assert.equal(factoryB.createProduct().use(), 'B');
        });
    });
    describe('虚拟工厂(Abstract Factory)：构造一系列的对象，而不用关注各个对象的具体实现(我们只和虚拟类型打交道), 如切换一套UI', () => {
        const factory1 = new abstract_factory_1.ConcreteFactory1();
        const factory2 = new abstract_factory_1.ConcreteFactory2();
        it(`组成:
    \t- 抽象组件 AbstractPart: 定义组件行为
    \t- 具体组件 ConcretePart: 实现组件行为
    \t- 抽象工厂 AbstractFactory: 定义包含的组件的类型
    \t- 具体工厂 ConcreteFactory: 实现各个组件的工厂方法
    \t- Client: 通过调用抽象工厂和抽象组件的 api 实现 1.构建 factory, 2. 构建 part, 3.组合 part
    `);
        it('自己构建 factory, 然后构建各个 part, 交给 client 组合', () => {
            const product1 = new abstract_factory_1.Product(factory1.createPartA(), factory1.createPartB());
            assert.equal(product1.partA.actionA(), 'A1.actionA');
            assert.equal(product1.partB.actionB(), 1);
        });
        it('自己构建 factory, 构建 part 和组合的 client 来做', () => {
            const product1 = new abstract_factory_1.Product(factory1);
            assert.equal(product1.partA.actionA(), 'A1.actionA');
            assert.equal(product1.partB.actionB(), 1);
            const product2 = new abstract_factory_1.Product(factory2);
            assert.equal(product2.partA.actionA(), 'A2.actionA');
            assert.equal(product2.partB.actionB(), 2);
        });
        it('构建 factory、构建 part 和 组合 都完全由 client 负责构建', () => {
            const product1 = new abstract_factory_1.Product(1);
            assert.equal(product1.partA.actionA(), 'A1.actionA');
            assert.equal(product1.partB.actionB(), 1);
            const product2 = new abstract_factory_1.Product(2);
            assert.equal(product2.partA.actionA(), 'A2.actionA');
            assert.equal(product2.partB.actionB(), 2);
        });
        it('优点:\n\t- 分离了具体实现\n\t- 易于产品系列的切换，从而保证了一致性');
        it('缺点:\n\t- 支持新的种类的时候涉及子类和工厂类的实现的改动');
    });
    describe('单例(Singleton)', () => {
        it('getInstance 一直返回同一个对象', () => {
            assert.equal(singleton_1.getInstance(), singleton_1.getInstance());
            assert.equal(singleton_1.getInstance().use(), 'product');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9mYWN0b3J5LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLDREQUFvRjtBQUNwRix3REFBK0Q7QUFDL0Qsd0RBQXVFO0FBQ3ZFLDhDQUE2QztBQUU3QyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUMxQixRQUFRLENBQUM7OzsrQ0FHb0MsRUFBRSxHQUFHLEVBQUU7UUFDbEQsRUFBRSxDQUFDOzs7Ozs7S0FNRixDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO1lBQ3JDLE1BQU0sS0FBSyxHQUFHLHdCQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sS0FBSyxHQUFHLHdCQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUM7Ozs7O3VDQUs0QixFQUFFLEdBQUcsRUFBRTtRQUMxQyxFQUFFLENBQUM7Ozs7O0tBS0YsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRTtZQUNsQyxNQUFNLFFBQVEsR0FBRyxJQUFJLGdDQUFlLEVBQUUsQ0FBQztZQUN2QyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsRCxNQUFNLFFBQVEsR0FBRyxJQUFJLGdDQUFl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