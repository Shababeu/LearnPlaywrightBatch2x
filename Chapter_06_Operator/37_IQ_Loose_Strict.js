console.log(0 == "");      
// true -> empty string "" converts to 0

console.log(0 == "0");     
// true -> string "0" converts to number 0

console.log("" == "0");    
// false -> "" becomes 0, "0" becomes 0 only in number comparison
// both strings are compared directly here


console.log(0 == false);   
// true -> false converts to 0

console.log(null == 0);    
// false -> null is special, it does not become 0 here

console.log(null == undefined); 
// true -> loose equality treats both as equal

console.log(null === undefined); 
// false -> datatype is different