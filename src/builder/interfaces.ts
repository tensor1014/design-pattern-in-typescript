export enum Size {
  Small,
  Medium,
  Big,
}
export interface IProductBuilder {
  setPartA(name: string, options: object): IProductBuilder;
  setPartB(size: Size, options: object): IProductBuilder;
  setPartC(weight: number, options: object): IProductBuilder;
}
