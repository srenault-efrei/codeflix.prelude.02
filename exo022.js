module.exports = function pluck(list, propertyName) {

    let arr = []

    for (let i = 0; i < list.length; i++) {
        for (const [key, value] of Object.entries(list[i])) {
            if (key == propertyName) {
                arr.push(value);
            }
        }
    }
    return arr;

}


