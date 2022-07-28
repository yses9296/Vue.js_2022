<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3" >
        <h1 class="text-center mb-4">Todo Application</h1>
        <input type="text" class="form-control" v-model="userInput">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        userInput: ''
      };
    },
    component: {

    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
