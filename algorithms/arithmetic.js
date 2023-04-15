//? An arithmetic function is a type of function that performs arithmetic operations on one or more input values, 
//? and returns the result of the operation as the output.

//! Addition
//! Feel free to change these values to try for yourself
let b = 5;
let c = 3;
// Declare a variable a and assign it an arrow function that takes two parameters, b and c.
// In the body of the function, add b and c together using the + operator.
// The result of the addition is automatically returned by the arrow function.
let a = (b, c) => b + c;
let add = a(b, c);  // to assign the result to a variable to be used in other functions
console.log(`the value of a = ${add}`);  // to display the result in the console 

//! Subtraction
//! Feel free to change these values to try for yourself
let e = 5;
let f = 3;
// Declare a variable `d` and assign to it an anonymous function that takes two parameters, `e` and `f`.
// In the body of the function, subtract f from e using the - operator.
// Return the result of the subtraction is automatically returned by the arrow function.
let d = (e, f) => e - f;
let subtract = d(e, f);  // to assign the result to a variable to be used in other functions
console.log(`the value of d = ${subtract}`);  // to display the result in the console 

//! Multiplication
//! Feel free to change these values to try for yourself
let g = 9;
let h = 3;
// Declare a variable `j` and assign to it an anonymous function that takes two parameters, `g` and `h`.
// In the body of the function, multiply g and h together using the * operator.
// Return the result of the multiplication is automatically returned by the arrow function.
let j = (g, h) => g * h;  
let multiply = j(g, h);  // to assign the result to a variable to be used in other functions
console.log(`the value of j = ${multiply}`)  // to display the result in the console

//! Division
//! Feel free to change these values to try for yourself
let k = 9;
let l = 3;
// Declare a variable `m` and assign to it an anonymous function that takes two parameters, `k` and `l`.
// In the body of the function, divide k by l using the / operator.
// Return the result of the division is automatically returned by the arrow function.
let m = (k, l) => k / l;
let divide = m(k, l);  // to assign the result to a variable to be used in other functions
console.log(`the value of m = ${divide}`);  // to display the result in the console
