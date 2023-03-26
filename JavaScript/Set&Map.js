// Set  -   stores unique values

let emptySet = new Set();

console.log(emptySet.size);

let myArray = [1,2,3,4];
let newSet = new Set(myArray);
// or
// let newSet = new Set([...myArray]);

newSet.add(9);
console.log(newSet.has(9));
console.log(newSet);

// Set Difference
function setDifference(setA, setB){
    return new Set([...setA.filter(element => !setB.has(element))])
}


// Map
let map = new Map();
console.log(map.size);

let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Shivam"],
    [5, "Vinay"],
]

arr.map((element) => map.set(element[0], element[1]));          // here key --> element[0]  & value --> element[1]