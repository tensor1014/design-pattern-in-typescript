export interface IAbstractPartA {
  actionA(): string;
}
export interface IAbstractPartB {
  actionB(): number;
}

export interface IAbstractFactory {
  createPartA(): IAbstractPartA;
  createPartB(): IAbstractPartB;
}
