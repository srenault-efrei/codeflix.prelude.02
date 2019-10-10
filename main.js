
const first = require('./exo01')
const initial = require('./exo02')
const last = require('./exo03')
const rest = require('./exo04')
const flatten = require('./exo05')
const without = require('./exo06')
const intersection = require('./exo08')
const keys = require('./exo012')
const values = require('./exo013')
const pairs = require('./exo014')
const invert = require('./exo015')
// const pick = require('./exo016')
const omit = require('./exo017')
const has = require('./exo018')
const size = require('./exo019')
const sample = require('./exo019')
const map = require('./exo021')

// console.log("first :");
// console.log(first([42,54,"hello",58,56]));
// console.log(first([42,54,"hello",58,56],2));
// console.log(first([42,54,"hello",58,56],3));


// console.log("initial :");
// console.log(initial([42,54,"hello",58,56]));
// console.log(initial([42,54,"hello",58,56],2));
// console.log(initial([42,54,"hello",58,56],3));

// console.log("last :");
// console.log(last([42,54,"hello",58,56]));
// console.log(last([42,54,"hello",58,56],2));
// console.log(last([42,54,"hello",58,56],3));

// console.log("rest :");
// console.log(rest([42,54,"hello",58,56]));
// console.log(rest([42,54,"hello",58,56],2));
// console.log(rest([42,54,"hello",58,56],3));

// console.log("flatten :");
// console.log(flatten([1,[2],[3,[[4]]]]));

// console.log("without :");
// //  console.log(without([1,2,1,0,3,1,4],[0,1]));
// console.log(without([1,2,1,0,3,1,4],0,1));

// console.log("intersection :");
// console.log(intersection([1,2,3],[101,2,1,10],[2,11]))

// console.log("keys :");
// console.log(keys({one: 1 , two :2, three :3}))

// console.log("values :");
// console.log(values({one: 1 , two :2, three :3}))

// console.log("pairs :");
// console.log(pairs({one: 1 , two :2, three :3}))

// console.log("invert :");
// console.log(invert({Moe: "Moses", Larry :"Louis", Curly :"Jerome"}))


// console.log("pick :");
// console.log(pick({name: "moe", age :50, userid :"moel"},'name','age'))


// console.log("map :");
// console.log(map([1, 2, 3], function (num) { return num * 3; }))
// console.log(map({ one: 1, two: 2, three: 3 }, function (num) { return num * 3; }))


// console.log("omit :");
// console.log(omit({ name: "moe", age: 50, userid: "moel" }, 'userid'))
// console.log(omit({ name: "moe", age: 50, userid: "moel" }, function (value, key, object) {
//     return Number.isInteger(value)
// }))

// console.log("has :");
// console.log(has({ a: 1, b: 2, c: 3 }, "3"))

// console.log("size :");
// console.log(size([1,2,3,4,5]))
// console.log(size({one: 1, two: 2, three: 3})    )

console.log("sample :");
console.log(sample([1,2,3,4,5,6]))





