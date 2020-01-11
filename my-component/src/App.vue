<template>
  <div id="app">
    <IndexForm></IndexForm>
  </div>
</template>

<script>
import IndexForm from '@/components/form/index.vue'

export default {
  name: 'app',
  components: {
    IndexForm
  }
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
