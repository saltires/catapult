const str = "I am an {job}, I likes {lang}"
const data = {
  lang: 'javascript',
  job: 'developer'
}

function render(str, data) {
  if (!str || !data) return

  const reg = /\{(.*?)\}/g
  const keys = str.matchAll(reg)
  
  for (let k of keys) {
    const [keyReg, key] = k
    str = str.replace(new RegExp(keyReg), data[key])
  }

  return str
}

console.log(render(str, data));