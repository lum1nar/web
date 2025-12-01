//
// const person = require("./person.js");
// console.log(person);

const Person = require("./person.js");
const person1 = new Person("Lum1na", 22);
person1.greeting();

const Logger = require("./logger.js");

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener", data));

logger.log("HElLO");
logger.log("Hi");
