function deepClone(obj) {
  if (typeof obj !== 'object') return obj

  let newObj = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }

  return newObj
}


const a = {
  x: '123',
  b: {
    name: 'knight'
  },
  c: () => console.log(123)
}

console.log(deepClone(a))