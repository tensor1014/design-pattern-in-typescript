"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PartA1 {
    actionA() {
        return 'A1.actionA';
    }
}
class PartA2 {
    actionA() {
        return 'A2.actionA';
    }
}
class PartB1 {
    actionB() {
        return 1;
    }
}
class PartB2 {
    actionB() {
        return 2;
    }
}
class ConcreteFactory1 {
    createPartA() {
        return new PartA1();
    }
    createPartB() {
        return new PartB1();
    }
}
exports.ConcreteFactory1 = ConcreteFactory1;
class ConcreteFactory2 {
    createPartA() {
        return new PartA2();
    }
    createPartB() {
        return new PartB2();
    }
}
exports.ConcreteFactory2 = ConcreteFactory2;
class Product {
    constructor(type, partB) {
        let factory;
        if (typeof partB === 'undefined') {
            if (typeof type === 'number') {
                switch (type) {
                    case 1:
                        factory = new ConcreteFactory1();
                        break;
                    case 2:
                        factory = new ConcreteFactory2();
                        break;
                    default:
                        throw new Error('未知 Product 类型');
                }
            }
            else {
                factory = type;
            }
            this.partB = factory.createPartB();
            this.partA = factory.createPartA();
        }
        else {
            this.partA = type;
            this.partB = partB;
        }
    }
}
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ1MsT0FBTztRQUNaLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQ7SUFDUyxPQUFPO1FBQ1osTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFFRDtJQUNTLE9BQU87UUFDWixNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGO0FBRUQ7SUFDUyxPQUFPO1FBQ1osTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRjtBQUVEO0lBQ1MsV0FBVztRQUNoQixNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ00sV0FBVztRQUNoQixNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFQRCw0Q0FPQztBQUVEO0lBQ1MsV0FBVztRQUNoQixNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ00sV0FBVztRQUNoQixNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFQRCw0Q0FPQztBQUlEO0lBSUUsWUFBWSxJQUFxRCxFQUFFLEtBQXNCO1FBQ3ZGLElBQUksT0FBeUIsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2IsS0FBSyxDQUFDO3dCQUNKLE9BQU8sR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7d0JBQ2pDLEtBQUssQ0FBQztvQkFDUixLQUFLLENBQUM7d0JBQ0osT0FBTyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDakMsS0FBSyxDQUFDO29CQUNSO3dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxHQUFHLElBQXdCLENBQUM7WUFDckMsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBc0IsQ0FBQztZQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBNUJELDBCQTRCQyJ9