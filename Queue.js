class Queue {

    constructor(size){
        this.items = [];
        this.head = 0;
        this.size = size;
    }

    enqueue(element){
        this.items = [element, ...this.items]; 
        this.head++;
    }

    dequeue(){
        const result = this.items[this.head - 1];
        this.items = this.items.slice(0, this.head - 1);
        this.head--;
        return result;
    }

    isEmpty() {
        return this.head === 0;
    }

    isFull(){
        return this.head === this.size;
    }
}

const myQueue = new Queue(3);
console.log(myQueue.isEmpty());
console.log(myQueue.isFull());
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log(myQueue.isEmpty());
console.log(myQueue.isFull());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.isFull());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
myQueue.enqueue(40);
console.log(myQueue);