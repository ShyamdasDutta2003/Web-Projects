// Program - 1
// To count the occurrences
const wordsCounter = (text) => {
    text = text.toLowerCase();
    const words = text.split("");
    const wordsCount = new Map();

    for(const word of words){
        if(!wordsCount.has(word)){
            wordsCount.set(word, 1);
        }
        else{
            wordsCount.set(word, wordsCount.get(word) + 1);
        }
    }
    return wordsCount;
}

const text = "This is just an example of a short string";
const wordCounts = wordsCounter(text);
console.log(wordCounts);


// Program - 2
// To filter unique elements
const removeDuplicates = (numbers) => {
    const uniqueNumbers = new Set(numbers);
    return [...uniqueNumbers];
}

const numbers = [1,2,4,2,5,3,7,5,8,4,8,2,7];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);


// Program - 3
// To swap values
function swapValues(x, y){
    [x, y] = [y, x];
    return [x, y];
}

let x = 5, y = 10;
[x, y] = swapValues(x, y);
console.log(`After swap : x = ${x}, y = ${y}`);


// Program - 4
// To access random elements
function accessElements(arr){
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
}

const arr = [1,2,3,4,5,6,7,8,9];
const extracedElements = accessElements(arr);
console.log(extracedElements);


// Program - 5
// To find max and min values
const findMinMax = (arr1) => {
    const max = Math.max(...arr1);
    const min = Math.min(...arr1);
    return [`max : ${max}, min : ${min}`];
}

const arr1 = [5,7,2,7,9,4,1,6];
const result = findMinMax(arr1);
console.log(result);


// Program - 6
// To extract details
function extractDetails(person){
    const {names, address: {street}} = person;
    return {names, street};
}

const person = {
    names: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
};

const {names, street} = extractDetails(person);
console.log(`name : ${names}, address : ${street}`);