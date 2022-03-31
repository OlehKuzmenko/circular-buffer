//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
    constructor() {
        this.element = [];
        this.size = 7;
        this.length = 0
    }

    isEmpty() {
        return (this.length === 0);
    }

    isFull() {
        return (this.length === this.size);
    }

    write(argument) {
        if (this.isFull()) throw (new Error("Buffer is full"));
        this.element.push(argument);
        this.length++
    }

    read() {
        if (this.isEmpty()) throw (new Error("Buffer is empty"));
        return this.element[this.length -1];
    }

    forceWrite(argument) {
        if (this.size > this.length) {
            this.element.push(argument);
            this.length++;
        } else {
            this.element.splice(0, 1, argument);
        }
    }

    clear() {
        if (this.isEmpty()) throw (new Error("Buffer is empty"));
        this.element.shift();
        this.length--;
    }
}

export default CircularBuffer;

