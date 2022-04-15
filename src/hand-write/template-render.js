var str = 'I am a {job}, Do you like my {book} and {job}'
var data = {
  job: 'teacher',
  book: 'Javascript高级编程',
}

function render(regString, data) {
  const reg = /\{.*?\}/g
  const keys = regString.match(reg).map(item => {
    return item.replace(/(\{)|(\})/g, '')
  })
  
  keys.forEach(item => {
    const temp = `\{${item}\}`
    regString = regString.replace(new RegExp(temp), data[item])
  });

  return regString
}

render(str, data)

