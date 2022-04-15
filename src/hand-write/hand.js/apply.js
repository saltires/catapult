Function.prototype._apply = function (that, args) {
  Symbol.APPLY = Symbol()
  that[Symbol.APPLY] = this
  const ret = eval('that[Symbol.APPLY](' + arr + ')')

  Reflect.deleteProperty(that, Symbol.APPLY)
  Reflect.deleteProperty(Symbol, 'APPLY')

  return ret
}

function foo(...args) {
  console.log(this.age + args)
}

const bar = {
  age: 20
}

foo._apply(bar, ['x', { y: 120 }])

/* 
  1.输入promise数组，使用函数包装promise
  2.所有promise进入执行函数, 等待返回promise结果, 
  3.小于限制数的直接执行, 大于的进入等待队列,
  4.监控队列长度和正在运行的promise, 都为0则返回结果, 队列剩余则运行队列头,
  5.promise参数可以作为其他函数参数: Promise((resolve,reject)=>{(resolve)=>{return resolve}})
*/

// 发送 promise
function all(urls) {
  return new Promise((resolve, reject) => {
    urls.forEach(promise => {
      run(url, resolve, reject);
    })
  })
}

const getData = async function(url) {
  return await fetch(url)
}

// 递归运行promise
function run(url, resolve, reject) {
  if (runningNum >= limit) {
    console.log("入队:", url);
    queue.push(url);
    return;
  }
  runningNum++;
  getData(url).then(result => {
    runningNum--;
    results.push(result);
    if (queue.length == 0 && runningNum == 0) {
      return resolve(results);
    }
    if (queue.length) {
      run(queue.shift(), resolve, reject);
    }
  })
}

let promises = []; // 输入
let results = []; // 结果
let limit = 3; // 并发限制
let queue = []; // 等待队列
let runningNum = 0; // 正在运行的

// 输入10个promise
for (let i = 0; i < 10; i++) {
  let promise = function () {
    return new Promise((resolve) => {
      console.log("start", i);
      setTimeout(() => {
        console.log("end", i);
        resolve(i);
      }, 1000);
    })
  };
  promises.push(promise);
}

// 发送10个promise
all(promises).then((data) => {
  console.log(data);
});

