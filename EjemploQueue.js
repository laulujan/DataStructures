let items = [];

function init(size){
    items = [];
}

function enqueue(item){
    items = [item, ...items];
}

function dequeue(){
    const value = items[items.length -1];
    items = items.slice(0, items.length - 1);
    return value;
}

init(3);
enqueue(2);
enqueue(3);
enqueue(4);
console.log(items);
console.log(dequeue());
console.log(items);