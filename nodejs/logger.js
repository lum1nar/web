const EventEmitter = require("node:events");
const uuid = require("uuid");

class Logger extends EventEmitter {
    log(msg) {
        this.emit("message", { id: uuid.v4(), msg: msg });
    }
}

module.exports = Logger;
