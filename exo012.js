module.exports = function keys(obj) {
    
    // return Object.values(obj)
    let arr = [];

    for (const [key,value] of Object.entries(obj)){
       arr.push(key)
    }
 
    return arr
 }
 
 
