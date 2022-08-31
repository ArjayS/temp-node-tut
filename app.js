// @2:00:10 Giving a sample exercise for installing dependecies through npmjs

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
