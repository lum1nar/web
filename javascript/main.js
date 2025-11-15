// @ts-check

// Console
console.log("This is a normal message");
console.error("This is a error message");
console.warn("This is a warning message");
console.log("=========================================================");

// Declaration
let age = 30;
console.log(age);
console.log("=========================================================");

// String, Numbers, Boolean, null, undefined
const name1 = "John";
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name1);
console.log("=========================================================");

// Template String
const hello = console.log(`My name is ${name1} and I am ${age} `);
console.log(hello);
console.log("=========================================================");

// String Opeartoin
const str = "Hello World";
console.log(str.length);
console.log(str.substring(2).toUpperCase);
console.log(str.split(""));
console.log(str.split(" "));
console.log("=========================================================");

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
console.log("=========================================================");

// Object literal
const person = {
    firstName: "lum1na",
    lastName: "hsu",
    age: 30,
    hobbies: ["coding", "web developoing", "coffee roasting"],
    address: {
        street: "ChangRong rd",
        city: "Tainan",
        country: "Taiwan",
    },
};
person.address.city = "Taipei";
console.log(person.firstName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address.street);
console.log(person.address.city);

// retrieve information from an object
const { a } = person;
console.log(`I tried to retrive a from person and the result is: ${a}`);

const {
    firstName,
    lastName,
    address: { city },
} = person;

console.log(
    `I retrive the firstName, lastName, and **address:city** from person and the result is:
    ${firstName}, ${lastName}, ${city},`,
);

console.log("=========================================================");
// Objects in an array
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Take medicine",
        isCompleted: false,
    },
    {
        id: 3,
        text: "Fix TV",
        isCompleted: true,
    },
];
console.log("Here is my todo list");
console.log(todos);
console.log("=========================================================");

// JSON;
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
console.log("=========================================================");

// for-of
console.log("Print each with for-of loop:");
for (let todo of todos) {
    console.log(todo.text);
}

// forEach
console.log("Print each with forEach:");
todos.forEach(function(todo) {
    console.log(todo);
});

// map
console.log("Print a center attribute with map:");
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

// filter
console.log("Print only the todo that is completed with filter:");
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

// Combine them together
console.log("Print only the todo.text that is completed with filter:");
const todoCompletedtext = todos
    .filter(function(todo) {
        return todo.isCompleted === true;
    })
    .map(function(todo) {
        return todo.text;
    });
console.log(todoCompletedtext);

// == vs ===
const x2 = "10";
if (x2 === 10) {
    console.log("x is an interger an the value is 10");
}
if (x2 == 10) {
    console.log("x is an string, however the value is 10");
}

console.log("=========================================================");

// Arrow Functions
const addNums = (num1 = 5, num2 = 10) => {
    return num1 + num2;
};

const concise_addNums = (num1, num2) => num1 + num2;

console.log(addNums());
console.log(addNums(2, 3));
console.log(concise_addNums(2, 5));

// Use Arrow Function inside forEach, map, and filter
console.log("Use Arrow Function inside forEach, map, and filter:");
todos.forEach((todo) => console.log(todo));

console.log("=========================================================");

// Object
function Person(firstName, lastName, date_of_birth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.date_of_birth = new Date(date_of_birth);
}

Person.prototype.getBirthYear = function() {
    return this.date_of_birth.getFullYear();
};

Person.prototype.getFullName = function() {
    return `My name is ${this.lastName} ${this.firstName}`;
};

const person1 = new Person("Lum1na", "Hsu", "9-29-2003");
const person2 = new Person("Sasa", "Tsao", "9-13-2002");
person1.firstName = "Lumina";
console.log(person1);
console.log(person2);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Declare function with class
class Dog {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    bark() {
        console.log("Bark!");
    }

    getFullInfo() {
        if (this.gender === "male") {
            console.log(
                `Hello! I'm a ${this.age}-year-old boy. My name is ${this.name}`,
            );
        } else {
            console.log(
                `Hello! I'm a ${this.age}-year-old girl. My name is ${this.name}`,
            );
        }
    }
}

const dog1 = new Dog("achai", 8, "male");
const dog2 = new Dog("meimei", 6, "female");

dog1.bark();
dog1.getFullInfo();
dog2.getFullInfo();

// DOM operation

// Get single element
console.log(document.getElementById("my-form"));
console.log(document.querySelector("#my-form"));

// Get multiple elements
console.log(document.querySelectorAll("li"));

const items = document.querySelectorAll(".item");
console.log(items);
items.forEach((item) => console.log(item));

// Disable form default action
const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector("#my-form").style.background = "#ccc";
//     document.querySelector("body").classList.add("bg-dark");
//     console.log("click");
//     console.log(e.target);
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === "" || emailInput.value === "") {
        msg.innerHTML = "error";
        msg.classList.add("error");
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement("li");
        li.appendChild(
            document.createTextNode(`${nameInput.value} : ${emailInput.value}`),
        );
        userList.appendChild(li);
        emailInput.value = "";
        nameInput.value = "";
    }
}
