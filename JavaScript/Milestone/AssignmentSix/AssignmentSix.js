// Program - 1
// To double an array of integers using callback
function doubleArray(arr, callback){
    const doubledArray = arr.map(callback);
    return doubledArray;
}

const arr = [1, 2, 3, 4, 5];
const doubledArr = (num) => num * 2;
const result = doubleArray(arr, doubledArr);
console.log(result);


// Program - 2
// To manipulate strings
function manipulateString(str){
    const manipulatedStr = str.toUpperCase();
    function logString(){
        console.log(`The manipulated string is : ${manipulatedStr}`);
    }
    return logString;
}

const string = "hello world!";
const manipulatedString = manipulateString(string);
manipulatedString();


// Program - 3
// To evaluate age in days
function ageInDays(person){
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;

    function logMessage(){
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
    }
    return logMessage;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
}

const logResult = ageInDays(person);
logResult();


// Program - 4
// To arrange in alphabetical order
function bookTitlesInOrder(bookTitles){
    const sortedTitles = bookTitles.sort();
    console.log("Book titles in alphabetical order : ");
    sortedTitles.forEach(title => console.log(title));
}

function getBookTitles(books, callback){
    const bookTitles = books.map(book => book.title);
    callback(bookTitles);
}

const books = [
    {title: "Listen to Your Heart: The London Adventure", author: "	Ruskin Bond", year: 2022},
    {title: "Platform Scale: For A Post-Pandemic World", author: "	Sangeet Paul Choudary", year: 2021},
    {title: "Death – An Inside Story", author: "Jaggi Vasudev", year: 2020},
    {title: "Cheque book", author: "	Vasdev Mohi", year: 2019},
    {title: "Making of Legend", author: "	Bindeshwar Pathak", year: 2018},
]

getBookTitles(books, bookTitlesInOrder);


// Program - 5
// To send a greeting message 
function greetingMessage(name){
    return new Promise((resolve, reject) => {
        if(name){
            const greeting = `Hello, ${name}!`;
            resolve(greeting);
        }
        else{
            reject("Please provide a name!")
        }
    })
}

greetingMessage("Mithun")
.then(greeting => console.log(greeting))
.catch(error => console.log(error));


// Program - 6
// To fetch data asynchronously
function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

fetchData();


// Program - 7
// To fetch data asynchronously from two different API endpoints
async function fetchData(){
    const [todoResponse, postResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1"),
        fetch("https://jsonplaceholder.typicode.com/posts/1")
    ]);

    const [todo, post] = await Promise.all([
        todoResponse.json(),
        postResponse.json(),
    ]);

    const result = {
        todoTitle: todo.title,
        postTitle: post.title,
        postBody: post.body,
    };

    console.log(result);
}


// Program - 8
// To fetch data from an API
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(posts => console.log(posts))
.catch(error => console.log(error))


// Program - 9
// To handle the error on a webpage
fetch('https://jsonplaceholder.typicode.com/posts/123456789')
.then(response => {
    if(!response.ok){
        throw new Error("Download unsuccessful !!");
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => {
    console.error("Fetching unsuccessful : ", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "There was a problem fetching data";
    document.body.appendChild(errorMessage);
});