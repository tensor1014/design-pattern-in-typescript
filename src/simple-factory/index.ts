class Product {
  public type: string;
  public run() {
    return this.type;
  }
}
class ProductA extends Product {
  constructor() {
    super();

    this.type = 'A';
  }
}

class ProductB extends Product {
  constructor() {
    super();

    this.type = 'B';
  }
}

type ProdType = 'A' | 'B';

export class Factory {
  public static createProduct(type: ProdType) {
    if ('A' === type) {
      return new ProductA();
    } else if ('B' === type) {
      return new  ProductB();
    }
    return null;
  }
}
