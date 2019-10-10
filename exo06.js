module.exports = function without(array,...values) {
    
    let arr1 = []
    // values.forEach(function (el) {
    //     while (array.indexOf(el) != -1) {
    //         array.splice(array.indexOf(el), 1)
    //     }
    // });
    // return array;

    for(const v of array){
        if (!values.includes(v)){
            arr1.push(v)
        }
    }
    return arr1;
}


