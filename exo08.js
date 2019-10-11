module.exports = function intersection(...arrays) {
   
    let newArr = []
    const [first,...rest] = arrays //ou arrays.shift() recupere le premier element et le reste (destructuration)

   

    for (const element of first) {
      
        let present = false
        for (const currentArr of rest ) {
            if (currentArr.includes(element)) {
                present = true;
            }

        }
        if(present){
        newArr.push(element);
        }
    }
    return newArr
}


