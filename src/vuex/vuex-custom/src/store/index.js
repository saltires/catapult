import Vuex from './Store'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex({
  state: {
    count: 0
  },
  mutations: {
    increase(state, value) {
      state.count += value
    }
  },
  actions: {
    decrease(store, value) {
      axios.get('https://yesno.wtf/api/').then(({ data }) => {
        if (data.answer === 'yes') {
          store.commit('increase', -value)
        }
      })
    }
  },
  getters: {
    countlag10: state => state.count > 10 ? 10 : state.count
  }
})