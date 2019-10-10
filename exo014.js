module.exports = function pairs(obj) {
    
    // return Object.values(obj)
    let arr = [];

    for (const [key,value] of Object.entries(obj)){
        let tab = [key,value]
       arr.push(tab)
    }
 
    return arr
 }
 
 
