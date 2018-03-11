"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Adapter {
    request(newParams) {
        const old = new Adaptee();
        const oldParams = newParams.charCodeAt(0);
        return old.requestInOldWay(oldParams);
    }
}
exports.Adapter = Adapter;
class Adaptee {
    requestInOldWay(oldParams) {
        if (typeof oldParams !== 'number') {
            return '';
        }
        return String.fromCharCode(oldParams) + '.inOldWay';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWRhcHRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BO0lBQ1MsT0FBTyxDQUFDLFNBQWlCO1FBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFORCwwQkFNQztBQUVEO0lBQ1MsZUFBZSxDQUFDLFNBQWlCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7SUFDdEQsQ0FBQztDQUNGIn0=