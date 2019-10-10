
const first = require('./exo01')
const last = require('./exo03')

console.log("first :");
console.log(first([42,54,"hello",58,56]));
console.log(first([42,54,"hello",58,56],2));
console.log(first([42,54,"hello",58,56],3));

console.log("last :");
console.log(last([42,54,"hello",58,56]));
console.log(last([42,54,"hello",58,56],2));
console.log(last([42,54,"hello",58,56],3));