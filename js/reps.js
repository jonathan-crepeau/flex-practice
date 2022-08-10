// ANCHOR - Variables & Datatypes

// SECTION - Q + A:

// 1. How do we assign a value to a variable?
// Using the assignment operator (=).
// (variable) = (value we want to assign)

const luna = 'Luna';


// 2. How do we change the value of a variable?
// If the variable was declared using the 'let' or 'var' keyword, we can use the assignment operator again. You do not have to use the declaration keywrod again ==> let number = 7 ... number = 10;
// "const" is the only declaration keyword that will not let you change the value of a variable using an assignment operator. At most, you can change the value of an array, list or object that is assigned to a given variable.

// NOTE - JSON parses (this might've changed if they've updated JSON parse syntax) object key names by having them in double quotation marks.
// For JavaScriopt, double quotation marks can be used if your key name will have white space or other syntax that otherwise would be rejected if no quotation marks were used.
// Keep in mind, you cannot access these quotation mark enclosed properties using dot notation. You can only do so using bracket notation: jonathan["weight(lbs)"];

const jonathan = {
    age: 34,
    name: 'Jonathan',
    'weight(lbs)': 199,
}

const array = [1, 3, 5];


// 3. How do we assign an existing variable to a new variable:
// First, create the first variable and assign its starting value. Second, declare the new variable and assign its value as the first variable.

let firstVar = 12;
let secondVar = firstVar;


// 4. Remind me, what are 'declare', 'assign', and 'define'?
// You declare a new variable using one of the following keywords - const, let or var.
// You assign a specific value/set of values to a variable using the assignment operator (=). Syntax should be keyword (variable) = (values/set of values).
// A variable is defined when it has been declared in the current scope using a declarative statement.


// 5. What is psuedocoding and why should you do?
// Psuedocode is a detailed yet "readable" description of what a given aspect of a computer program does. It is not written in an actual coding language. This is a crucial part of the planning process. A lot of programmers will say -- 75% of your time should be planning (psuedocoding) and 25% coding.


// 6. 75% planning, 25% coding.



// SECTION - Strings

// 1. Create a variable called firstVariable.
let firstVariable;

// 1A. Assign it the value of the string "Hello World".
firstVariable = 'Hello World';

// 1B. Change the value of this variable to some number.
firstVariable = 10;

// 1C. Store the value of firstVariable in a new variable called secondVariable.
let secondVariable = firstVariable;

// 1D. Change the value of secondVariable to any string.
secondVariable = 'My name is Jonathan';

// 1E. What is the value of firstVariable?
// 10.


// 2. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is" and the variable yourName so that it returns a new string with them concatenated.

const yourName = 'Jonathan';

const introSelf = 'Hello, my name is ' + yourName;

// NOTE - An expression is a block of code that evaluates to a value. A statement is any block of code that is performing some action.
// https://www.educative.io/answers/what-are-expressions-in-javascript

// All expressions are statements, but not all statements are expressions.
// Conceptually speaking, there are two kinds of expressions: those that perform some sort of assignmetn and those that evaluate to a value.
// For example, let x = 10 is an expression that performs an assignement. The expression itself evaluates to 10.
// The expressio 10 + 9 simply evaluates to 19. This kind of expression makes use of simple operators.

// There are five primary categories of expression in JavaScript:
// 1. Arithmetic - used arithmetic operators (+ - * / %)
// 2. String - using string operators and evaluates to a character string.
// 3. Logical - evaluates to a boolean value of either True or False using boolean operators.
// 4. Primary expressions - consists of basic keywords and expressions.
// 5. Left-hand side expression.



// SECTION - Booleans

// 1. Rewrite all the console logs so that all statements print 'true' in the console:

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');

// console.log(true || false);
// console.log(false || false || false || false || false || true);

// console.log(false === false);
// console.log(e === 'Kevin');
// console.log(a + b == c);
// console.log(a * a == d);
// console.log(48 == '48'); // NOTE - not === (strict equality operator)



// SECTION - The Farm:

// 1. Declare a variable animal. Set it to be either 'cow' or something else.
let animal = 'cow';

// 2. Write code that wilil print out "mooooo" if the variable is equal to cow.

function mooIfCow(creature) { 
    if (creature.match('cow')) {
        console.log('moooo');
    } else {
        console.log('Hey, you are not a cow!')
    }
};

// mooIfCow(animal)



// SECTION - Driver's Ed

// 1. Create a variable that holds a person's age. Be semantic.

let licenseAge = 16;

const canDrive = function(person) {
    if (person > 16) {
        console.log('Here are the keys!')
    } else {
        console.log('Sorry, you are too young.')
    }
}

// canDrive(licenseAge);



// ANCHOR - LOOPS

// SECTION - LOOPS: The Basics

