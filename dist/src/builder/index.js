"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = require("./interfaces");
exports.Size = interfaces_1.Size;
class Product {
    constructor(partA, partB, partC) {
        this._partA = partA;
        this._partB = partB;
        this._partC = partC;
    }
    get partA() {
        return this._partA;
    }
    get partB() {
        return this._partB;
    }
    get partC() {
        return this._partC;
    }
}
exports.Product = Product;
class ProductBuilder {
    constructor(partA = {}, partB = {}, partC = {}) {
        this.prod = {};
        this.prod.partA = partA;
        this.prod.partB = partB;
        this.prod.partC = partC;
    }
    setPartA(name, options = {}) {
        Object.assign(this.prod.partA, {
            type: 'A',
            name,
            options,
        });
        return this;
    }
    setPartB(size, options = {}) {
        Object.assign(this.prod.partB, {
            type: 'B',
            size,
            options,
        });
        return this;
    }
    setPartC(weight, options = {}) {
        Object.assign(this.prod.partC, {
            type: 'C',
            weight,
            options,
        });
        return this;
    }
    build() {
        return new Product(this.prod.partA, this.prod.partB, this.prod.partC);
    }
}
exports.ProductBuilder = ProductBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnVpbGRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUFvQztBQUEzQiw0QkFBQSxJQUFJLENBQUE7QUFFYjtJQUtFLFlBQVksS0FBVSxFQUFFLEtBQVUsRUFBRSxLQUFVO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQXBCRCwwQkFvQkM7QUFFRDtJQUdFLFlBQVksUUFBZSxFQUFFLEVBQUUsUUFBZSxFQUFFLEVBQUUsUUFBZSxFQUFFO1FBRjNELFNBQUksR0FBeUIsRUFBRSxDQUFDO1FBR3RDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSxRQUFRLENBQUMsSUFBWSxFQUFFLFVBQWtCLEVBQUU7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDZjtZQUNFLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSTtZQUNKLE9BQU87U0FDUixDQUNGLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLFFBQVEsQ0FBQyxJQUFVLEVBQUUsVUFBa0IsRUFBRTtRQUM5QyxNQUFNLENBQUMsTUFBTSxDQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNmO1lBQ0UsSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJO1lBQ0osT0FBTztTQUNSLENBQ0YsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sUUFBUSxDQUFDLE1BQWMsRUFBRSxVQUFrQixFQUFFO1FBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2Y7WUFDRSxJQUFJLEVBQUUsR0FBRztZQUNULE1BQU07WUFDTixPQUFPO1NBQ1IsQ0FDRixDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxLQUFLO1FBQ1YsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNGO0FBNUNELHdDQTRDQyJ9