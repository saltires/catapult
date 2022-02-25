import Vue from 'vue'

let _Vue = null

export default class VueRouter {
  static install(Vue) {
    _Vue = Vue

    if (VueRouter.install.installed) {
      return
    }

    VueRouter.install.installed = true

    _Vue.mixin({
      beforeCreate() {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$router.init()
        }
      }
    })
  }

  constructor(options) {
    this.options = options
    this.data = _Vue.observable({
      current: '/'
    })
    this.routerMap = {}
  }

  init() {
    this.createRouterMap()
    this.initComponents()
    this.initEvent()
  }

  createRouterMap() {
    this.options.routes.forEach(route => {
      this.routerMap[route.path] = route.component
    })
  }

  initComponents() {
    const self = this

    Vue.component('router-link', {
      props: {
        to: String
      },
      render(h) {
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            click: this.clickHandler
          }
        }, [this.$slots.default])
      },
      methods: {
        clickHandler(e) {
          try {
            history.pushState({}, '', this.to)
            this.$router.data.current = this.to
            e.preventDefault()
          } catch (error) {
            alert(error)
          }
        }
      }
    })

    Vue.component('router-view', {
      render(h) {
        const targetComponent = self.routerMap[self.data.current]
        return h(targetComponent)
      }
    })
  }

  initEvent() {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}