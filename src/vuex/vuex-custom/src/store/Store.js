let _vue = null

class Store {
  constructor(options) {
    const { state, mutations, actions, getters } = options

    this.state = Vue.observable(state)
    this.getters = Object.create(null)

    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, getter[key](this.state))
    })
  }

  static install(Vue) {
    _vue = Vue
    Vue.mixins({
      beforeCreate() {
        this.$store = this.$options.store
      }
    })
  }

  commit(type, value) {
    
  }

  dispatch() {

  }


}

