function reverse(array){
    const copy = [...array];
    for(let i = 0; i < array.length; i++){
        console.log(copy.pop());
    }
}

function reverse1(array){
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

//reverse([1,2,3,4,5]);
reverse1([1,2,3,4,5]);