Promise._all = function(args) {
  args = args instanceof Array ? args : Array.from(args)
  let count = 0
  const ret = []

  return new Promise((resolve, reject) => {
    if (args.length === 0) {
      resolve([])
    } else {
      for (let i = 0; i < args.length; i++) {
        const item = args[i] instanceof Promise ? args[i] : Promise.resolve(args[i])
        item.then(res => {
          ret[i] = res
          if (++count === args.length) {
            resolve(ret)
          }
        }).catch(err => {
          reject(err)
        })
      }
    }
  })
}

const x = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
})

const y = 2

const z = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 1000)
})

const foo = [y, z, x]

Promise._all(foo).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

