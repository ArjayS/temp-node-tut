// For the First Module lecture, README.md time stamp at 29:50
// Running Require
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

require("./7-mind-grenade");
