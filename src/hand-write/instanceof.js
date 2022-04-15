function _instanceof(obj, con) {
  let left = Object.getPrototypeOf(obj)
  let right = con.prototype

  while (true) {
    if (left === null || !left) {
      return false
    }

    if (left === right) {
      return true
    }

    left =  Object.getPrototypeOf(left)
  }
}

console.log(_instanceof([], Function))