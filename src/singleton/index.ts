import { Nullable } from '@interfaces';
import { isNull } from 'util';

let instance: Nullable<Product> = null;

class Product {
  public use() {
    return 'product';
  }
}

export function getInstance() {
  if (isNull(instance)) {
    instance = new Product();
  }
  return instance as Product;
}
