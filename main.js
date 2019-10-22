
// const first = require('./exo01')
// const initial = require('./exo02')
// const last = require('./exo03')
// const rest = require('./exo04')
// const flatten = require('./exo05')
// const without = require('./exo06')
// const union = require('./exo07')
// const intersection = require('./exo08')
// const difference = require('./exo09')
// const indexOf = require('./exo010')
// const lastIndexOf = require('./exo011')
// const keys = require('./exo012')
// const values = require('./exo013')
// const pairs = require('./exo014')
// const invert = require('./exo015')
// // const pick = require('./exo016')
// const omit = require('./exo017')
// const has = require('./exo018')
// const size = require('./exo019')
// const sample = require('./exo020')
// const map = require('./exo021')
// const mapBis = require('./exo021bis')
// const pluck = require('./exo022')
// const isArray = require('./exo023')
// const isObject = require('./exo024')
// const isMatch = require('./exo025')
// const isUndefined = require('./exo026')
// const isNull = require('./exo027')
const isRegExp = require('./exo028')

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
// console.log(flatten([1,[2],[3,[[4]]]])); // A FAIRE

// console.log("without :");
// console.log(without([1,2,1,0,3,1,4],0,1));



// console.log("keys :");
// console.log(keys({one: 1 , two :2, three :3}))

// console.log("values :");
// console.log(values({one: 1 , two :2, three :3}))

// console.log("pairs :");
// console.log(pairs({one: 1 , two :2, three :3}))

// console.log("invert :");
// console.log(invert({Moe: "Moses", Larry :"Louis", Curly :"Jerome"}))


// // console.log("pick :");
// // console.log(pick({name: "moe", age :50, userid :"moel"},'name','age'))


// console.log("map :");
// console.log(map([1, 2, 3], function (num) { return num * 3; }))
// console.log(map({ one: 1, two: 2, three: 3 }, function (num) { return num * 3; }))


// console.log("omit :");
// console.log(omit({ name: "moe", age: 50, userid: "moel" }, 'userid'))
// console.log(omit({ name: "moe", age: 50, userid: "moel" }, function (value, key, object) {
//     return Number.isInteger(value)
// }))

// console.log("has :");
// console.log(has({ a: 1, b: 2, c: 3 }, "b"))

// console.log("size :");
// console.log(size([1,2,3,4,5]))
// console.log(size({one: 1, two: 2, three: 3})    )

// console.log("sample :");
// console.log(sample([1,2,3,4,5,6]))
// console.log(sample([1,2,3,4,5,6],3))


// console.log("union :");
// console.log(union([1,2,3,],[101,2,1,10],[2,1]))

// console.log("intersection :");
// console.log(intersection([1,2,3],[101,2,1,10],[2,11]))

// console.log("difference :");
// console.log(difference([1,2,3,4,5],[5,2,10]));

// console.log("indexOf :");
// console.log(indexOf([1,2,3,2],2));

// console.log("lastIndexOf :");
// console.log(lastIndexOf([1,2,3,2],2));


// console.log("isRegExp :");
// console.log(isRegExp(/moe/))

// console.log("map bis :");
// console.log(mapBis([1, 2, 3], function (num) { return num * 3; }))
// console.log(mapBis({ one: 1, two: 2, three: 3 }, function (num) { return num * 3; }))


// console.log("pluck :");
// const stooges = [{name: 'moe' , age: 40},{name:'larry', age :50},{name : 'curly', age: 60} ]
// console.log(pluck(stooges,'name'));

// console.log("isArray :");
// console.log(isArray([1,2,3]));

// console.log("isObject :");
// console.log(isObject({}));
// console.log(isObject(1));

// console.log("isMatch :");
// const stooge = {name : 'moe', age :32}
// console.log(isMatch(stooge,{age : 32}));


// console.log(isUndefined());


// console.log("isNull :");
// console.log(isNull(null));
// console.log(isNull(undefined));


// console.log(isRegExp(/moe/));
// console.log(isRegExp("d"));

console.log(isRegExp(/moe/));
console.log(isRegExp("d"));

