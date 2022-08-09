// ANCHOR - Fundmental Reps

// SECTION - Q + A:

// 1. How do we assign a value to a variable?
// Using the assignment operator (=).
// (variable) = (value we want to assign)

const luna = luna;


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

let firstVariable = 12;
let secondVariable = firstVariable;


// 4. Remind me, what are 'declare', 'assign', and 'define'?
// You declare a new variable using one of the following keywords - const, let or var.
// You assign a specific value/set of values to a variable using the assignment operator (=). Syntax should be keyword (variable) = (values/set of values).
// A variable is defined when it has been declared in the current scope using a declarative statement.


// 5. What is psuedocoding and why should you do?
// Psuedocode is a detailed yet "readable" description of what a given aspect of a computer program does. It is not written in an actual coding language. This is a crucial part of the planning process. A lot of programmers will say -- 75% of your time should be planning (psuedocoding) and 25% coding.


// 6. 75% planning, 25% coding.