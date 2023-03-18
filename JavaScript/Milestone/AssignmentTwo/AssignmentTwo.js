// Program - 1
// To reverse a string
let str = "This is a string";
setTimeout(() => {
    let revStr = str.split("").reverse().join("");      // split() breaks the string and converts it to an array, then reverse() method reverses it and then againg join() method converts it back to a string.
    console.log(revStr);
}, 2000);


// Program - 2
// To generate random number with a delay
let timeDelay = 3;
const interval = setInterval(() => {
    console.log(`Generating random number in ${timeDelay} seconds ...`);
    timeDelay--;
    if(timeDelay === 0){
        clearInterval(interval);
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        console.log(`Random number generated : ${randomNumber}`);
    }
}, 1000);


// Program - 3
// To convert currency
const itemsInDollar = {
    "item1": 15,
    "item2": 25,
    "item3": 20,
    "item4": 38,
    "item5": 45,
};

const exchangeRate = 80;

const itemsInRupee = Object.entries(itemsInDollar).map(([key, value]) => {
    return {[key]: value * exchangeRate};
});

console.log(itemsInRupee);


// Program - 4
// To filter and capitalize
const books = [
    {title: "This is book1 title", author: "Author One", year: 2005},
    {title: "This is book2 title", author: "Author Two", year: 2008},
    {title: "This is book3 title", author: "Author Three", year: 2007},
    {title: "This is book4 title", author: "Author Four", year: 2010},
    {title: "This is book5 title", author: "Author Five", year: 2012},
    {title: "This is book6 title", author: "Author Six", year: 2015},
];

const booksAfter2010 = books.filter(book => book.year <= 2010);

const capitalizedBook = booksAfter2010.map((book) => {
    return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year,
    }
});

console.log(capitalizedBook);


// Program - 5
// To validate URL using regex
const urlPattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

const url = "https://thisisanurlexample.com"

if(urlPattern.test(url)){
    console.log("This is a valid URL :))");
}
else{
    console.log("This is not a valid URL !!");
}


// Program - 6
// To validate LinkedIn URL
const linkedInUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const validateLinkedInURL = ((url) => {
    if (linkedInUrlPattern.test(url)) {
        console.log("This is a Valid LinkedIn URL");
    } 
    else {
        console.log("This is an Invalid LinkedIn URL");
    }
});

validateLinkedInURL("https://www.linkedin.com/in/shyamdas-dutta");
validateLinkedInURL("https://www.linkedin.com/in/boom-boom-123abc/");
validateLinkedInURL("https://www.linkedin.com/in/boom");