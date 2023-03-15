// Program - 1 
// To validate password
const enteredPassword = "5576aheyg";
const confirmPassword = "5576aheyg";

if(enteredPassword == confirmPassword){
    console.log("Password Matched. Password validation Successful.");
}
else{
    console.log("Password didn't match. Password validation Unsuccessful.");
}

// Program - 2
// To build a calculator
let num1 = 8, num2 = 6;
let operator = "+";
let result;
switch(operator){
    case "+":
        result = num1 + num2;
        break;
    
    case "-":
        result = num1 - num2;
        break;
    
    case "*":
        result = num1 * num2;
        break;

    case "/":
        result = num1 / num2;
        break;
    
    default:
        console.log("Invalid Operator");  
}

console.log("The result is : " + `${result}`);

// Program - 3
// To mix colors
let color1 = "red", color2 = "blue";
let mixedColor;
switch(color1){
    case "red":
        switch(color2){
            case "blue":
                mixedColor = "purple";
                break;

            case "yellow":
                mixedColor = "orange";
                break;

            default:
                console.log("Invalid color combination");
        }
    break;

    case "blue":
        switch(color2){
            case "red":
                mixedColor = "purple";
                break;

            case "yellow":
                mixedColor = "green";
                break;

            default:
                console.log("Invalid color combination");
        }
    break;

    case "yellow":
        switch(color2){
            case "red":
                mixedColor = "orange";
                break;

            case "blue":
                mixedColor = "green";
                break;
            
            default:
                console.log("Invalid color combination");
        }
    break;

    default:
        console.log("Invalid color combination");
}

console.log(mixedColor);

// Program - 4
// To evaluate highest mark
let marks = [85,79,88,73,91];
let highestMarks = marks[0];

for(let i = 1; i < marks.length; i++){
    highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
}

console.log(`The highest mark is ${highestMarks}`);

// Program - 5
// To capitalize
function capitalizedFirstLetter(name){
    return (name.charAt(0) == name.charAt(0).toLowerCase() ? name.charAt(0).toUpperCase() + name.slice(1) : name);
}

let userName = "thisIsName";
let capitalizedName = capitalizedFirstLetter(userName);
console.log(`UserName : ${capitalizedName}`);

// Program - 6
// To count vowels
function vowelsCounter(name){
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for(let i = 0; i < name.length; i++){
        if(vowels.indexOf(name[i]) !== -1){
            vowelCount++;
        }
    }
    return vowelCount;
}

let enteredName =  "thisIsMyName";
let displayName = vowelsCounter(enteredName);
console.log(`Number of Vowels : ${displayName}`);

// Program - 7
// To remove duplicates
function removeDuplicate(cart){
    const uniqueCart = [];
    cart.forEach(item => {
        if(!uniqueCart.includes(item)){
            uniqueCart.push(item);
        }
    });
    return uniqueCart;
}

const customerCart = ['mobile','laptop','keyboard','mobile','monitor','keyboard','laptop','mobile'];

const newCart = removeDuplicate(customerCart);
console.log(newCart);

// Program - 8
// To create inverted right-angled triangle with asterisks
function printInvertedRightAngledTriangle(i){
    let output = "";
    for(let row = i; row >= 1; row--){
        for(let column = 1; column <= row; column++){
            output += "*";
        }
        output += "\n";
    }
    console.log(output);
}

printInvertedRightAngledTriangle(6);

// Program - 9
// To check divisibility
function divisibilityBy3Notby2(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 !== 0 || arr[i] % 2 == 0){
            continue;
        }
        console.log(arr[i]);
    }
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
divisibilityBy3Notby2(numbers);

// Program - 10
// To correct a bug
function doubleCartQuantity(cart){
    for(let i = 0; i < cart.length; i++){
        cart[i] *= 2;
    }
    return cart;
}

const cart = [1,2,3,4,5,6,7,8];
const correctedCart = doubleCartQuantity(cart);
console.log(correctedCart);

// Program - 11
// To create unit converter
function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const celsius = 38;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit);

// Program - 12
// To calculate rental cost
function calculateRentalCost(days, carType){
    let rentalCost;
    switch(carType){
        case "economy":
            rentalCost = 4000;
            break;

        case "midsize":
            rentalCost = 10000;
            break;

        case "luxury":
            rentalCost = 20000;
            break;
        
        default:
            console.log("Choose a valid car type !!");
    }
    const totalCost = rentalCost * days;
    return totalCost;
}

const days = 3;
const carType = "midsize";
const totalCost = calculateRentalCost(days, carType);
console.log(totalCost);

// Program - 13
// To create a bill splitter
function calculateTotalBill(dishCost, numOfPeople){
    const totalDishCost = dishCost.reduce((acc,val) => acc + val);
    const perPersonCost = totalDishCost / numOfPeople;
    
    const result = {
        totalBill : totalDishCost,
        perPersonBill : perPersonCost
    }
    return result;
}

const dishCost = [200,350,599,730,460];
const numOfPeople = 5;
const finalBill = calculateTotalBill(dishCost, numOfPeople);
console.log(finalBill);

// Program - 14
// To calculate the final order price
const calculateCartCost = (userCart) => {
    return userCart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0)
}

const userCart = [
    {unitPrice: 10, quantity: 2},
    {unitPrice: 5, quantity: 4},
    {unitPrice: 2.5, quantity: 1}
];
const totalCartCost = calculateCartCost(userCart);
console.log(totalCartCost);

// Program - 15
// To calculate the percentage of the discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;

    return Math.round(discountPercentage);
}

const originalPrice = 500;
const discountedPrice = 350;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`You will save ${discountPercentage}% !!`);

// Program - 16
// To generate a random number
const randomNumber = (() => {
    return Math.floor(Math.random() * 100) + 1;     // To shift the range from 0-99 to 1-100.
})();

console.log(randomNumber);

// Program - 17
// To build a banking application
const customer = {
    name: "ThisIs Name",
    balance: 10000,
};

function deposit(amount){
    this.balance += amount;
    console.log(`Deposit of ₹${amount} successful. New balance is ₹${this.balance}.`);
}

function withdraw(amount){
    if(amount > this.balance){
        console.log(`Insufficient funds. Current balance is ₹${this.balance}.`);
    }
    else{
        this.balance -= amount;
        console.log(`Withdrawl of ₹${amount} successful. New balance is ₹${this.balance}`);
    }
}

deposit.call(customer, 5000);
withdraw.call(customer, 2000);
withdraw.call(customer, 20000);

// Program - 18
// To change text on button click   (separate html document included)

// Program - 19
// To validate password             (separate html document included)

// Program - 20
// To add list items dynamically to an ordered list             (separate html document included)

// Program - 21
// To create a TO-DO App            (separate html document included)

// Program - 22
// To create a progress bar         (separate html document included)

// Program - 23
// To change the color on click     (separate html document included)

// Program - 24
// To highlight text                (separate html document included)

// Program - 25
// To move the image                (separate html document included)