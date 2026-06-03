// JavaScript Number Datatype Examples

// Standard whole number (integer)
let int = 42;
console.log("Integer:", int);

// Decimal number (floating-point value)
let float = 3.14;
console.log("Float:", float);

// Exponential notation (scientific format)
let sci = 5e3; // 5 × 10³
console.log("Scientific:", sci);

// Binary representation (base 2)
let bin = 0b1010;
console.log("Binary:", bin);

// Octal representation (base 8)
let oct = 0o77;
console.log("Octal:", oct);

// Hexadecimal representation (base 16)
let hex = 0xFF;
console.log("Hexadecimal:", hex);

// Negative numeric value
let neg = -10;
console.log("Negative:", neg);

// Infinity values in JavaScript
console.log("Infinity:", Infinity);
console.log("Divide by zero:", 1 / 0);

// NaN → Invalid mathematical result
console.log("NaN:", NaN);
console.log("Invalid Calculation:", "abc" * 2);

// Numeric separators for better readability
let bigNum = 1_000_000;
console.log("Readable Number:", bigNum);

// BigInt for very large integers
let bigInt = 9007199254740991n;
console.log("BigInt:", bigInt);

// Safe integer limits in JavaScript
console.log("Maximum Safe Integer:", Number.MAX_SAFE_INTEGER);
console.log("Minimum Safe Integer:", Number.MIN_SAFE_INTEGER);