import 'module-alias/register';
import * as assert from 'assert';
import { ConcreteObserver, Subject } from '@src/observer';

class SubjectA extends Subject {}

describe('design pattern/Observer', () => {
  it('观察者模式 Observer: Subject 维护一系列依赖于它的 Observer(观察者对象)的更新', () => {
    const subject = new SubjectA();
    const ret: any[] = [];
    const obA = new ConcreteObserver('A', () => {
      ret.push('A');
    });
    const obB = new ConcreteObserver('B', () => {
      ret.push('B');
    });
    const obC = new ConcreteObserver('C', () => {
      ret.push('C');
    });

    subject.register(obA);
    subject.register(obB);
    subject.register(obC);

    subject.notify();
    assert.deepEqual(ret, ['A', 'B', 'C']);
  });
});
