Promise._all = function(args) {
  if (!Array.isArray(args)) return

  let count = 0
  let ret = []

  return new Promise((resolve, reject) => {
    if (args.length === 0) return Promise.resolve([])

    for (let i = 0; i < args.length; i++) {
      let item = args[i] instanceof Promise ? args[i] : Promise.resolve(args[i])
      item.then(data => {
        ret[i] = data
        if (++count === args.length) {
          resolve(ret)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}