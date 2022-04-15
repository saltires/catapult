function throttle(func, delay) {
  let temeout = null

  return function(...args) {
    if (!timeout) {
      timeout = setTimeout((args) => {
        func.apply(func, args)
        clearTimeout(timeout)
        timeout = null
      })
    }
  }
}