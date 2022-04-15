const numer = -1987654321.23

function addSeparator(number) {
  number = number + ''
  const arr = number.split('.')
  let integer = arr[0]
  const flright = arr.length > 1 ? arr[1] : ''
  const reg = /(\d+)(\d{3})/

  while (reg.test(integer)) {
    integer = integer.replace(reg, '$1,$2')
  }

  const right = flright ? '.' + flright : ''
  return integer + right
}

console.log(addSeparator(numer))