"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 5;
let b = 10;
let c = 5;
console.log(a);
console.log(c);
// =================================================================
// tuple array
let employee;
employee = [
    [1, "brad"],
    [2, "lum1nar"],
    [3, "sasa"],
];
let pid;
pid = 5;
pid = "123";
// ==========================================================================
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(1);
console.log(Direction1.Right);
console.log(Direction1[0]);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// =========================================================================
// object
// type
const user = {
    id: 1,
    name: "lum1na",
};
console.log(user.name);
const user2 = {
    id: 2,
    name: "sasa",
};
console.log(user2.name);
const user1 = {
    id: 1,
    name: "sasa",
};
class Person {
    id;
    name;
    register() {
        return "123";
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
// =========================================================
// Extending classes
// Superrrrrrrrrrrrrrrrrrrrrrrrrrrr
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "lum1na", "webdev");
console.log(emp.position);
// ========================
// Generics
//
//
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["lum1na", "sasa"]);
numArray.push(123);
console.log(numArray);
//# sourceMappingURL=test.js.map