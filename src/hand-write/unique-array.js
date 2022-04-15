// function un(arr) {
//   if (!arr || arr?.length === 0) return
  
//   const ret = arr.filter((item, index) => {
//     return arr.indexOf(item) == index
//   })

//   return ret
// }

function un(arr) {
  if (!arr || arr?.length === 0) return

  const ret = []

  for (let i = 0; i < arr.length; i++) {
   if (ret.length === 0) {
    ret.push(arr[i])
   } else {
    for (let j = 0; j < ret.length; j++) {
      if (!ret.includes(arr[i])) {
        ret.push(arr[i])
      }
    }
   }
  }

  return ret
}

const arr = [1,2,3,3,4,4]

console.log(un(arr))