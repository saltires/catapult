<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ count }}</p>
    <p>getters: {{countlag10}}</p>
    <button @click="increase(1)">增加</button>
    <button @click="decrease(1)">减小</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapState({  
      count: state => state.count
    }),
    ...mapGetters({
      countlag10: 'countlag10'
    })
  },
  methods: {
    ...mapMutations(['increase']),
    ...mapActions(['decrease'])
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
