//? Write a program that prints the numbers from 1 to 100. But for multiples of 'x' print "Fizz" instead of the number and for the multiples of 'y' print "Buzz".
//? For numbers which are multiples of both 'x' and 'y' print "FizzBuzz"

//! Feel free to change the values of x and y
let x = 2;
let y = 3;
// establish an empty array to store the values
let array = [];
// loop through the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // check if the number is a multiple of both x and y
	if (i % x === 0 && i % y === 0) {
        // if it is, push "FizzBuzz" to the array
		array.push("FizzBuzz");
    // check if the number is a multiple of x
	} else if (i % x === 0) {
        // if it is, push "Fizz" to the array
		array.push("Fizz");
    // check if the number is a multiple of y
	} else if (i % y === 0) {
        // if it is, push "Buzz" to the array
		array.push("Buzz");
	} else {
        // if it is not a multiple of either x or y, push the number to the array
		array.push(i);
	}
}
// print the array to the console
console.log(array);
