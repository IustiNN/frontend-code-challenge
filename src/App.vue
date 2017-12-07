<template>
  <div id="app">
    <div class="ui active inverted dimmer" v-show="loading">
      <div class="ui loader"></div>
    </div>
    <div class="ui container"><router-view/></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    computed: mapGetters(['loading'])
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
