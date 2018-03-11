"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductA {
    use() {
        return 'A';
    }
}
class ProductB {
    use() {
        return 'B';
    }
}
class ProductFactoryA {
    createProduct() {
        return new ProductA();
    }
}
exports.ProductFactoryA = ProductFactoryA;
class ProductFactoryB {
    createProduct() {
        return new ProductB();
    }
}
exports.ProductFactoryB = ProductFactoryB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmFjdG9yeS1tZXRob2QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFZQTtJQUNTLEdBQUc7UUFDUixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBQ0Q7SUFDUyxHQUFHO1FBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQUVEO0lBQ1MsYUFBYTtRQUNsQixNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFKRCwwQ0FJQztBQUVEO0lBQ1MsYUFBYTtRQUNsQixNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFKRCwwQ0FJQyJ9