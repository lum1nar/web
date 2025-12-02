const http = require("node:http");

http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => console.log("Server running"));
