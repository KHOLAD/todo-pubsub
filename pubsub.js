export const pubsub = {
    events: {},
    subscribe: function (event, fn) {
        console.log(`pubsub: subscribed to [${event}]`);
        this.events[event] = this.events[event] || [];
        this.events[event].push(fn);
    },
    dispatch: function (event, data) {
        console.log(`pubsub: dispatched [${event}] with [${data}]`);
        if (this.events[event]) {
            this.events[event].forEach(f => {
                f(data);
            });
        }
    },
    unsubscribe: function (event, fn) {
        console.log(`pubsub: unsubscribed from [${event}]`);
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(f => f !== fn);
        }
    }
}