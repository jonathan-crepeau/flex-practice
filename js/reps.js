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



// SECTION 