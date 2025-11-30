let a = 5;
let b = 10;
let c: number = 5;

console.log(a);
console.log(c);

// =================================================================
// tuple array
let employee: [number, string][];

employee = [
    [1, "brad"],
    [2, "lum1nar"],
    [3, "sasa"],
];

let pid: string | number;

pid = 5;
pid = "123";

// ==========================================================================
// enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
console.log(1);
console.log(Direction1.Right);
console.log(Direction1[0]);

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}

console.log(Direction2.Left);

// =========================================================================
// object
// type
const user: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "lum1na",
};

console.log(user.name);

type User = {
    id: number;
    name: string;
};

const user2: User = {
    id: 2,
    name: "sasa",
};

console.log(user2.name);

// ============================================
// Interfaces
// Pretty much the same as type
// Can have optional or readonly arguments
interface userInterFace {
    readonly id: number;
    name: string;
    age?: number;
}

const user1: userInterFace = {
    id: 1,
    name: "sasa",
};

// user1.id = 5; won't work
//
interface personInterFace {
    id: number;
    name: string;
    register(): string;
    // an function that returns a string
}

class Person implements personInterFace {
    id: number;
    name: string;
    register() {
        return "123";
    }
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// =========================================================
// Extending classes
// Superrrrrrrrrrrrrrrrrrrrrrrrrrrr
class Employee extends Person {
    position: string;
    constructor(id: number, name: string, position: string) {
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
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["lum1na", "sasa"]);
numArray.push(123);
console.log(numArray);
