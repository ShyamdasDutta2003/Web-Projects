// combining two arrays
const oneArray = [1,2,3,4];
const twoArray = [5,6,7,8]; 
// const threeArray = oneArray.concat(twoArray);

// or
const threeArray = [...oneArray,...twoArray];       // spread operator

console.log(threeArray);

// creating new arrays
let newArrayOne = [1,2,3,4];
// or
let newArrayTwo = new Array(5,6,7,8);

// To print all the elements that are passed as argument
function manyArguments(){
    let args = Array.from(arguments)            // map is used for looping
    let finalArgs = args.map(element => element)
    console.log(finalArgs);
}
manyArguments(1,2,3,4,5);

// or by using rest
function manyArguments2(...args){               // '...' is both spread and rest depending on its usage
    let finalArgs2 = args.map(element => element)
    console.log(finalArgs2);
}
manyArguments2(6,7,8,9,10)