// Regex - Regular Expression

let pattern = 'boom';

let regExOne = new RegExp(pattern);

let flag = "gi";        // g - global, i - case-insensitive (without 'i' 'boom' and 'Boom' will be considered different)

let regExTwo = new RegExp(pattern, flag);

let regExThree = /boom/gi;          // shorthand for defining regex

const strToCheck = "As the fireworks exploded in the night sky, the BOOM of each explosion echoed through the streets, creating a symphony of sound. Suddenly, a loud bOOm rocked the building as a gas line exploded, causing chaos and destruction. Despite the chaos, the economy experienced a Boom, with businesses flourishing and job opportunities increasing.";

const result = regExThree.test(strToCheck);
console.log(result);

// or
const resultTwo = strToCheck.match(regExThree);
console.log(resultTwo);

// or
const resultThree = strToCheck.replace(regExThree, 'b-o-o-m');
console.log(resultThree);


// eg
const webUrl = "https://abcdlink.com/firstname%20lastname";

const UseableUrl = webUrl.replace(/%20/, '-');      // another way of defining regex        // we might face a problem when we are getting '%30' instead of '%20', so we have to look for the pattern.

const useableUrl = webUrl.replace(/%\d\d/, '-')         // \d represents a number
console.log(useableUrl);