function throttle(func, delay) {
  let timeout
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(this, args)
        clearTimeout(timeout)
        timeout = null
      }, delay)
    }
  }
}