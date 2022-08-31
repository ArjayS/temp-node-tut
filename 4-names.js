// For the First Module lecture, README.md time stamp at 29:50

// local - This secret that has a value of SUPER SECRET can only be accessed inside this file.
const secret = "SUPER SECRET";

//share - While these names: john with a value of "john" and peter with a value of "peter" can be accessed outside because it is stored in a module.export where we can access it if the file that is accessing this is being called out in a require and is stored inside a varaible.
const john = "john";
const peter = "peter";

// console.log(module); //Running @ ~37:00

module.exports = { john, peter }; // ES6 Syntax
