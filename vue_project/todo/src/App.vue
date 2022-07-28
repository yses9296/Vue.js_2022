<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3" >
        <h1 class="text-center mb-4">Todo Application</h1>
        <input type="text" class="form-control mb-4" v-model="userInput" @keyup.enter="addNewTodo">

        <div class="list-group">
          <template v-for="todo in todoList.filter(todo => todo.state === 'active')" :key="todo">
            <button class="list-group-item text-left"  @click="toggleTodoState(todo)">
              {{ todo.label }}
            </button>
          </template>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        userInput: '',
        todoList: []
      };
    },
    methods: {
      addNewTodo(){
        this.todoList.push({
          label: this.userInput,
          state: 'active'
        });
        this.userInput = '';
      },
      toggleTodoState(todo){
        todo.state = todo.state == 'active' ? 'done' : 'active';
      }
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
