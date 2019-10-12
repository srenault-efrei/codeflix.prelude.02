function pick(obj, ...options) {
    
    const [firstOpts] = options
    const newObj = {}
  
    if (typeof firstOpts === 'function') {
      const callback = firstOpts
  
      // with callback
      for (const item of Object.entries(obj)) {
        const [key, value] = item
        if (callback(value, key) === true) {
          newObj[key] = obj[key]
        }
      }
    } else {
      // with keys
      for (const key of options) {
        if (obj[key] !== undefined) {
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
  }
  
  const user = {
    name: 'Joker',
    age: 18,
    userId: 1337,
  }
  
  console.log(pick(user, 'name', 'age'))
  console.log(
    pick(user, function(value, key) {
      return Number.isInteger(value) // retourne  vrai si la valeur est un nombre 
    })
  )
  
//   const arr = [1, 2, 3, 4, 5, 6]
  
//   arr.forEach(function (item) {
//     console.log(item)
//   })