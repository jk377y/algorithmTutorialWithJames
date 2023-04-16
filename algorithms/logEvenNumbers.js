//? Print even numbers from 0 to num, assuming num is a positive number

//! Feel free to change this value to try for yourself
let num = 10;
// we can use a for loop to iterate through the numbers from 0 to num, if the moduls of the number is 0, then it is even
var logEvenNums = function (num) {
	for (var i = 0; i <= num; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
};
logEvenNums(num);

//! Feel free to change this value to try for yourself
// this can also be solved by incrementing the number by 2, and starting at 0
let num2 = 10;
// by setting i+=2, we are incrementing the number by 2, and starting at 0
var logEvenNums2 = function (num2) {
	for (var i = 0; i <= num2; i += 2) {
		console.log(i);
	}
};
logEvenNums2(num2);
