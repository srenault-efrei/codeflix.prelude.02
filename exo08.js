module.exports = function intersection(...arrays) {
   
    let newArr = []
    const [first,...rest] = arrays //ou arrays.shift() recupere le premier element et le reste

    for (const elt of first) {
        let present = true
        for (const currentArr of rest ) {
            if (currentArr.includes(elt)) {
                present = false;
            }

        }
        if(present){
        newArr.push(elt);
        }
    }
    return newArr
}


