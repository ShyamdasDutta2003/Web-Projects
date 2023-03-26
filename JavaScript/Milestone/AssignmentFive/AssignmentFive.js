// Program - 1
// To convert strings into numbers
function convertToNumber(str) {
    try {
      const num = Number(str);
      if (Number.isNaN(num)) {
        throw new Error("Invalid number");
      }
      return num;
    } 
    catch {
      return "Invalid number";
    }
}


console.log("123");
console.log(convertToNumber("abc"));


// Program - 2
// To fetch details of a person
function getPerson(person){
    try{
        if(typeof person !== "object" || person === null || !("name" in person) || !("age" in person)){
            throw new Error("Invalid parameter type.")
        }

        const {name, age} = person;
        return `Name : ${name}, Age : ${age}`;    
    }
    catch (error){
        return error.message;
    }
}

const personDetails1 = getPerson();
console.log(personDetails1);

const personDetails2 = getPerson("Person Name");
console.log(personDetails2);

const personDetails3 = getPerson({name : "Person Name"});
console.log(personDetails3);

const personDetails4 = getPerson({name : "Person Name", age : 25})
console.log(personDetails4);


// Program - 3
// To get car details using a class
class Car{
    constructor(company, model, year){
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar = new Car("Skoda", "Rapid", 2022);
const description = myCar.getDescription();
console.log(description);


// Program - 4
// To fetch employee salary
class Employee{
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}

const employee1 = new Employee("Employee One", "Manager", 80000);
const salaryDetails = employee1.getSalary();
console.log(salaryDetails);


// Program - 5
// To fetch person details
class Person{
    constructor(name = "Unknown", age = 0){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name: ${this.name} Age: ${this.age}`;
    }
}

const person1 = new Person("Mithun", 20);
console.log(person1.getDetails());

const person2 = new Person();
console.log(person2.getDetails());


// Program - 6
// To calculate the sum
class Calulator{
    static add(num1, num2){
        return num1 + num2;
    }
}

const sum = Calulator.add(5,6);
console.log(sum);


// Program - 7
// To check the password
class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get getPassword(){
        return this.password.replace(/./g, "*");
    }

    set setPassword(newPassword){
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(regex.test(newPassword)){
            this.password = newPassword;
        }
        else{
            console.log("Error : Password must be at least 8 characters long and contain at least one number and one uppercase letter");
        }
    }
}

const user = new User("Mithun", "Password123");
user.getPassword;

user.setPassword = "myPassword";     // Error : Password must be at least 8 characters long and contain at least one number and one uppercase letter

user.setPassword = "MyPassword";     // Error : Password must be at least 8 characters long and contain at least one number and one uppercase letter

user.setPassword = "Mypassword123";      // output : *************
console.log(user.getPassword);


// Program - 8
// To print greeting message
function Student(name) {
    this.name = name;
}
  
Student.prototype.printDetails = function() {
    console.log(`Hello, the student is ${this.name}`);
};
  
const student = new Student("Mithun");
student.printDetails();
  

// Program - 9
// To check numbers
function numChecker(numbers){
    return function(num){
        return numbers.includes(num);
    }
}

const arr = [1, 2, 3, 4, 5];
const checkNum = numChecker(arr);

console.log(checkNum(3));
console.log(checkNum(6));


// Program - 10
// To filter by category
function filterByCategory(products){
    return function(category){
        return products.filter(product => product.category === category);
    }
}

var products = [
    {name: "Shirt", category: "Clothing"},
    {name: "Pants", category: "Clothing"},
    {name: "Hat", category: "Accessories"},
    {name: "Sunglasses", category: "Accessories"}
];

var clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts);