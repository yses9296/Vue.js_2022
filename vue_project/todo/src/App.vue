<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3" >
        <h1 class="text-center mb-4">Todo Application</h1>
        <input type="text" class="form-control mb-4" v-model="userInput" @keyup.enter="addNewTodo">

        <div class="list-group mb-4">
          <template v-for="todo in activeTodoList" :key="todo">
            <Todo_list :label="todo.label" @componentClick="toggleTodoState(todo)"/>
          </template>
        </div>

        <div class="text-right">
          <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">To Do</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">Completed</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">Total</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Todo_list from './components/Todo_list';

  export default {
    name: 'app',
    data() {
      return {
        userInput: '',
        todoList: [],
        currentState: 'active'
      };
    },
    computed: {
      activeTodoList(){
        return this.todoList.filter(todo => this.currentState === 'all' || todo.state === this.currentState);
      }
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
      },
      changeCurrentState(state){
        this.currentState = state;
      }
    },
    components: {
      Todo_list
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
