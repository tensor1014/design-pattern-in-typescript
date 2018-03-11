"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    run() {
        return this.type;
    }
}
class ProductA extends Product {
    constructor() {
        super();
        this.type = 'A';
    }
}
class ProductB extends Product {
    constructor() {
        super();
        this.type = 'B';
    }
}
class Factory {
    static createProduct(type) {
        if ('A' === type) {
            return new ProductA();
        }
        else if ('B' === type) {
            return new ProductB();
        }
        return null;
    }
}
exports.Factory = Factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2ltcGxlLWZhY3RvcnkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUVTLEdBQUc7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFDRCxjQUFlLFNBQVEsT0FBTztJQUM1QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBRUQsY0FBZSxTQUFRLE9BQU87SUFDNUI7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQUlEO0lBQ1MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFjO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUssUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFURCwwQkFTQyJ9