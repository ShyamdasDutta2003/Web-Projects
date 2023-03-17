// forEach

let arr = [2,3,4];
arr.forEach(function(element, index, arr){
    console.log(index, element, arr);       //  output :  index: __ element: __ arr: __
});

arr.forEach((element, index, arr) => {
    console.log("Using Arrow Function : ", index, element, arr);
});

const boom = ['audhw', 'adghd', 'agdaw', 'afgdwy'];
boom.forEach((item) => {
    console.log(item.toUpperCase());
});



// map

arr.map(function(element, index, arr){
    console.log("Using map : ", index, element, arr);
});

boom.map((item) => {
    console.log(item.toUpperCase());
});


// filter

const boom2 = ["abafxy", "suegdhh", "sgfexy", "sefgwe", "eygfxy"];
const boom2WithXy = boom2.filter((element) => {
    return element.endsWith("xy");
});
console.log(boom2WithXy);


// reduce

const cartBill = [20, 30, 50];
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfCartBill);


// every

const gameScore = [200, 300, 310, 250, 150];

// check if all values are numbers
const gameScoreCheck = gameScore.every((value) => typeof value === 'number')        // here we have used 'number' instead of Number because when gameScore is called using typeof then it returns 'number' and not Number.
console.log("Check result : ", gameScoreCheck);


// find
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const above200Score = gameScore.find((score) => score > 200);
console.log(above200Score);