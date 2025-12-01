const path = require("node:path");
// The node:path module provides utilities for working with file and directory paths

// basename
console.log("BASENAME");
console.log("original:", __filename);
console.log(path.basename(__filename));
console.log("============================================");
console.log("\n");

// directory name
console.log("DIRNAME");
console.log("original:", __filename);
console.log(path.dirname(__filename));
console.log("============================================");
console.log("\n");

// extension name
console.log("EXTNAME");
console.log("original:", __filename);
console.log(path.extname(__filename));
console.log("============================================");
console.log("\n");

// path object
console.log("PATHOBJ");
console.log("original:", __filename);
console.log(path.parse(__filename));
console.log("============================================");
console.log("\n");

// concatenate path
console.log("CONCATPATH");
console.log("original:", __dirname);
console.log(path.join(__dirname, "dir1", "/dir2", "file"));
console.log("============================================");
console.log("\n");
