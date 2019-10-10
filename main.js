
const first = require('./exo01')
const initial = require('./exo02')
const last = require('./exo03')
const rest = require('./exo04')
const flatten = require('./exo05')
const without = require('./exo06')
const intersection = require('./exo08')

console.log("first :");
console.log(first([42,54,"hello",58,56]));
console.log(first([42,54,"hello",58,56],2));
console.log(first([42,54,"hello",58,56],3));


console.log("initial :");
console.log(initial([42,54,"hello",58,56]));
console.log(initial([42,54,"hello",58,56],2));
console.log(initial([42,54,"hello",58,56],3));

console.log("last :");
console.log(last([42,54,"hello",58,56]));
console.log(last([42,54,"hello",58,56],2));
console.log(last([42,54,"hello",58,56],3));

console.log("rest :");
console.log(rest([42,54,"hello",58,56]));
console.log(rest([42,54,"hello",58,56],2));
console.log(rest([42,54,"hello",58,56],3));

console.log("flatten :");
console.log(flatten([1,[2],[3,[[4]]]]));

console.log("without :");
//  console.log(without([1,2,1,0,3,1,4],[0,1]));
console.log(without([1,2,1,0,3,1,4],0,1));

console.log("intersection :");
console.log(intersection([1,2,3],[101,2,1,10],[2,11]))

