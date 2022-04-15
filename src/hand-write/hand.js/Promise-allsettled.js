Promise._allSettled = function(promises) {
  if (!Reflect.has(promises, Symbol.iterator)) throw new Error('argument0 must iterable')
  let count = 0
  const ret = []

  return new Promise((resolve) => {
    for (let i = 0; i < promises.length; i++) {
      const pro = promises[i] instanceof Promise ? promises[i] : Promise.resolve(promises[i])

      pro.then(data => {
        ret[i] = {
          status: 'resolved',
          value: data
        }
      }).catch(err => {
        ret[i] = {
          status: 'rejected',
          value: err
        }
      }).finally(() => {
        if (++count === promises.length) {
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

Promise._allSettled([x, y, z]).then(res => {
  console.log(res)
}).catch(err => console.log(err))