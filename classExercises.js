// Escribe una función que acepte como parámetro un arreglo de enteros y regrese la suma de todos los números en el.

// Ejemplo:
// const a = sum([1,2,3,4,5]);
// // a = 15


let numeros = [1,2,3,4,5,6];

function suma(arr){
    //se crea variable para almacenar los numeros que se van sumando
    var sum = 0;
    for (let i = 0; i < numeros.length; i++){
        sum += arr[i];
    }
    return sum

}
console.log("la suma es: ",suma(numeros));

//////////////////////////////////////////////////////////

// Escribe una función que acepte como parámetro un arreglo de enteros e imprima los elementos en el orden al revés.

// Ejemplo:
// const a = reverse([1,2,3,4,5]);
// // print -> 5, 4, 3, 2, 1



// let newArr = [];
// function reverse(arre){
//    for(let i = 0; i < numeros.length; i++){
   
//     newArr = numeros.pop(numeros[i])
//    }
//    console.log(newArr);
// }
// reverse(numeros);

function reverser(numeros){
    const copy = [...numeros];
    for(let i = 0; i < numeros.length; i++){
        console.log(copy.pop());
    }
}
reverser(numeros);

///// ===============2da solucion====================
function reverse1(numeros){
    for (let i = numeros.length -1;i >= 0; i--){
        console.log(numeros[i]);
    }
}
reverse1(numeros);

// Escribe una función que acepte como parámetro un arreglo de enteros y regrese el número mayor del arreglo.

// Ejemplo:
// const a = max([1,10,6,3,5]);
// // a = 10

let num2 = [1,10,6,3,5]

function maxNum(num2){
    let n = num2[0];
    for(let i= 0;i <= num2.length; i++){
        if( n < num2[i]){
            n = num2[i];
        }
    }
    return n;
}
 console.log(maxNum(num2));

//  Escribe una función que acepte como parámetro un arreglo de enteros y regrese el número menor del arreglo.

// Ejemplo:
// const a = reverse([1,10,6,3,5]);
// // a = 1

function minNum(num2){
    let min = num2[0];
    for(let i= 0; i <= num2.length; i++){
        if(min > num2[i]){
            min = num2[i];
        }
    }
    return min;
}
 console.log(minNum(num2));

//  Escribe una función que acepte como parámetro un arreglo de cadenas de texto y regrese todos los textos concatenados.

// Ejemplo:
// const a = concat([“Hola”, “ ”, “Mundo”, “!”]);
// // a = “Hola Mundo!”

let textos = ["hola"," ", "mundo", "!"]


function concatenar(textos){
    let textoFinal = "";
    for (let i = 0; i < textos.length; i++){
        textoFinal += textos[i]
    }
    return(textoFinal);
}

concatenar(textos);


// Escribe una función que acepte como parámetro un arreglo de enteros y regrese el promedio de los números.

// Ejemplo:
// const a = sum([10,20]);
// // a = 15


let grades = [8, 7, 10]

function getAverage(grades){
    let total = suma(grades);
    return total/grades.length;
}

console.log(getAverage(grades));

//======================================

// Escribe una función que acepte como parámetro dos arreglos de enteros y regrese la unión.

// Ejemplo:
// const a = sum([1,2,3,4,5], [10,9,8,7,6]);
// // a = [1,2,3,4,5,10,9,8,7,6]
let arregloA = [1, 2, 3];
let arregloB = [4, 5, 6];

function unir (lista1, lista2){
    let arregloC =[...lista1, ...lista2]
    return arregloC;
}

console.log(unir(arregloA, arregloB));

// Escribe una función que acepte como parámetro dos arreglos de enteros y regrese los elementos que tienen en común.

// Ejemplo:
// const a = sum([1,2,3,4,5], [4,5,6]);
// // a = [4,5]
let arregloC= [1, 2, 3, 4, 5];
let arregloD= [4, 5, 6];

function getCommons(arr1, arr2){

    let iguales = [];

    for( let i = 0; i < arr1.length; i++){
       
        for(let j = 0; j < arr2.length; j++){
            if( arr1[i] === arr2[j]){
                iguales.push(arr1[i]);
            }
        }
    }
    return iguales;
    }

console.log(getCommons(arregloC, arregloD));

//
// Escribe una función que acepte como parámetro un arreglo de enteros y regrese otro arreglo reemplazando todos los 0 por -1.

// Ejemplo:
// const a = replace([1,2,0,3,4]);
// // a = [1,2,-1,3,4]

let enteros = [1,2,0,3,4];

function replace (arr3) {
    let copia =[...arr3]
    for(let i = 0; i < copia.length; i++){
        if(copia[i] === 0){
            copia[i]--
        }
    }
    return copia;
}

console.log(replace(enteros));

// Escribe una función que acepte como parámetro un arreglo de enteros y regrese el primer entero repetido, 
//sino existe -1.

// Ejemplo:
// const a = firstDuplicated([1,2,2,3,4]);
// // a = 2
function doubles(n){
    let res = [];
    for(let i = 0; i < n.length; i++){
      let isRepeated = false;

      for(let k = 0; k < res.length; k++){
        if(n[i] === res[k]){
          isRepeated = true;
        }
      }

      if (isRepeated) {
        continue;
      } 

      for(let j= i + 1 ; j < n.length; j++){
          if(n[i] === n[j] ){
              res.push(n[i]);
              break;
          }
      }
    }
    return res;
}
doubles(numerals);

