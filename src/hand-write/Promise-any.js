Promise._any = function(args) {
  args = Array.isArray(args) ? args : Array.from(args)
  let count = 0
  const ret = []

  return new Promise((resolve, reject) => {
    for (let i = 0; i < args.length; i++) {
      let item = args[i] instanceof Promise ? args[i] : Promise.resolve(args[i])
      item.then((res) => [
        resolve(res)
      ]).catch(err => {
        ret[i] = err
        if (++count === args.length) {
          reject(ret)
        }
      })
    }
  })
}

const x = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('1'))
  }, 1000)
})

const y = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('2'))
  }, 2000)
})

const z = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('3'))
  }, 3000)
})

Promise._any([x, y, z]).then(res => {
  console.log(res)
}).catch(err => console.log(err))