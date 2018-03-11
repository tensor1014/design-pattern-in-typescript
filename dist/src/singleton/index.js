"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
let instance = null;
class Product {
    use() {
        return 'product';
    }
}
function getInstance() {
    if (util_1.isNull(instance)) {
        instance = new Product();
    }
    return instance;
}
exports.getInstance = getInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2luZ2xldG9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBRTlCLElBQUksUUFBUSxHQUFzQixJQUFJLENBQUM7QUFFdkM7SUFDUyxHQUFHO1FBQ1IsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFFRDtJQUNFLEVBQUUsQ0FBQyxDQUFDLGFBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxRQUFtQixDQUFDO0FBQzdCLENBQUM7QUFMRCxrQ0FLQyJ9