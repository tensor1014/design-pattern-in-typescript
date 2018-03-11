"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Abstraction {
    constructor(impl) {
        this.implementor = impl;
    }
    send(content) {
        return this.implementor.send(content);
    }
}
exports.CONSTANT = {
    contentA: 'ContentA',
    contentB: 'ContentB',
    channelX: 'ChannelX',
    channelY: 'ChannelY',
};
class RefinedAbstractionA extends Abstraction {
    action() {
        const content = this.prepareContent();
        return this.send(content);
    }
    prepareContent() {
        return exports.CONSTANT.contentA;
    }
}
exports.RefinedAbstractionA = RefinedAbstractionA;
class RefinedAbstractionB extends Abstraction {
    action() {
        const content = this.prepareContent();
        return this.send(content);
    }
    prepareContent() {
        return exports.CONSTANT.contentB;
    }
}
exports.RefinedAbstractionB = RefinedAbstractionB;
class ImplementorX {
    send(content) {
        return `${content}.${exports.CONSTANT.channelX}`;
    }
}
exports.ImplementorX = ImplementorX;
class ImplementorY {
    send(content) {
        return `${content}.${exports.CONSTANT.channelY}`;
    }
}
exports.ImplementorY = ImplementorY;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnJpZGdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFFRSxZQUFZLElBQWtCO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFDUyxJQUFJLENBQUMsT0FBZTtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBRVksUUFBQSxRQUFRLEdBQUc7SUFDdEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsUUFBUSxFQUFFLFVBQVU7Q0FDckIsQ0FBQztBQUNGLHlCQUFpQyxTQUFRLFdBQVc7SUFDM0MsTUFBTTtRQUNYLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ08sY0FBYztRQUNwQixNQUFNLENBQUMsZ0JBQVEsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBUkQsa0RBUUM7QUFFRCx5QkFBaUMsU0FBUSxXQUFXO0lBQzNDLE1BQU07UUFDWCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLGNBQWM7UUFDbkIsTUFBTSxDQUFDLGdCQUFRLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQVJELGtEQVFDO0FBS0Q7SUFDUyxJQUFJLENBQUMsT0FBZTtRQUN6QixNQUFNLENBQUMsR0FBRyxPQUFPLElBQUksZ0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFKRCxvQ0FJQztBQUNEO0lBQ1MsSUFBSSxDQUFDLE9BQWU7UUFDekIsTUFBTSxDQUFDLEdBQUcsT0FBTyxJQUFJLGdCQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBSkQsb0NBSUMifQ==