<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $store.state.count }}</p>
    <p>getters: {{$store.getters.countlag10}}</p>
    <button @click="increase">增加</button>
    <button @click="decrease">减小</button>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    
  },
  methods: {
    increase() {
      this.$store.commit('increase', 1)
    },
    decrease() {
      this.$store.dispatch('decrease', 1)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
