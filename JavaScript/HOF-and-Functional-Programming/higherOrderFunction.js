// Higher Order Function - Functions that that can return another function or can take another function as argument.

const powerTwo = (n) => {
    return n ** 2;
}

function powerCube(n){
    return powerTwo(n) * n;
}

console.log(powerCube(3));



function sayHello(){
    return () => {
        console.log("Hello Bro");
    }
}
let greetMsg = sayHello();

console.log(greetMsg);
greetMsg();     // This will act as a function



const higherOrder = n => {
    const oneFunc = m => {
        const twoFunc = p => {
            return m + n + p;           // At this level, we have access to all variables (m, n, p)
        }
        return twoFunc;
    }
    return oneFunc;
}

// To run higher order function
console.log(higherOrder(2)(3)(4));


const myNums = [1,2,3,4,5];
const sumArray = arr => {
    total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}

console.log(sumArray(myNums));


function hello(){
    // console.log("Hello There !!");
    console.log("Hello There !!", Math.random());       // It will print random values simultaneously
}

setInterval(hello, 1000);       // This will call hello() after every 1 second.

// setTimeout(hello, 2000);        // This function will call the hello() after 2 seconds but only one time.