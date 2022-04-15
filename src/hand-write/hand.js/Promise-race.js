Promise._race = function(promises) {
  if (!Reflect.has(promises, Symbol.iterator)) throw new Error('argument0 must iterable!')
  let count = 0
  const ret = []

  return new Promise((resolve, reject) => {
    if (!promises?.length) return Promise.resolve([])

    for (let i = 0; i < promises.length; i++) {
      const pro = promises[i] instanceof Promise ? promises[i] : Promise.resolve(promises[i])

      pro.then(data => {
        resolve(data)
      }).catch(err => {
        ret[i] = err
        if (++count === promises.length) {
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

const foo = [y, z, x]

Promise._race(foo).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})