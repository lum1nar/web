// @ts-check

// Console
console.log("This is a normal message");
console.error("This is a error message");
console.warn("This is a warning message");

// Declaration
let age = 30;
console.log(age);

// String, Numbers, Boolean, null, undefined
const name1 = "John";
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name1);

// Template String
const hello = console.log(`My name is ${name1} and I am ${age} `);
console.log(hello);

// String Opeartoin
const str = "Hello World";
console.log(str.length);
console.log(str.substring(2).toUpperCase);
console.log(str.split(""));
console.log(str.split(" "));

// Arrays
const array = ["apples", "bananas", "pears", 1, true];
// We declare it as an array, however, the only thing that we can't do is
// reassign it, array = [];
// Otherwise, we can manipulate it as usual,
// Example below, insert a new element to the end of the array
array[5] = "peach";
array.push(123);
array.unshift("This will be the beginning");
console.log(array[0]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(`The index of peach is: ${array.indexOf("peach")}`);
console.log(`The index of peach is: ${array.indexOf("or")}`);
console.log(array);
array.pop();
console.log(array);
