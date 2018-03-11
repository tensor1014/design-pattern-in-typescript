import 'module-alias/register';
import * as assert from 'assert';
import { Product, ConcreteFactory1, ConcreteFactory2 } from '@src/abstract-factory';
import { Factory as SimpleFactory } from '@src/simple-factory';
import { ProductFactoryA, ProductFactoryB } from '@src/factory-method';
import { getInstance } from '@src/singleton';

describe('dp/factory', () => {
  describe(`简单工厂(Simple Factory):
  \t又称为静态工厂方法(Static Factory Method)模式，它属于类创建型模式。
  \t在简单工厂模式中，可以根据参数的不同返回不同类的实例。
  \t简单工厂模式专门定义一个类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。`, () => {  /* tslint:disable:max-line-length*/
    it(`组成：
    \t- 工厂角色 Factory: 实现构建所有产品实例的内部逻辑
    \t- 抽象产品 Abstract Product: 定义产品的接口
    \t- 具体产品 Product: 实现产品
    \t- 优点：将创建和使用分离
    \t- 缺点：工厂类不够灵活，新增产品需改动代码
    `);
    it('Factory.createProduct(type)', () => {
      const prodA = SimpleFactory.createProduct('A');
      const prodB = SimpleFactory.createProduct('B');
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
      const factoryA = new ProductFactoryA();
      assert.equal(factoryA.createProduct().use(), 'A');
      const factoryB = new ProductFactoryB();
      assert.equal(factoryB.createProduct().use(), 'B');
    });
  });
  describe('虚拟工厂(Abstract Factory)：构造一系列的对象，而不用关注各个对象的具体实现(我们只和虚拟类型打交道), 如切换一套UI', () => {
    const factory1 = new ConcreteFactory1();
    const factory2 = new ConcreteFactory2();
    it(`组成:
    \t- 抽象组件 AbstractPart: 定义组件行为
    \t- 具体组件 ConcretePart: 实现组件行为
    \t- 抽象工厂 AbstractFactory: 定义包含的组件的类型
    \t- 具体工厂 ConcreteFactory: 实现各个组件的工厂方法
    \t- Client: 通过调用抽象工厂和抽象组件的 api 实现 1.构建 factory, 2. 构建 part, 3.组合 part
    `);

    it('自己构建 factory, 然后构建各个 part, 交给 client 组合', () => {
      const product1 = new Product(factory1.createPartA(), factory1.createPartB());
      assert.equal(product1.partA.actionA(), 'A1.actionA');
      assert.equal(product1.partB.actionB(), 1);
    });

    it('自己构建 factory, 构建 part 和组合的 client 来做', () => {
      const product1 = new Product(factory1);
      assert.equal(product1.partA.actionA(), 'A1.actionA');
      assert.equal(product1.partB.actionB(), 1);
      const product2 = new Product(factory2);
      assert.equal(product2.partA.actionA(), 'A2.actionA');
      assert.equal(product2.partB.actionB(), 2);
    });

    it('构建 factory、构建 part 和 组合 都完全由 client 负责构建', () => {
      const product1 = new Product(1);
      assert.equal(product1.partA.actionA(), 'A1.actionA');
      assert.equal(product1.partB.actionB(), 1);
      const product2 = new Product(2);
      assert.equal(product2.partA.actionA(), 'A2.actionA');
      assert.equal(product2.partB.actionB(), 2);
    });
    it('优点:\n\t- 分离了具体实现\n\t- 易于产品系列的切换，从而保证了一致性');
    it('缺点:\n\t- 支持新的种类的时候涉及子类和工厂类的实现的改动');
  });
  describe('单例(Singleton)', () => {
    it('getInstance 一直返回同一个对象', () => {
      assert.equal(getInstance(), getInstance());
      assert.equal(getInstance().use(), 'product');
    });
  });
});
