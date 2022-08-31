// @1:04:30 Start of built-in repo for the Path module

const path = require("path"); // built-in module 'path'

// console.log(path.sep);

// We create a folder called content and within it another folder called subfolder with a text file, test.txt
const filePath = path.join("/content/", "subfolder", "test.txt");

// console.log(filePath);

// Now to just find the last portion of a file path that we joined earlier we can use the method callef .basename()
const base = path.basename(filePath);

// console.log(base);

// path.resolve is another type of method that returns an absolute path. The way it works is that it accepts a sequence of path or path segments and it resolves it into something

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
