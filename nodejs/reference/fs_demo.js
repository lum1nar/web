const fs = require("node:fs");
const path = require("node:path");

// Create Directory
fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) throw err;
  console.log("File Created...");
});

// Create and Write file
// Append to the end of file
fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello World\n",
  (err) => {
    if (err) throw err;
    console.log("data is written to ...");
    // Write to the end of a file
  },
);

fs.appendFile(
  path.join(__dirname, "test", "hello.txt"),
  "This will be added to the last line",
  (err) => {
    if (err) throw err;
    console.log("data is appended to ...");
  },
);

// Read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
