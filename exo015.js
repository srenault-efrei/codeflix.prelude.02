module.exports = function invert(obj) {
    
    // return Object.values(obj)
    let arr = Object.entries(obj);
    let newObject = {}

    

    for(const  [key,value] of arr){
        newObject[value] = key
      
    }
    return newObject
 }
 


 
