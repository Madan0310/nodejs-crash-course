const path = require("path");

const filePath = "D:LearningsNodeJs\nodejs-crash-course\files\read.txt";

// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);

// //basename
// console.log(path.basename(filePath));
// console.log(__filename);

// //extension
// console.log(path.extname(filePath));

// const readFile = "read.txt";

// console.log(path.join(path.dirname(filePath), readFile));

/* File System */

const fs = require("fs");
//Reading from a file
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
