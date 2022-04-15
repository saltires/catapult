const numer = -1987654321.23

function qian(num) {
  const reg = /(\d+)(\d{3})/
  const list = String(num).split('.')

  let [integer, fright = ''] = list

  while (reg.test(integer)) {
    integer = integer.replace(reg, '$1,$2')
  }

  return integer + '.' + fright
}

qian(numer)