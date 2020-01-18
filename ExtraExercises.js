// 1.- Escribe una función que reciba como parámetro un arreglo de números y 
// regrese un nuevo arreglo con cada uno de los elementos multiplicados por dos. 

// Ejemplo: 
//     const array =  [1,2,3,4,5]; 
//     const a = mult2(array); 
//     // a = [2,4,6,8,10] 
const arreglo = [1,2,3,4,5];

function arregloXn(arreglo,n){
    let multip = [];
    for(i=0; i<arreglo.length; i++){
        var total= 0;
        total = arreglo[i] * n;
        multip.push(total);
    }
    return multip;
}
console.log(arregloXn(arreglo, 2));

// 2.- Escribe una función que reciba como parámetro un arreglo de números sume todos
// y regrese si la suma de los elementos es un número par.

// Ejemplo:
//     const array = [1,2,3,4,5];
//     const array1 = [1,2,3,4];
//     const a = sumaPar(array); // sum = 15 <- No es par
//     const b = sumaPar(array1); // sum = 10 <- Es par
//     // a = false, b = true

const array = [1,2,3,4,5];


function sumIsEven(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
       sum += array[i]
    }
    if(sum % 2 === 0){
        return true
    }else{
        return false
    }
}
console.log(sumIsEven(array));

// 3.- Escribe un función que reciba como parámetro un arreglo de números y un número A. 
// Debe regresar las veces que se encuentra el número A en el arreglo.

// Ejemplo:
//     const array = [1,2,3,4,5,5,5];
//     const a = count(array, 5);
//     const b = count(array, 3);
//     // a = 3, b = 1

const numbers = [1,2,3,4,5,5,5];

function howManyTimes(numbers,n){
    let count = 0;
    for( i=0; i<=numbers.length;i++){
        if(n===numbers[i]){
             count++
        }

    }return count;
}
console.log(howManyTimes(numbers,5));

// 4.- Escribe una función que reciba como parámetro un arreglo de números y un número A.
// Debe regresar el primer indice del arreglo donde se encuentre el número A. Sino se encuetra el
// número A en el arreglo debe regresar -1;

// Ejemplo:
//     const array = [1,2,3,3,4,5];
//     const a = findIndex(array, 3);
//     const b = findIndex(array, 5);
//     // a = 2, b = 5
const numeros = [1,2,3,3,4,5];

function findIndex(numeros,n){
    for( i=0; i<=numeros.length;i++){
        if(n===numeros[i]){
            return i
        }
    }
}
console.log(findIndex(numeros,5));

// 5.- Escribe una función que reciba como parámetro un arreglo de número y un número A.
// La función debe regresar un nuevo arreglo con todos los elementos del arreglo original
// pero eliminando todos los elementos que sean igual al número A.

// Ejemplo:
//     const array = [1,2,1,3,4,5,6,1];
//     const a = filter(array, 1);
//     const b = filter(array, 2);
//     // a = [2,3,4,5,6], b = [1,1,3,4,5,6,1]

const nums = [1,2,1,3,4,5,6,1];

function deleteNum(nums, num){
    let resultado =[];
    for( i=0; i<nums.length;i++){
        if(nums[i]!= num){
          resultado.push(nums[i]);
        }
      
    }
    return resultado;
}
console.log(deleteNum(nums,1));

// 6.- Escribe una función que reciba como parámetro un arreglo de números y un número A.
// La función debe regresar un 'boolean' true si el número A está en el arreglo y false si no está
// en el arreglo.

// Ejemplo:
//     const array = [1,2,3,4,5];
//     const a = isThere(array, 1);
//     const b = isThere(array, 6);
//     // a = true, b = false

const num1=[1,2,3,4,5];

function isOnArray(array,num){
    for( i=0; i<array.length;i++){
        if(array[i]=== num){
            return true
        }else{
            return false
        }
    }
}
console.log(isOnArray(num1,1));

// 7.- Escribe una función que reciba como parámetro un arreglo de números.
// La función debe regresar 'true' si todos los números del arreglo son iguales y false
// si uno solo es diferente.

// Ejemplo:
//     const array = [1,1,1,1,1];
//     const array1 = [1,1,1,1,3];
//     const a = isSame(array);
//     const b = isSame(array1);
//     // a = true, b = false

const array2 = [1,1,1,1,1];

function areEquals(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i]!=array[j]){
                return false;
            }
        }
    }
    return true;
}
console.log(areEquals(array2));
console.log(areEquals([1,1,1,1,3]));



// 8.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
// nuevo arreglo con unicamente los números pares.

// Ejemplo:
//     const array = [2,3,4,5,6];
//     const array1 = [10,22,33,10];
//     const a = even(array);
//     const b = even(array1);
//     // a = [2,4,6], b = [10,22,10]

const array3 = [2,3,4,5,6];

function areEven(array){
    let evens = [];
    for(let i =0; i<array.length;i++){
        if(array[i]%2 === 0){
            evens.push(array[i]);
        }
    }return evens;
}
console.log(areEven(array3));
console.log(areEven([10,22,33,10]));

// 9.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
// nuevo arreglo con unicamente los números impares.

// Ejemplo:
//     const array = [2,3,4,5,6];
//     const array1 = [10,22,33,10];
//     const a = odd(array);
//     const b = odd(array1);
//     // a = [3,5], b = [33]

const array3 = [2,3,4,5,6];

function areEven(array){
    let odds = [];
    for(let i =0; i<array.length;i++){
        if(array[i]%2 !== 0){
            odds.push(array[i]);
        }
    }return odds;
}
console.log(areEven(array3));
console.log(areEven([10,22,33,10]));

// 10.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
// nuevo arreglo con todos los elementos del arreglo original excepto el primero y el ultimo.

// Ejemplo:
//     const array = [2,3,4,5,6];
//     const array1 = [10,22,33,10];
//     const a = cut(array);
//     const b = cut(array1);
//     // a = [3,4,5], b = [22,33]

const array4 = [2,3,4,5,6];

function cutArray(array){
    let newArray=[];
    for(let i = 1; i < array.length-1; i++){
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(cutArray(array4));
console.log(cutArray([10,22,33,10]));