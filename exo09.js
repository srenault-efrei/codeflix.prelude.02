module.exports = function difference(...arrays) {

    let [first, ...rest] = arrays
    let arr = []



    for (const firstEl of first) {
        
        let present = false
        for (const arrayRest of rest) {
            if (arrayRest.includes(firstEl) == false) {
                present = true
            }
        }
        if (present) {
            arr.push(firstEl)
        }
    }
   

    return arr;
}