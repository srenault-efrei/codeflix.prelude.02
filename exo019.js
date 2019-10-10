module.exports = function size(list) {

    if (list.length == undefined) {

        return Object.entries(list).length
    } else {
        return list.length
    }



}
