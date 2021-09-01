import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    app_name: 'My ToDo List',
    tasks: [
      {
        text: 'Task 1',
        done: true
      },
      {
        text: 'Task 2',
        done: true
      },
      {
        text: 'Task 3',
        done: false
      },
      {
        text: 'Task 4',
        done: true
      },
      {
        text: 'Task 5',
        done: false
      }
    ]
  },
  getters: {

  },
  mutations: {
    add_task (state, text) {
      state.tasks.push({
        text,
        done: false
      })
    },
    delete_task (state, index) {
      state.tasks.splice(index, 1)
    },
    edit_task (state, params) {
      state.tasks[params.index].text = params.text
    },
    edit_app_name (state, app_name) {
      state.app_name = app_name
    }
  },
  actions: {
  
  }

})