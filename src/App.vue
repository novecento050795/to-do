<template>
  <div id="app">
    <header>
      <template v-if="!editor">
        <h1>{{app_name}}</h1>
        <div @click="editor = true" class="edit-app-name-button cursor-pointer"><img src="./assets/images/edit.png" alt=""></div>
      </template>
      <div v-else>
        <div>
          <input type="text" v-model="new_app_name">
        </div>
        <div @click="saveAppName" class="cursor-pointer task-edit-button">Save</div>
        <div @click="editor = false" class="cursor-pointer task-edit-button">Cancel</div>
      </div>
    </header>
    <main>
      <ToDoList />
    </main>
    <footer></footer>
  </div>
</template>
<script>
import ToDoList from './components/ToDoList'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    ToDoList
  },
  data () {
    return {
      editor: false,
      new_app_name: ''
    }
  },
  computed: mapState([
    'app_name'
  ]),
  methods: {
    ...mapMutations([
      'edit_app_name'
    ]),
    saveAppName() {
      if (this.new_app_name) {
        this.edit_app_name(this.new_app_name)
        this.editor = false
      }
    }
  }
}
</script>

<style>
  body {
    height: 100vh;
  }
  body {
    margin: 0;
  }
  #app {
    height: 100%;
  }
  header {
    z-index: 9999999999;
    display: flex;
    justify-content: center;
    background-color: darkseagreen;
    height: 10%;
    align-items: center;
    font-size: 2rem;
  }
  main {
    padding-top: 3rem;
    display: flex;
    height: 80%;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(#2193b0,#6dd5ed);
    overflow: scroll;
  }
  footer {
    background-color: darkseagreen;
    height: 10%;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  h1 {
    margin-right: 1rem;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .task-edit-button {
    padding: 3px 5px;
    border-radius: 5px;
    background-color:lightblue;
    margin-bottom: 5px;
    text-align: center;
    display: inline-block;
    width: 10rem;
  }
  .task-edit-button:hover {
    background-color:khaki;
  }
  @media only screen and (max-width: 600px) {
    main {
      padding-bottom: 10rem;
    }
    header {
      position: fixed;
      width: 100%;
      display: flex;
    }
    .task-edit-button {
      padding: 3px;
      border-radius: 5px;
      text-align: center;
      width: 5rem;
      font-size: 1rem;
    }
  }
</style>
