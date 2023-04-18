//? A Set constructor is a function that creates a new Set object. It takes an iterable object as an argument and returns a new Set object.
//? The values in the set are unique and the order of the values is not important.  Duplicate values are ignored when creating a Set.

//! Feel free to change the values in the array
// the Set constructor is a reserved keyword in JavaScript
let myObject = new Set(
    [
        'adam', 
        'brett',
        'brett', 
        'charlie', 
        'dan', 
        'ethan', 
        'ethan'
    ]
);
// notice the duplicate values in the array above (brett and ethan)
// the duplicate values are ignored when creating the set
// the output value is { 'adam', 'brett', 'charlie', 'dan', 'ethan' }
console.log(myObject);