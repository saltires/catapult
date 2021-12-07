let _vue = null

export default class Store {
  constructor(options) {
    const { state = {}, mutations = {}, actions = {}, getters = {} } = options

    this.state = _vue.observable(state)
    this.getters = Object.create(null)

    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })

    this._mutations = mutations
    this._actions = actions
  }

  static install(Vue) {
    _vue = Vue
    Vue.mixin({
      beforeCreate() {
        if (this.$options.store) {
          _vue.prototype.$store = this.$options.store
        }
      }
    })
  }

  commit(type, payload) {
    this._mutations[type](this.state, payload)
  }

  dispatch(type, payload) {
    this._actions[type](this, payload)
  }
}

