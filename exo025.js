module.exports = function isMatch(object, properties) {


    let boolean = false;
    for (const [key, value] of Object.entries(properties)) {
        if (object.hasOwnProperty(key) && value == object[key]) {
            boolean = true
        }
    }
    return boolean

}

