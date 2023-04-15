//? A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
//? In other words, if you reverse the order of the characters in a palindrome, the result will be the same as the original sequence.

// To test a palindrome we declare the word we wish to test
//! You may change this variable to test a different word
let firstWord = 'racecar';

// We need to create an empty array so we can have access to using javascript methods on the firstWord
let array = [];

// The secondWord is created as an empty container that will hold the values from the array as the pop method is executed
let secondWord = '';

// For each letter in firstWord, we are pushing each letter into the array starting from index 0 to the last letter of the word
for (var i = 0; i < firstWord.length; i++) {
    array.push(firstWord[i]);
}

// For each letter in the array we then .pop(), which removes the last value of the array and place it into the secondWord container
for (var i = 0; i < firstWord.length; i++) {
    secondWord += array.pop()
}

// Lastly, we test firstWord to be equal to secondWord and log the results to the console
if (firstWord === secondWord) {
    console.log(`${firstWord} and ${secondWord} is palindrome`);
}
else (`${firstWord} and ${secondWord} is not a palindrome`)