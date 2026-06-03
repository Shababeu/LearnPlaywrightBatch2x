console.log(42 == "42"); 
// true -> loose equality converts string "42" into number 42

console.log(42 === "42"); 
// false -> strict equality checks datatype also

console.log(0 == ""); 
// true -> empty string becomes 0 internally

console.log(true == 1); 
// true -> true converts to 1

console.log(false == 0); 
// true -> false converts to 0

console.log(5 != "5"); 
// false -> both become equal after conversion

console.log(5 !== "5"); 
// true -> datatype is different