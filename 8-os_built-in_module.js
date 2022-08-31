// @58:17 Start of built-in repo for the OS module

const os = require("os"); // built-in module 'os'

// Useful info about current user

const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`); // Method on getting the uptime(), .uptime()

//

const currentOS = {
  name: os.type(), // Method in getting the type of os system we are running
  release: os.release(), // Method in getting the release type of the os system we are running
  totalMem: os.totalmem(), // Method in getting the overall memory in the os system we are running
  freeMem: os.freemem(), // Method in getting the total of free memmory left in the os system we are running
};

console.log(currentOS);