// 1. write a loop that will print out all the numbers from 0 to 10, inclusive.
// for (let a = 0; a <= 10; a++) {
//     console.log(a)
// }

// 2. Write a loop that will print out all the numbers from 10 up to and including 400.
// for (let a = 0; a <= 400; a++) {
//     console.log(a);
// }

// 3. Write a loop that will print out every third number starting with 11 and go no higher than 400.
// for (let a = 11; a <= 400; a += 3) {
//     console.log(a);
// }



// SECTION - LOOPS: Get Even

// 1. Print out the numbers that are even within the range of 1 - 100.
// for (let a = 0; a <= 100; a++) {
//     if (a % 2 == 0) {
//         console.log(a + ' <-- is an even number');
//     } else {
//         console.log(a)
//     }
// }



// SECTION - LOOPS: Give Me Five

// 1. For the numbers 0 - 100, print out "I found (number), high five!" if the number is a multiple of 5.
// NOTE - Messages will only print for both (when were not using a combined && operator)if we define two separate 'if' statements. An 'else if' statement will only print for one.
// for (let b = 0; b <= 100; b++) {
//     // if (b % 3 == 0 && b % 5 == 0) {
//     //     console.log('I found a ' + b + ', high five & three is a crowd!');
//     // } 
//     if (b % 5 == 0) {
//         console.log('I found a ' + b + ', high five!');
//     } if (b % 3 == 0) {
//         console.log('I found a ' + b + ', three is a crowd!');
//     }
// }



// SECTION - LOOPS: Savings Account

// 1. Write code that will save the sum of all the numbers between 1-10 to a variable called bank_account.

// NOTE - No declaring an initial numerical value (in this case zero) will return a result of NaN when we console.log below:
// let bank_account = 0;

// for (let c = 0; c <= 10; c++) {
//     bank_account += c;
// }

// for (let d = 0; d <= 100; d++) {
//     bank_account += (d * 2);
// }

// console.log(bank_account);



// SECTION - LOOPS: Multiples of 3 & 5

// 1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, 9. Find the sume of all the multiples of 3 or 5 below 1000.

// let sum = 0;

// for (let a = 0; a < 1000; a++) {
//     if (a % 3 == 0) {
//         sum += a;
//     } if (a % 5 == 0) {
//         sum += a;
//     }
// }

// console.log(sum);



// ANCHOR - Arrays & Control Flow:

// SECTION - Talk About It

// 1. What are the things in an array called?
// Items. These items can be of different data types.

// 2. Do arrays guarantee those things will be in order?
// No, it is not a guarantee that array items will be ordered. For example, numerical values being ordered smallest to largest. Instead, you !CAN! guarantee order by using Array.prototype methods to "sort" or otherwise manipulate the items.

// 3. What real-life thing could you model with an array.
// The age of every individaul in your family or friend group.



// SECTION - Arrays: Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called quotes:

// const quotes = ['Fear is the mind killer.', 'To infinity and beyond!', 'What\'s that smell? Manflesh!'];



// SECTION - Arrays: Accessing Elements

// Given the following array 'const randomThings = [1, 10, 'Hello", true]', do the following:

// const randomThings = [1, 10, "Hello", true];

// 1. How do you access the 1st element in the array?
// console.log(randomThings[0]);

// 2. Change the value of "Hello to "World":
// NOTE - Two options:
// randomThings[2] = "World";
// randomThings.splice(2, 1, 'World');
// console.log(randomThings);



// SECTION - Arrays: Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1. What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);
// ourClass.splice(2, 1, "Luna");
// console.log(ourClass);

// 2. Change the value of "Github" to "Octocat".
// ourClass.splice(-1, 1, "Octocat");
// console.log(ourClass);

// 3. Add a new element, "Cloud City" to the array.
// ourClass.push('Cloud City');
// console.log(ourClass);



// SECTION Arrays - Mix It Up

// const myArray = [5, 10, 500, 20];

// 1. Add the string "Egon" to the end of this array. Add another string of your choice to the en of the array.
// myArray.push("Egan", "Eragorn");

// 2. Remove the 5 from the beginning of the array.
// myArray.shift()

// 3. Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift("Bob Marley");

// 4. Remove the string of yoru choice from the end of the array.
// myArray.pop();

// 5. Reverse the array using Array.prototype.reverse(). Did you mutute the array? What does mutate mean? Did the .rerverse() method return anything?
// myArray.reverse();

// Yes, this method mutates the array. The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.
// Mutation is basically change the array itself instead of returning a new array with the newe changes.
// console.log(myArray);



// SECTION - Control Flow: Biggie Smalls

// 1. Create a variable that has an integer.
// let myVariable = 99;

// const relationTo100 = function(inputNum) {
//     if (inputNum < 100) {
//         console.log('Little number.');
//     } else {
//         console.log('Big number.')
//     }
// }

