// Values and Datatypes : String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object 

// 1. String : "Hello There !!"

// 2. Number : 
// (i) Integers : 1, 2, 4, 7
// (ii) Floating Values : 2.5, 10.6
// (iii) Infinity : Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
// (iv) Not a Number : Nan

// 3. Bigint : 1024n

// 4. Boolean : true, false

// 5. Undefined : undefined

// 6. Null : null

// 7. Symbol : Symbol('ABC')

// 8. Objects :
// (i) Array : [1,2,'hello']
// (ii) Object : {name:'Name', course: 'Course'}

let recentlyViewedProducts = ['iPhone','Macbook Pro','Flower Pot','Water Bottle','Mac Studio Mini','Watch','Tennis Ball','Mouse Pad','Keyboard','Lens'];
console.log(recentlyViewedProducts)

let studentRegistry = [
    {1 : 'Mithun'},
    {2 : 'Alka'},
    {3 : 'Anurag'},
    {4 : 'Prabir'},
    {5 : 'Shivam'},
];
console.log(studentRegistry);

// String
let var1 = 'Hello There !!';
console.log(typeof var1);

// Number
// (i) Integer
let var2 = 10;
console.log(typeof var2);

// (ii) Floating Values
let var3 = 10.2;
console.log(typeof var3);

// (iii) Infinity
let var4 = Number.POSITIVE_INFINITY;
console.log(typeof var4);

// (iv) Not a Number 
let var5 = NaN;
console.log(typeof var5);

// Bigint 
let var6 = 1024n;
console.log(typeof var6);

// Boolean 
let var7 = true;
console.log(typeof var7);

// Undefined 
let var8 = undefined;
console.log(typeof var8);

// Null 
let var9 = null;
console.log(typeof var9);

// Symbol 
let var10 = Symbol("Hello")
console.log(typeof var10);

// Object 
// (i) Array 
let var11 = [1,2,'Hello There'];
console.log(typeof var11);

// (ii) Object 
let var12 = {name: 'Name1', course: 'Web Dev'};
console.log(typeof var12);

// Valid Variables
let newName = 'Name1';
console.log(newName);       // Output : Name1

let iAmHappy = true;
console.log(iAmHappy);      // Output : true

// Invalid Variables
// let 1name = 'Name1';
// console.log(1name);     // Output : SyntaxError: Invalid or unexpected token

// let var = 13;
// console.log(var);          // Output : SyntaxError: Unexpected token 'var'

// Operators
let number = 6;
console.log(`${number} * 1 = ${number * 1}`);          // The `${}` syntax is used to indicate that the value inside should be evaluated as an expression.

console.log(`${number} * 2 = ${number * 2}`);
console.log(`${number} * 3 = ${number * 3}`);
console.log(`${number} * 4 = ${number * 4}`);
console.log(`${number} * 5 = ${number * 5}`);
console.log(`${number} * 6 = ${number * 6}`);
console.log(`${number} * 7 = ${number * 7}`);
console.log(`${number} * 8 = ${number * 8}`);
console.log(`${number} * 9 = ${number * 9}`);
console.log(`${number} * 10 = ${number * 10}`);

// Arithmetic Operations
let num1 = 10;
let num2 = 8;

// Addition 
console.log(`The addition of num1 and num2 is ${num1 + num2}`);

// Subtraction
console.log(`The subtraction of num1 and num2 is ${num1 - num2}`);

// Multiplication
console.log(`The multiplication of num1 and num2 is ${num1 * num2}`);

// Division
console.log(`The division of num1 and num2 is ${num1 / num2}`);

// Modulus 
console.log(`The modulus of num1 and num2 is ${num1 % num2}`);

// Exponential 
console.log(`The exponential of num1 and num2 is ${num1 ** num2}`);

// Perimeter of Rectangle
let length = 10;
let width = 20;
let perimeterOfRectangle = 2 * (length + width);

console.log(`The perimeter of a rentangle with length : ${length} and width : ${width} is ${perimeterOfRectangle}`);

// Comparison Operators
// Equal
let num11 = 12;
let num12 = 12;
console.log(num11 == num12);        // true

let num22 = 12;
let num23 = 13;
console.log(num22 == num23);        // false

// Not Equal
let num33 = 12;
let num34 = 12;
console.log(num33 != num34);        // false

let num44 = 12;
let num45 = 13;
console.log(num44 != num45);        // true

