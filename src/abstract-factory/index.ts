import { IAbstractFactory, IAbstractPartA, IAbstractPartB } from './interfaces';

class PartA1 implements IAbstractPartA {
  public actionA() {
    return 'A1.actionA';
  }
}

class PartA2 implements IAbstractPartA {
  public actionA() {
    return 'A2.actionA';
  }
}

class PartB1 implements IAbstractPartB {
  public actionB() {
    return 1;
  }
}

class PartB2 implements IAbstractPartB {
  public actionB() {
    return 2;
  }
}

export class ConcreteFactory1 implements IAbstractFactory {
  public createPartA(): IAbstractPartA {
    return new PartA1();
  }
  public createPartB(): IAbstractPartB {
    return new PartB1();
  }
}

export class ConcreteFactory2 implements IAbstractFactory {
  public createPartA(): IAbstractPartA {
    return new PartA2();
  }
  public createPartB(): IAbstractPartB {
    return new PartB2();
  }
}

type ProductType = 1 | 2;

export class Product {
  public partA: IAbstractPartA;
  public partB: IAbstractPartB;

  constructor(type: ProductType | IAbstractFactory | IAbstractPartA, partB?: IAbstractPartB) {
    let factory: IAbstractFactory;
    if (typeof partB === 'undefined') {
      if (typeof type === 'number') {
        switch (type) {
          case 1:
            factory = new ConcreteFactory1();
            break;
          case 2:
            factory = new ConcreteFactory2();
            break;
          default:
            throw new Error('未知 Product 类型');
        }
      } else {
        factory = type as IAbstractFactory;
      }
      this.partB = factory.createPartB();
      this.partA = factory.createPartA();
    } else {
      this.partA = type as IAbstractPartA;
      this.partB = partB;
    }
  }
}
