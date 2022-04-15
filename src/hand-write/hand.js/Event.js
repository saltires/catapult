class EventEmitter {
  constructor() {
    this.map = {}
  }

  $on(type, cb) {
    this.map[type] = this.map[type] || []
    this.map[type].push(cb)
  }

  $off(type, cb) {
    if (this.map[type]?.length) {
      this.map[type] = this.map[type].filter(item => {
        return item !== cb
      })
    }
  }

  $emit(type) {
    this.map[type]?.length && this.map[type].forEach(cb => {
      cb()
    })
  }

  $once(type, cb) {
    this.map[type] = this.map[type] || []
    const wrapper = (...args) => {
      cb(...args)
      this.$off(type, wrapper)
    }
    this.map[type].push(wrapper)
  }
}