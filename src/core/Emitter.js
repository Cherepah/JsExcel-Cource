export class Emitter {
    constructor() {
        this.listeners = {};
    }

    emit(eventName, ...args) {
        if (!Array.isArray(this.listeners[eventName])) {
            return false;
        }
        this.listeners[eventName].forEach((listener) => {
            listener(...args);
        });
        return true;
    }

    subscribe(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return () => {
            this.listeners[eventName] =
                this.listeners[eventName].filter((listener) => listener !== fn);
        };
    }
}

// const emitter = new Emitter();

// const unsub = emitter.subscribe('MyEvent', (data) => console.log('Sub: ', data));

// emitter.emit('111222', 42);

// emitter.emit('MyEvent', 42);
// setTimeout(()=> {
//     emitter.emit('MyEvent', '2 seconds');
// }, 2000);

// setTimeout(()=> {
//     unsub();
// }, 3000);

// setTimeout(()=> {
//     emitter.emit('MyEvent', '4 seconds');
// }, 4000);
