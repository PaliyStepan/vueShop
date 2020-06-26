<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
  import Wrapper from "./components/wrapper";
  export default {
    name: 'app',
    components: {
      Wrapper
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
