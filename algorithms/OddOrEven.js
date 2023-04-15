//? To determine if a number is odd or even

//! Feel free to change this value to try for yourself
let num=5
// Use the modulus operator (%) to check if "num" is evenly divisible by 2
let oddOrEven = (num) => {
    // using if/else statement: if num divided by 2 has a remainder of 0 is true, then return "even"; else return "odd"
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};
console.log(`The number ${num} is ${oddOrEven(num)}`);  // to display the result in the console

//! Feel free to change this value to try for yourself
let num2=6
// Use the modulus operator (%) to check if "num" is evenly divisible by 2
let oddOrEven2 = (num2) => {
    // using ternary operator:  ? = if num2 divided by 2 has a remainder of 0 is true, then "even"; : = else "odd"
    return num2 % 2 === 0 ? "even" : "odd";
};
console.log(`The number ${num2} is ${oddOrEven2(num2)}`);  // to display the result in the console