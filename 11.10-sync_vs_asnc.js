// 1:28:10 Sync vs. Async

/////////////////////////////////////////////////////////////
// // Using 10-fs-sync_built-in_module - FS Sync module // //
/////////////////////////////////////////////////////////////

// const { readFileSync, writeFileSync } = require("fs");

// console.log("start!");

// // Application of readFileSync
// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");
// console.log(first, second);

// // Application of writeFileSync and you want to append to the file
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}, ${second}`,
//   { flag: "a" }
// );

// console.log("done with this task");
// console.log("starting with next one");

///////////////////////////////////////////////////////////////
// // Using 11-fs-async_built-in_module - FS Async module // //
///////////////////////////////////////////////////////////////

// const { readFile, writeFile } = require("fs");

// console.log("start!");

// readFile("./content/firstAsync.txt", "utf8", (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = res;
//   readFile("./content/secondAsync.txt", "utf8", (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = res;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result: ${first}, ${second}`,
//       (err, res) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("done with this task");
//       }
//     );
//   });
// });
// console.log("starting next task");
