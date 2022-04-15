// function unique(lists) {
//   return lists.filter((item, index) => {
//     return lists.indexOf(item) === index
//   })
// }

function unique(lists) {
  const ret = [lists.shift()]

  for (let i = 0; i < lists.length; i++) {
    let flag = false

    for (let j = 0; j < ret.length; j++) {
      if (ret[j] === lists[i]) flag = true
    }

    if (flag === false) {
      ret.push(lists[i])
    }
  }

  return ret
}

const arr = [1,2,3,2,3]

console.log(unique(arr))