// relationTo100(myVariable);



// SECTION - Control Flow: Monkey in the Middle

// Write an if/else if/else statement that consoles log 'littlenum' if less than 5, console logs 'big num' if more than 10, otherwise console logs 'monkey'.

// let myVariable = 5;

// const littleBigOrMonkey = (inputNum) => {
//     if (inputNum < 5) {
//         console.log('Little number.');
//     } else if (inputNum > 10) {
//         console.log('Big number.');
//     } else {
//         console.log('monkey.');
//     }
// }

// littleBigOrMonkey(myVariable);



// SECTION - Control Flow: Whats In Your Closet

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  const thomsCloset = [
    [
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],
    [
      "grey jeans",
      "jeans",
      "PJs"
    ],
    [
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1. Using bracket notation, log the sentece 'Kristyn is rocking that' + third item in her closet + 'today! to the console.

//   console.log(`Kristyn is rocking that ` + kristynsCloset[2] + ' today!');

  // 2. Add 'raybans' to her clset after 'yellow knit hat'.
const lastItem = kristynsCloset.pop();
kristynsCloset.push('raybans', lastItem);

// 3. Modify 'yellow knit hat' to read 'stained knit hat'.
kristynsCloset.splice(-3, 1, 'stained knit hat');

// 4. Put together an outfit for Thom. Using bracket notation, access the first element in Thom's shirt array.
// console.log(thomsCloset[0][0]);

// 5. In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][0]);

// 6. Access one item from Thom's pants array.
// console.log(thomsCloset[2][0]);

// 7. Log a sentence about what Thom's wearing.
// console.log(`Thom is looking fierce with his ${thomsCloset[2][0]}, ${thomsCloset[1][0]} and ${thomsCloset[0][0]}.`);

// 8. Get more specific about what kind of PJs Thoms wearing this winter -- modify his closet so that it's 'footie pajamas'.
// thomsCloset[1].splice(2, 1, 'Footie Pajamas');
// console.log(thomsCloset);



// ANCHOR - FUNCTIONS

// SECTION - Function: printCool

// 1. Write a function printCool that accepts one parameter, 'name', as an argument. The function should print the name and a message saying that person is cool.

// const printCool = (name) => {
//     console.log(`${name} is cool.`);
// }
// printCool('Luna');



// SECTION - Functions: calculateCube

// 1. Write a function, 'calculateCube', that takes a single number and prints the volume of a cube made from that number.

// const calculateCube = (number) => {
//     console.log(number**3);
// }
// calculateCube(5);



// SECTION - Functions: isVowel

// 1. Write a function, 'isVowel', that takes a character and returns true if it s a vowel, false otherwise.

// const isVowel = (singleString) => {
//     const regex = /[aAeEiIoOuU]/;
//     if (singleString.match(regex)) {
//         console.log('A vowel');
//     } else {
//         console.log('not a vowel');
//     }
// }
// isVowel('o');



// SECTION - Functions: getTwoLengths

// 1. Write a function, 'getTwoLengths', that accepts two strings as parameters. Teh function shoudl return an array of numbers where each number is length of the corresponding string.

// const getTwoLengths = (string1, string2) => {
//     return new Array(string1.length, string2.length);
// }
// console.log(getTwoLengths('Michele', 'Jon'));



// SECTION - Functions: getMultipleLengths

// Write a function, 'getMultipleLengths', that accepts a single parameter as an argument -- an array of strings. The functions should return an array of numbers where ach number is the length of the corresponding string.

// const getMultipleLengths = (array) => {
//     const newArray = [];
//     for (let a = 0; a < array.length; a++) {
//         newArray.push(array[a].length)
//     }
//     return newArray;
// }
// console.log(getMultipleLengths(["Korra", "Mako", "Bolin", "Asami", "Tenzin", "Lin"]));



// SECTION - Functions: maxOfThree

// 1. Define a function, 'maxOfThree', that takes three numbers as arguments and returns the largest of them. If all numbers are the same value, it doesn't matter which one is returned. If the largest two numbers are the same, one of them should be returned. Be sure to test it with largest value as each of the three parameters:

// const maxOfThree = (num1, num2, num3) => {
//   return Math.max(num1, num2, num3);
// }

// console.log(maxOfThree(209, 7, 283));

// console.log(maxOfThree(122, 122, 122));

// SECTION - Functions: printLongestWorld

// 1. Write a function, 'printLongestWord', that accepts a single argument -- an array of strings The method should return the longest word in teh array. In the case of a tie, the method should return the word that appears firt in the array.

// const printLongestWord = (array) => {
//   return array.reduce(function (a, b) {
//     return a.length > b.length ? a : b;
//   })
// }

// console.log(printLongestWord(["Meredith", "George", "Christina", "Izzie", "Alex", "Doctor Miranda Bailey"]));



// SECTION - Functions: Reduce
// const array1 = [10, 7, 20, 3];


// const sumOfAll = array1.reduce(
//     (previousVal, currentVal) => previousVal + currentVal, 0
// );


// console.log(sumOfAll);



// SECTION - Functions: transmogrify

// 1. Write a JS function called 'transmorgrify'. This function should accept three numerical arguments, and return the sum of the first two numbers multiplied, raised to the power of the third number.

// const transmogrify = (num1, num2, num3) => {
//   return (num1 * num2) ** num3;
// }

// console.log(transmogrify(5, 3, 2));



// SECTION - Functions: reverseWordOrder v2

// 1. Without using split(), reverse(), or .join(), write a function 'reverseWordOrder' that accepts a signle argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// const reverseWordOrder = (string) => {
//   let newString = "";
//   for (let b = string.length - 1; b >= 0; b--) {
//     newString += string[b] 
//   }
//   console.log(newString)
// }

// reverseWordOrder('Jonathan and Jeremy');

// const reverseV2 = (string) => {
//   return string.split(" ").reverse().join(" ");
// }

// console.log(reverseV2('Jonathan is cool'));

// const reverseWordOrder = (string) => {
//   let reversedString = "";
//   let word = "";
//   for (let a = 0; a <= string.length; a++) {
//     if (string[a] !== " " && string[a] !== undefined) {
//       word += string[a];
//     } else if (string[a] === " " || string[a] === undefined) {
//       reversedString = word + " " + reversedString;
//       word = "";
//     }
//   }
//   return reversedString;
// }

// console.log(reverseWordOrder('Ishmael me call'));




// SECTION - Math.random()

// 1. Write a function that will return a random interger between 1 and 10.
// const between1And10 = () => {
//   return Math.floor(Math.random() * (10 - 1 + 1) + 1);
// }
// console.log(between1And10());

// 2. Write a function that will return a random integer between 10 and 100.
// const between10to100 = () => {
//   return Math.floor(Math.random() * (100 - 10 + 1) + 10);
// }
// console.log(between10to100())

// 3. Write a function that will return a random number between 532 and 13267.
// const largeRando = () => {
//   return Math.random() * (13267 - 532 + 1) + 532;
// }
// console.log(largeRando());

// 4. Write a function that will return a random !NUMBER! (not integer) between 1 and 10.
// const number10To100 = () => {
//   return Math.random() * (10 - 1) + 1;
// }
// console.log(number10To100());

// 5. Write a function that will take an array as a parameter, and return a random element from that array.
// const getRandomElement = (array) => {
//   return array[Math.floor(Math.random() * ((array.length - 1) - 0 + 1) + 0)]
// }
// array2 = ["Korra", "Bolin", "Mako", "Asami", "Lin", "Tenzin"];
// console.log(getRandomElement(array2));



// ANCHOR - OBJECTS

// SECTION - Objects: Make a user object

// Create an object called user. Write in key-value pairs for name, email, age and purchased. Set the value of purchased to an empty array. SEt the other values to whatever you would like.
// let user = {
//   name: 'Jonathan',
//   email: 'jtcrepeau@gmail.com',
//   age: 34,
//   purchased: [],
// }

// The user changed their email address. Without changing the original user object, update the email value to a new email address.
// user.email = 'crepeau.jonathan@gmail.com';

// Our user has a birthday. Without changing the original user object, increment the age value using the postfix operater.
// user.age ++;

// Without changing the original user object, add a new key, 'location', to the object and give it a value.
// user.location = 'San Anselmo, CA, USA';

// Our user purchased some carbohydrates. Using the push() method, add the string carbohydrates to the purchased array.
// user.purchased.push('carbohydrates', 'peace of mind', 'merino jodhpurs');
// console.log(user.purchased[2]);
// console.log(user);



// SECTION - Objects: Object within an object

// let user = {
//   name: 'Jonathan',
//   email: 'jtcrepeau@gmail.com',
//   age: 34,
//   purchased: [],
// }

// 1. Write a friend object into your user object and give the friend a name, age, location and an empty purchase array.

// user.friend = {
//   name: 'Johanna',
//   age: 34,
//   location: 'Ithaca, NY, USA',
//   purchased: [],
// }

// 2. Console.log just the friends name.
// console.log(user.friend.name);

// 3. Console.log just the friend's location.
// console.log(user.friend.location);

// 4. Change the friends age to 55.
// user.friend.age = 55;

// 5. Use push to add 'The one Ring' to the friend's purchased array.
// user.friend.purchased.push('The One Ring', "a latte");
// console.log(user.friend.purchased[1]);



// SECTION - 