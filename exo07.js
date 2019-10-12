module.exports = function union(...arrays) {


    let newArr = [];
    for(const arr of arrays){
        for( const element of arr ){
            if(newArr.includes(element) == false){
                newArr.push(element)
            }
        }
    }

    return newArr
 }

