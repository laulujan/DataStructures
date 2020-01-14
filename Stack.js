class Stack {

    constructor(size){
        this.items = new Array(size);
        this.index = 0;
    }

    push(element){
        this.items[this.index] = element;
        this.index ++;
    }

    peek() {
        return this.items[this.index - 1];
    }

    pop(){
        const result = this.peek();
        this.index--;
        return result;
    }

    isEmpty(){
        return this.index === 0;
    }

    isFull(){
        return this.index === this.items.length
    }

}

//Example
const myStack = new Stack(3);
console.log('isEmpty:', myStack.isEmpty());
console.log('isFull', myStack.isFull());
myStack.push(10);
console.log('isEmpty:', myStack.isEmpty());
myStack.push(20);
myStack.push(30);
console.log('isFull', myStack.isFull());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push(40);
console.log(myStack.peek());
console.log(myStack);