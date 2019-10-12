module.exports = function mapBis(list, iterableCb) {

let number = '';
arr = [];

    for(const [key,value] of  Object.entries(list)){
        number = iterableCb(value);
        arr.push(number)

    }
    return arr;
}
