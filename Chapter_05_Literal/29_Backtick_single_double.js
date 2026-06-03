// ============================================================
// Topic: Single Quotes vs Double Quotes vs Backticks
// File : 29_Backtick_single_double.js
// ============================================================


/*
|--------------------------------------------------------------------------
| Basic Concept
|--------------------------------------------------------------------------
|
| Single ('') and Double ("") quotes are used for normal strings.
|
| Backticks (``) are called Template Literals.
| They support:
|   - Variable interpolation
|   - Multi-line strings
|   - JavaScript expressions inside ${}
|
| Quick Understanding:
|
|   '' or ""  -> Simple string
|   ``        -> Dynamic / smart string
|
*/


// ============================================================
// 1. Single Quotes
// ============================================================

// Simple string using single quotes

let single = 'Hello World';

console.log("Single Quote:", single);


// ============================================================
// 2. Double Quotes
// ============================================================

// Simple string using double quotes

let double = "Hello World";

console.log("Double Quote:", double);


/*
|--------------------------------------------------------------------------
| Note
|--------------------------------------------------------------------------
|
| Single and Double quotes behave the same in JavaScript.
| Choose one style and stay consistent across the project.
|
*/


// ============================================================
// 3. Backticks / Template Literals
// ============================================================

let name = "Harish";
let age = 25;


// ------------------------------------------------------------
// Variable Interpolation
// ------------------------------------------------------------

// Injecting variables using ${}

let greeting =
    `Hello, my name is ${name} and I am ${age} years old.`;

console.log("Backtick with variable:", greeting);


// ------------------------------------------------------------
// Multi-line Strings
// ------------------------------------------------------------

// Backticks allow line breaks without \n

let multiLine = `
Line 1
Line 2
Line 3
`;

console.log("Backtick multi-line:", multiLine);


// ------------------------------------------------------------
// Expressions inside ${}
// ------------------------------------------------------------

// JavaScript expressions can run inside template literals

let sum = `10 + 20 = ${10 + 20}`;

console.log("Backtick expression:", sum);


// ============================================================
// 4. Feature Comparison
// ============================================================

/*
|--------------------------------------------------------------------------
| Feature Comparison
|--------------------------------------------------------------------------
|
| Feature                | '' / "" | ``
|------------------------|----------|----------------
| Simple String          |   Yes    | Yes
| Variable Interpolation |   No     | Yes -> ${var}
| Multi-line Support     |   No     | Yes
| Expressions            |   No     | Yes -> ${a+b}
|
*/
// ============================================================
// 5. Real-Time Example
// ============================================================

let product = "Laptop";
let price = 50000;
// Old string concatenation method

let oldWay =
    "The " + product + " costs " + price + " rupees.";
// Modern template literal method

let newWay =
    `The ${product} costs ${price} rupees.`;
console.log("Old way:", oldWay);
console.log("New way:", newWay);
// ============================================================
// End of File
// ============================================================