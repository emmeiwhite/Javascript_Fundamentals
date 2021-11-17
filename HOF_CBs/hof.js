/* --- 1. Function Expressions | First Class Citizens --- */

/* 
   Functions in Javascript are call First Class Objects / Citizens.
   - Stored in a variable (expression)
   - Passed as an argument to another funtion
   - Returned from the function (closure)
*/

/* --- 2. Higher Order Function --- */

/* 
   A function which accepts another function as an arugument or
   returns another function as a result is called HOF
*/

/* --- 3. Call Back Function --- */

/* 
   A function which is passed to another function as an arugument and 
   executed inside that function is a Callback function
*/

// A) Basic Example of HOF | Not a practical one to start with

function HOF(callback) {
  callback(); // Callback function being executed inside the HOF
}

// This function we will pass to the HOF and execute there so this becomes a callback
function play() {
  console.log("People are playing in this world and wasting time");
}

// Now we will call our HOF and pass play function reference as an argument

HOF(play); // Note that we are only passing the reference of play not call it here

/* ---  B) Now a real worked example --- */
/** Suppose we have an array of numbers and we want to add 20 to each element and return updated array
 *
 * We can do one thing. We can have a seperate sum() function which takes sum of two numbers
 */
const numbers = [2, 4, 6];

function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

function addArrays(arr, cb) {
  let newArray = [];
  arr.forEach((element) => {
    console.log(element);
    newArray.push(cb(element, 20));
  });

  return newArray;
}

const updatedArray = addArrays(numbers, sum);
console.log(updatedArray);

// Example 2

function run(name) {
  return `${name} is running`;
}

// HOF

function runTowardsDestiny(name, destination, cb) {
  return `${cb(name)} towards ${destination}`;
}

const destinationImran = runTowardsDestiny("Imran", "Jannah", run); // Note that we are passing the reference of callback only
const destinationSatan = runTowardsDestiny("Satan", "Hell", run);

console.log(destinationImran);
console.log(destinationSatan);
