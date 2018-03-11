import { Size, IProductBuilder } from './interfaces';
export { Size } from './interfaces';

export class Product {
  private _partA: any;
  private _partB: any;
  private _partC: any;

  constructor(partA: any, partB: any, partC: any) {
    this._partA = partA;
    this._partB = partB;
    this._partC = partC;
  }

  public get partA() {
    return this._partA;
  }
  public get partB() {
    return this._partB;
  }
  public get partC() {
    return this._partC;
  }
}

export class ProductBuilder implements IProductBuilder {
  private prod: {[key: string]: any} = {};

  constructor(partA: object= {}, partB: object= {}, partC: object= {}) {
    this.prod.partA = partA;
    this.prod.partB = partB;
    this.prod.partC = partC;
  }
  public setPartA(name: string, options: object = {}) {
    Object.assign(
      this.prod.partA,
      {
        type: 'A',
        name,
        options,
      },
    );
    return this;
  }
  public setPartB(size: Size, options: object = {}) {
    Object.assign(
      this.prod.partB,
      {
        type: 'B',
        size,
        options,
      },
    );
    return this;
  }
  public setPartC(weight: number, options: object = {}) {
    Object.assign(
      this.prod.partC,
      {
        type: 'C',
        weight,
        options,
      },
    );
    return this;
  }
  public build(): Product {
    return new Product(this.prod.partA, this.prod.partB, this.prod.partC);
  }
}
