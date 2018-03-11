interface IClient {
  createProduct(): IProductFactory;
}

interface IProductFactory {
  createProduct(): IProduct;
}

interface IProduct {
  use(): string;
}

class ProductA implements IProduct {
  public use() {
    return 'A';
  }
}
class ProductB implements IProduct {
  public use() {
    return 'B';
  }
}

export class ProductFactoryA implements  IProductFactory {
  public createProduct() {
    return new ProductA();
  }
}

export class ProductFactoryB implements IProductFactory {
  public createProduct() {
    return new ProductB();
  }
}
