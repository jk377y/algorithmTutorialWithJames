//? An arithmetic function is a type of function that performs arithmetic operations on one or more input values, 
//? and returns the result of the operation as the output.

//! Addition
//! Feel free to change these values to try for yourself
let b = 5
let c = 3
// Declare a variable a and assign it an arrow function that takes two parameters, b and c.
// In the body of the function, add b and c together using the + operator.
// The result of the addition is automatically returned by the arrow function.
let a = (b, c) => b + c;
let add = a(b, c)  // to assign the result to a variable to be used in other functions
console.log(`let a = ${add}`)  // to display the result in the console 

//! Subtraction
//! Feel free to change these values to try for yourself
let e = 5
let f = 3
// Declare a variable `d` and assign to it an anonymous function that takes two parameters, `e` and `f`.
// In the body of the function, subtract f from e using the - operator.
// Return the result of the subtraction using the return keyword.
let d = (e, f) => e - f;
let subtract = d(e, f)  // to assign the result to a variable to be used in other functions
console.log(`let d = ${subtract}`)  // to display the result in the console 
