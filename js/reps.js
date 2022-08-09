// ANCHOR - Fundmental Reps

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

