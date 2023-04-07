// Program - 1
// To add two numbers
addNumbers(4, 7);

function addNumbers(num1, num2){
    return num1 + num2;
}


// Program - 2
// To multiply numbers
// multiplyNumbers(3, 4);       // will throw error because of hoisting

const multiplyNumbers = function(num1, num2){
    return num1 * num2;
}

multiplyNumbers(3, 4);


// Program - 3
// To log the variable value
function sum(num1 , num2){
    console.log(value);
    var value = 13;
    return num1 + num2;
}

addNumbers(5,6);


// Program - 4
// To assign values to three variables
{
    // console.log(myVar);              // This will log "undefined" because of hoisting 
    // console.log(myLet);              // This will log "ReferenceError" because let is not hoisted
    // console.log(myConst);            // This will log "ReferenceError" because const is not hoisted

    var myVar = 100;
    let myLet = 200;
    const myConst = 300;

    console.log(myVar);
    console.log(myLet);
    console.log(myConst);
}


// Program - 5
// To declare a variable using let inside a block scope
{
    console.log(newLet);    // error

    let newLet = 13;

    console.log(newLet);
}