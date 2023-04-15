//? To log all numbers from 1 to `num`, and assume `num` will be a positive number

//! Feel free to change this value to try for yourself
let num = 5;
// Use a for loop to log all numbers from 1 to "num"
let logNums = function (num) {
	for (var i = 1; i <= num; i++) {
		console.log(i);
	}
};
logNums(num);

// Alternatively, we can use a while loop to log all numbers from 1 to "num"
//! Feel free to change this value to try for yourself
let num2 = 6;
// this will print the value of i to the console, and then increment i by 1 until i is no longer less than or equal to num2
let logNums2 = function (num2) {
	let i = 1;
	while (i <= num2) {
		console.log(i);
		i++;
	}
};
logNums2(num2);

//! REVERSE - We can also use this function to log all numbers from 1 to "num" in reverse
//! Feel free to change this value to try for yourself
let num3 = 7;
// this will print the value of i to the console, and then decrement i by 1 until i is no longer greater than or equal to 1
let logNums3 = function (num3) {
	let i = num3;
	while (i >= 1) {
		console.log(i);
		i--;
	}
};
logNums3(num3);
