class Dep {
  constructor() {
    this.deps = []
  }

  addSub(dep) {
    if (dep?.update && typeof dep.update === 'function') {
      this.deps.push(dep)
    }
  }

  notify() {
    this.deps.forEach(item => {
      item.update()
    })
  }
}

class Watcher {
  update() {
    console.log(this)
  }
}

const foo = new Dep()

const w1 = new Watcher()
const w2 = new Watcher()

foo.addSub(w1)
foo.addSub(w2)

foo.notify()