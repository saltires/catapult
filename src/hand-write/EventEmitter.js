class EventEmitter {
  constructor() {
    this.events = Object.create(null)
  }

  on(type, cb) {
    this.events[type] = this.events[type] || []
    this.events[type].push(cb)
  }

  emit(type) {
    this.events[type]?.length && this.events[type].forEach(element => {
      element()
    });
  }

  off(type, cb) {
    this.events[type] = this.events[type].filter(item => {
      return item !== cb
    })
  }

  once(type, cb) {
    this.events[type] = this.events[type] || []
    const wrapper = () => {
      cb()
      this.off(type, wrapper)
    }
    this.events[type].push(wrapper)
  }
}

const x = new EventEmitter()

const foo1 = () => {
  console.log('foo1')
}
const foo2 = () => {
  console.log('foo2')
}

x.on('foo', foo1)



x.once('foo', foo2)

// x.off('foo', foo2)

x.emit('foo')
x.emit('foo')
x.emit('foo')
