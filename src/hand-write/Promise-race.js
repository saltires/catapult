Promise._race = function(args) {
  args = args instanceof Array ? args : Array.from(args)

  return new Promise((resolve, reject) => {
    if (args.length === 0) {
      resolve(null)
    } else {
      for (let i = 0; i < args.length; i++) {
        const item = args[i] instanceof Promise ? args[i] : Promise.resolve(args[i])
        item.then(data => {
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      }
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
    resolve(2)
  }, 2000)
})

const z = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})

const foo = [y, z, x]

Promise._race(foo).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})