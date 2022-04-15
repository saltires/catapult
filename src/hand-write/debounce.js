function debounce(func, delay) {
  let timeout
  return function(...args) {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

function() {
  console.log('hello')
}