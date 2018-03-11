import 'module-alias/register';
import * as assert from 'assert';
import { EventManager } from '@src/pub-sub';

describe('design pattern/publish-subscribe', () => {
  it('publish-subscribe 预订发布', () => {
    const manager = new EventManager();
    const ret = [];
    // const token1 = manager.subscribe('a', (payload) => {
    //   ret.push('a1');
    //   if (typeof payload !== 'undefined') {
    //     ret.push(payload);
    //   }
    // });
    // manager.subscribe('a', (payload) => {
    //   ret.push('a2');
    //   if (typeof payload !== 'undefined') {
    //     ret.push(payload);
    //   }
    // });
    // manager.subscribe('a', (payload) => {
    //   ret.push('a3');
    // });
    // manager.publish('a', 'e');
    // assert.deepEqual(ret, ['a1', 'e', 'a2', 'e', 'a3']);

    // ret = [];
    // manager.unsubscribe('a', token1);
    // manager.publish('a', 'e');
    // assert.deepEqual(ret, ['a2', 'e', 'a3']);
  });
});
