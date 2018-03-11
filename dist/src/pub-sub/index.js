"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscription {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
    }
}
class Listener {
    constructor() {
        this._subscriptions = [];
        this._nextId = 0;
    }
    subscribe(callback) {
        const subscription = new Subscription(this._nextId++, callback);
        this._subscriptions[subscription.id] = subscription;
        return subscription.id;
    }
    unsubscribe(id) {
        this._subscriptions[id] = undefined;
    }
    notify(payload) {
        this._subscriptions.forEach((sub) => {
            if (sub) {
                sub.callback(payload);
            }
        });
    }
}
class EventManager {
    constructor() {
        this._listeners = new Map();
    }
    subscribe(message, callback) {
        if (typeof message !== 'string') {
            console.warn('请使用字符串作为事件名');
            return -1;
        }
        if (!this._listeners.has(message)) {
            this._listeners.set(message, new Listener());
        }
        return this._listeners.get(message).subscribe(callback);
    }
    unsubscribe(message, token) {
        if (this._listeners.get(message)) {
            this._listeners.get(message).unsubscribe(token);
        }
    }
    publish(message, payload) {
        if (this._listeners.has(message)) {
            this._listeners.get(message).notify(payload);
        }
    }
}
exports.EventManager = EventManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHViLXN1Yi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0lBQ0UsWUFDUyxFQUFVLEVBQ1YsUUFBa0I7UUFEbEIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0NBQ2pDO0FBTUQ7SUFJRTtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDTSxTQUFTLENBQUMsUUFBa0I7UUFDakMsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUNwRCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ00sV0FBVyxDQUFDLEVBQVU7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUFhO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQUVEO0lBRUU7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNNLFNBQVMsQ0FBQyxPQUFlLEVBQUUsUUFBa0I7UUFDbEQsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTSxXQUFXLENBQUMsT0FBZSxFQUFFLEtBQWE7UUFDL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0gsQ0FBQztJQUNNLE9BQU8sQ0FBQyxPQUFlLEVBQUUsT0FBYTtRQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUF6QkQsb0NBeUJDIn0=