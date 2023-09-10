console.log("Hello World😉😉😉")
/******************************
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
******************************/

// Automatically

a = 5;
b = 10;
console.log(a + b);

// Using Var

var a = 10;
var b = 10;
console.log(a + b);

// Using let
/*
1. Variables defined with let can not be redeclared.
2. Variables defined with let must be declared before use.
3. Variables defined with let have block scope.(After Scope)
*/

let a = 10;
let b = 10;

// Using Const
/*
1. Variables defined with const cannot be Redeclared.
2. Variables defined with const cannot be Reassigned.
3. Variables defined with const have Block Scope.(After scope)
*/
// Type -01:
// Redeclaring
const p = p;
// const p = pnew; // Giving Error

// Reassigning
const pie = 3.14;
pie = pie + 1;

// Conventions of Variable Declaring
// Declaration Convention
var camelCase = 'camelCase';
var snake_case = 'snake_case';
var PascalCase = 'PascalCase';

/*****************End*********************/