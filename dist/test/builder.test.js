"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const assert = require("assert");
const builder_1 = require("@src/builder");
describe('design pattern/create', () => {
    it('构建者 builder: \n\t如果需要构建一个非常复杂的对象，而又不想让默认参数在外面传播。\n\t可以将所有配置归类，并将逻辑和默认值放如构建者中，\n\t这样用户在不需要了解太多配置的情况下，通过调用构建者就能完成对象的构建\n\t注意默认参数放到builder 里面', () => {
        const builder = new builder_1.ProductBuilder();
        const prod = builder.setPartA('a', { cold: true })
            .setPartB(builder_1.Size.Big, {})
            .setPartC(100, { foo: 'bar' })
            .build();
        assert.equal(prod.partA.type, 'A');
        assert.equal(prod.partB.type, 'B');
        assert.equal(prod.partC.type, 'C');
        assert.deepEqual(prod.partA.options, { cold: true });
        assert.deepEqual(prod.partC.options, { foo: 'bar' });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9idWlsZGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLDBDQUFvRDtBQUVwRCxRQUFRLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyw0SUFBNEksRUFBRSxHQUFHLEVBQUU7UUFDcEosTUFBTSxPQUFPLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDL0MsUUFBUSxDQUFDLGNBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQ3RCLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUM7YUFDNUIsS0FBSyxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMifQ==