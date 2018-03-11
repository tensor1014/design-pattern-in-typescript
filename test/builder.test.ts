import 'module-alias/register';
import * as assert from 'assert';
import { ProductBuilder, Size } from '@src/builder';

describe('design pattern/create', () => {
  it('构建者 builder: \n\t如果需要构建一个非常复杂的对象，而又不想让默认参数在外面传播。\n\t可以将所有配置归类，并将逻辑和默认值放如构建者中，\n\t这样用户在不需要了解太多配置的情况下，通过调用构建者就能完成对象的构建\n\t注意默认参数放到builder 里面', () => { /* tslint:disable:max-line-length */
    const builder = new ProductBuilder();
    const prod = builder.setPartA('a', { cold: true })
      .setPartB(Size.Big, {})
      .setPartC(100, { foo: 'bar'})
      .build();
    assert.equal(prod.partA.type, 'A');
    assert.equal(prod.partB.type, 'B');
    assert.equal(prod.partC.type, 'C');
    assert.deepEqual(prod.partA.options, { cold: true});
    assert.deepEqual(prod.partC.options, {foo: 'bar'});
  });

});
