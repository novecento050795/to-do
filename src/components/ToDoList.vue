<template>
    <ul>
      <ToDoItem 
        :key="index" 
        v-for="(task, index) in tasks" 
        :task="task"
        :index="index"
      />
      <li 
        v-if="!show_add_task_form" 
        @click="show_add_task_form = true"
        class="add-task-button"
      >
        + add task
      </li>
      <li 
        v-else
      > 
        <textarea class="add-task-textarea" v-model="new_task_text" cols="60" rows="2"></textarea>
        <div>
          <div @click="addTask" class="cursor-pointer task-edit-button">
            Add
          </div>
          <span @click="show_add_task_form = false" class="cursor-pointer task-edit-button">Cancel</span>
        </div>
      </li>
    </ul>
</template>
<script>
import ToDoItem from './ToDoItem.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    ToDoItem
  },
  data () {
    return {
      show_add_task_form: false,
      new_task_text: ''
    }
  },
  methods: {
    ...mapMutations([
      'add_task'
    ]),
    addTask() {
      if (this.new_task_text){
        this.add_task(this.new_task_text)
        this.new_task_text = ''
      } 
    }
  },
  computed: mapState([
    'tasks'
  ])
}
</script>
<style scoped>
  ul {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
  li {
    list-style: none;
    margin-bottom: 15px;    
  }
  .add-task-button {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .add-task-textarea {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    ul {
      width: 80%;
    }
  }
</style>