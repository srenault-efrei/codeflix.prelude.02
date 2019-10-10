module.exports = function has(object, key) {

    let boolean = false;

    for (const [k, value] of Object.entries(object)) {
        if (k == key) {
            boolean = true;
        }

    }

    return boolean;
}
