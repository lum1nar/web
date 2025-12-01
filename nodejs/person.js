// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname)){
//
// }
// console.log(exports);
// console.log("=====================================");
// console.log(require);
// console.log("=====================================");
// console.log(module);
// console.log("=====================================");
// console.log(__filename);
// console.log("=====================================");
// console.log(__dirname);
// console.log("=====================================");
const person = {
    name: "John Doe",
    age: 30,
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hi from ${this.name} and his age is ${this.age}`);
    }
}

module.exports = Person;

// console.log(exports);
// console.log("=====================================");
// console.log(require);
// console.log("=====================================");
// console.log(module);
// console.log("=====================================");
// console.log(__filename);
// console.log("=====================================");
// console.log(__dirname);
// console.log("=====================================");
