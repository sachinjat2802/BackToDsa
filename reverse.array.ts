
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseArray(array:number[]):number[]{
    return array.reverse();
}


function reverseArrayWithoutFunctionForLoop(array: number[]): number[]{ 
    let newArray :number[]= [];
    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}
function reverseArrayWithoutFunctionWhileLoop(array: number[]): number[] { 
    let newArray :number[]= [];
    let i = array.length - 1;
    while(i >= 0){
        newArray.push(array[i]);
        i--;
    }
    return newArray;
}

function reverseAraayWithRecursion(array: number[]): number[]{ 
   if(array.length<=0){
       return [];
   }else{
       return [array[array.length-1]].concat(reverseAraayWithRecursion(array.slice(0,array.length-1)));
   }
}

function reverseArrayWithMap(array: number[]): number[]{ 
    return array.map((value,index,array)=>{
        return array[array.length - 1 - index];
    })
}

function reverseArrayWithForEach(array: number[]): number[]{ 
    let newArray :number[]= [];
    array.forEach((value,index,array)=>{
        newArray.push(array[array.length - 1 - index]);
    })
    return newArray;
}

function reverseArrayWithForIn(array: number[]): number[]{ 
    let newArray :number[]= [];
    for(let index in array){
        newArray.push(array[array.length - 1 - Number(index)]);
    }
    return newArray;
}

// function reverseArrayWithReduce(array) { 
//     return array.reduce((acc,curr,index,array)=>{
//         return [...acc,array[array.length - 1 - index]];
//     },[])
// }


console.log("without function with for loop" + reverseArrayWithoutFunctionForLoop(arr));
console.log("without function with while loop::" + reverseArrayWithoutFunctionWhileLoop(arr));
console.log("with recursion::" + reverseAraayWithRecursion(arr));
console.log("with map::" + reverseArrayWithMap(arr));
// console.log("with reduce::" + reverseArrayWithReduce(arr));
console.log("with function::" + reverseArray(arr));
console.log("with forEach::" + reverseArrayWithForEach(arr));
console.log("with for in::" + reverseArrayWithForIn(arr));


