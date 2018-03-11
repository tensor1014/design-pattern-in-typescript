"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const assert = require("assert");
const observer_1 = require("@src/observer");
class SubjectA extends observer_1.Subject {
}
describe('design pattern/Observer', () => {
    it('观察者模式 Observer: Subject 维护一系列依赖于它的 Observer(观察者对象)的更新', () => {
        const subject = new SubjectA();
        const ret = [];
        const obA = new observer_1.ConcreteObserver('A', () => {
            ret.push('A');
        });
        const obB = new observer_1.ConcreteObserver('B', () => {
            ret.push('B');
        });
        const obC = new observer_1.ConcreteObserver('C', () => {
            ret.push('C');
        });
        subject.register(obA);
        subject.register(obB);
        subject.register(obC);
        subject.notify();
        assert.deepEqual(ret, ['A', 'B', 'C']);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3Qvb2JzZXJ2ZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsNENBQTBEO0FBRTFELGNBQWUsU0FBUSxrQkFBTztDQUFHO0FBRWpDLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7SUFDdkMsRUFBRSxDQUFDLHVEQUF1RCxFQUFFLEdBQUcsRUFBRTtRQUMvRCxNQUFNLE9BQU8sR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sR0FBRyxHQUFVLEVBQUUsQ0FBQztRQUN0QixNQUFNLEdBQUcsR0FBRyxJQUFJLDJCQUFnQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7WUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sR0FBRyxHQUFHLElBQUksMkJBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtZQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxHQUFHLEdBQUcsSUFBSSwyQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9