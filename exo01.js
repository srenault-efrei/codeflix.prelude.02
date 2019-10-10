module.exports = function first (array, n=1){
    // return array.slice(0,n);
    return n == 1 ? array[0] : array.splice(0,n);
}