// Strictly Equal
let num55 = 12;
let num56 = 12;
console.log(num55 === num56);       // true

let num66 = 12;
let num67 = '12';
console.log(num66 === num67);       // false

// Strictly Not Equal
let num77 = 12;
let num78 = 12;
console.log(num77 !== num78);       // false

let num88 = 12;
let num89 = '12';
console.log(num88 !== num89);       // true

// Greater Than
let num99 = 13;
let num90 = 12;
console.log(num99 > num90);         // true

let num111 = 12;
let num112 = 13;
console.log(num111 > num112);       // false

// Greater Than or Equal to 
let num122 = 13;
let num123 = 12;
console.log(num122 >= num123);      // true

let num222 = 10;
let num223 = 12;
console.log(num222 >= num223);      // false

// Lesser Than 
let num233 = 12;
let num234 = 13;
console.log(num233 < num234);       // true

let num333 = 12;
let num334 = 10;
console.log(num333 < num334);       // false

// Lesser Than or Equal to 
let num344 = 13;
let num345 = 13;
console.log(num344 <= num345);       // true

let num444 = 12;
let num445 = 10;
console.log(num444 <= num445);      // false

// Conditions 
let trafficLight = 'orange';

if(trafficLight == 'red'){
    console.log('Vehicles must stop.');
}
else if(trafficLight == 'orange'){
    console.log('Vehicles must wait. The signal is changing to red or green.');
}
else if(trafficLight == 'green'){
    console.log('Vehicles may proceed with caution.');
}
else{
    console.log('Invalid Traffic Light');
}

// Largest of Two Numbers 
let num555 = 20;
let num556 = 15;
if(num555 > num556){
    console.log('num555 is greater than num556');
}
else{
    console.log('num556 is greater than num555');
}

// Program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5

let num566 = 5;

if(num566 % 5 == 0 && num566 % 3 == 0){
    console.log('FizzBuzz');
}
else if(num566 % 5 == 0){
    console.log('Buzz');
}
else if(num566 % 3 == 0){
    console.log('Fizz');
}
else{
    console.log('Invalid Input');
}

// Switch Case 
// Program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend

const day = 'Tuesday';
let daysUntilWeekend;

switch(day){
    case 'Monday':
        console.log('There are 5 day(s) until the weekend');
        break;

    case 'Tuesday':
        console.log('There are 4 days(s) until the weekend');
        break;

    case 'Wednesday':
        console.log('There are 3 days(s) until the weekend');
        break;

    case 'Thursday':
        console.log('There are 2 day(s) until the weekend');
        break;

    case 'Friday':
        console.log('There are 1 day(s) until the weekend');
        break;

    case 'Saturday':
        console.log('It is weekend !!');
        break;

    case 'Sunday':
        console.log('There are 6 day(s) until the weekend');
        break;

    default:
        daysUntilWeekend = 'Invalid day';
        break
}

// Program that takes in a number between 1 and 12 and outputs the corresponding month of the year
const monthNumber = 1;
 switch(monthNumber){
    case 1:
        console.log('January');
        break;

    case 2:
        console.log('February');
        break;

    case 3:
        console.log('March');
        break;

    case 4:
        console.log('April');
        break;

    case 5:
        console.log('May');
        break;

    case 6:
        console.log('June');
        break;

    case 7:
        console.log('July');
        break;

    case 8:
        console.log('August');
        break;

    case 9:
        console.log('September');
        break;

    case 10:
        console.log('October');
        break;

    case 11:
        console.log('November');
        break;

    case 12:
        console.log('December');
        break;

    default:
        console.log('Invalid month number');
}

// Ternary Condition 
// Program that takes in a number and outputs whether it is positive, negative, or zero
let number1 = 0;

number1 == 0
? console.log('The number is zero')
: number1 > 0
? console.log('The number is greater than zero')
: console.log('The number is lesser than zero');

// Program that takes in two numbers and prints the larger one
let number2 = 10;
let number3 = 10;

number2 == number3
? console.log('The numbers are equal')
: number2 > number3
? console.log(`The larger number is ${number2}`)
: console.log(`The larger number is ${number3}`);

// Loops
// Program that generates the multiplication table in the textbook format for a given number
let number5 = 5;

for(let i = 1; i <= 10; i++){
    console.log(`${number5} * ${i} = ${number5 * i}`);
}

// Program that prints all the positive even numbers till the number specified
let number6 = 10;

for(let i = 1; i<= number6; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}