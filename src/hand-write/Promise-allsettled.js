Promise._allsettled = function(args) {
  args = Array.isArray(args) ? args : Array.from(args)
  let count = 0
  const ret = []

  return new Promise((resolve, reject) => {
    for (let i = 0; i < args.length; i++) {
      let item = args[i] instanceof Promise ? args[i] : Promise.resolve(args[i])
      item.then(res => {
        ret[i] = {
          status: 'success',
          value: res
        }
      }).catch(err => {
        ret[i] = {
          status: 'failed',
          value: err
        }
      }).finally(() => {
        if (++count === args.length) {
          resolve(ret)
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
    resolve(3)
  }, 3000)
})

Promise._allsettled([x, y, z]).then(res => {
  console.log(res)
}).catch(err => console.log(err))

