module.exports = function omit(object, ...keys) {

    const [paramKey] = keys // recupere le 1er element 
    let arr = {}
    if (typeof paramKey == 'function') { // verifie si le 1er element est une function
    
        // methode callBack 
        for(const [key,value] of Object.entries(object)){ // destructuration de l'object
           
         if (paramKey(value,key,object) === false){ // appel de la function avec les para
             arr[key] = object[key] // on ajoute les el dans l'object 
         }
            
        }
    }
    else {
        // methode simple avec un string 

        for (const [key, value] of Object.entries(object)) {
            if (key != paramKey) {
                arr[key] = object[key];
            }
        }
    }

    return arr
}

