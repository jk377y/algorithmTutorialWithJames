//? Reverse a string by using the split(), reverse(), and join() methods.
//? Examples below for single words and multiple words.

//! REVERSING A SINGLE WORD
//! feel free to change the string to whatever you want
let myString = 'booyah';
// Split the string into an array of characters 
let myStringArray = myString.split('') // ['b', 'o', 'o', 'y', 'a', 'h']
console.log(myStringArray);
// Reverse the array of characters; reverse() mutates the original array
let myReversedStringArray = myStringArray.reverse() // ['h', 'a', 'y', 'o', 'o', 'b']
console.log(myReversedStringArray);
// Join the array of characters back into a string
let reverseMyString = myReversedStringArray.join('') // 'hayoob'
console.log(reverseMyString);

//! or this can be simplified to one line of code
console.log(myString.split('').reverse().join(''));
//! OR
let oneLineReverse = myString.split('').reverse().join('');
console.log(oneLineReverse);


//! REVERSING A STRING WITH MULTIPLE WORDS
//! feel free to change the string to whatever you want
let mySentence = 'Hello, my name is Booyah';
let reverseMySentenceNoSplit = mySentence.split('').reverse().join(''); 
console.log(reverseMySentenceNoSplit);  // haooyB si eman ym ,olleH;  the string is reversed but the words are not
let reverseMySentence = mySentence.split(' ').reverse().join(' ');
console.log(reverseMySentence); // Booyah is name my Hello, ; the words are reversed but the string is not
let trimReverseMySentence = mySentence.split(' ').reverse().join('');
console.log(trimReverseMySentence); // BooyahisnamemyHello,; the words are reversed and the string is reversed, spaces are removed