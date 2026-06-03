# README4.md

# Chapter 3 - Identifier & Literals

## Topics Covered

* JavaScript Identifiers
* Variable Naming Rules
* Literals in JavaScript
* Comments in JavaScript
* Naming Conventions

---

## Files Included

* 06_Identifier_Rules.js
* 07_Identifier_Literals_Part02.js
* 08_Comments.js
* Identifier_Rules.md
* JavaScript_Keywords.md
* JavaScript_Keywords_VS_Code.md
* JavaScript_Literals_VS_Code.md
* VS_Code_KeyboardShortcuts.md

---

## Important Concepts

### Identifier Rules

* Variable names can contain:

  * letters
  * numbers
  * underscore (_)
  * dollar sign ($)

* Variable names cannot:

  * start with numbers
  * contain spaces
  * use JavaScript keywords

Example:

```javascript
var firstName = "Shabab";
var user_name = "Admin";
```

---

## Naming Conventions

### camelCase

Used for variables and functions.

Example:

```javascript
let firstName = "Shabab";
```

### PascalCase

Used for classes.

Example:

```javascript
class UserProfile {}
```

### snake_case

Used in some coding styles.

Example:

```javascript
let user_name = "Shabab";
```

### SCREAMING_SNAKE_CASE

Used for constants.

Example:

```javascript
const MAX_SIZE = 100;
```

---

## Comments in JavaScript

### Single Line Comment

```javascript
// This is a comment
```

### Multi Line Comment

```javascript
/*
Multi line comment
*/
```

---

## Summary

This chapter explains:

* JavaScript variable naming rules
* literals and identifiers
* comments
* naming conventions used in real projects

# README5.md

# Chapter 4 - JavaScript Concepts

## Topics Covered

* var, let, const
* Functions
* Scope
* Hoisting
* Function Scope vs Block Scope

---

## Files Included

* 09_Var_Let_Const.js
* 10_functions.js
* 12_let_people_love.js
* 13_const_explained.js
* 14_var_functionscope.js
* 15_let_scope.js
* 16_Hoisting.js
* 17_hoisting_fn.js

---

## var, let and const

### var

* Function scoped
* Can be redeclared
* Can be reassigned

Example:

```javascript
var name = "Shabab";
```

---

### let

* Block scoped
* Cannot be redeclared
* Can be reassigned

Example:

```javascript
let age = 25;
age = 26;
```

---

### const

* Block scoped
* Cannot be reassigned
* Must be initialized during declaration

Example:

```javascript
const PI = 3.14;
```

---

## Hoisting

Hoisting means JavaScript moves variable and function declarations to the top internally before execution.

Example:

```javascript
console.log(a);
var a = 10;
```

Output:

```javascript
undefined
```

---

## Function Scope vs Block Scope

### Function Scope

Variables declared using var are accessible inside the complete function.

Example:

```javascript
function test(){
   if(true){
      var x = 10;
   }

   console.log(x);
}
```

---

### Block Scope

Variables declared using let and const are accessible only inside the block.

Example:

```javascript
if(true){
   let y = 20;
}
```

---

## Functions

Functions are reusable blocks of code.

Example:

```javascript
function add(a,b){
   return a+b;
}
```

---

## Summary

This chapter explains:

* JavaScript variable types
* function basics
* hoisting
* scope concepts
* var vs let vs const
* block scope and function scope