// undefined means variable is declared but no value is assigned
let a;
console.log(a); // Output: undefined
// null means intentionally empty value
let b = null;
console.log(b); // Output: null
// Checking datatype
console.log(typeof undefined); // undefined
console.log(typeof null); // object
// Equality comparison
console.log(undefined == null);  // true
console.log(undefined === null); // false