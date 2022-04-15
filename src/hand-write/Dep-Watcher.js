class Dep {
  constructor() {
    this.subs = []
  }

  addSub(watcher) {
    watcher.update && typeof watcher.update === 'function' && this.subs.push(watcher)
  }

  notify() {
    this.subs.forEach(item => {
      item.update()
    })
  }
}

class Watcher {
  update() {
    console.log('update')
  }
}

const foo = new Dep()

const w1 = new Watcher()
const w2 = new Watcher()

foo.addSub(w1)
foo.addSub(w2)

foo.notify()