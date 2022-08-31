// @1:10:15 Start of built-in repo for the FS Sync module

const { readFileSync, writeFileSync } = require("fs");

// Application of readFileSync
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// Application of writeFileSync
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);

// Application of writeFileSync and you want to append to the file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
