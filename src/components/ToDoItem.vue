<template>
  <li :class="task.done?'done':'waiting'">
    <div class="task-done-container"v-if="!editor">
      <input class="task-checkbox" type="checkbox" v-model="task.done">
    </div>
    <div class='task-text' v-if="!editor" :class="task.done?'line-throw':''">{{task.text}}</div>
    <div class="editor-container">
      <div class="cursor-pointer" v-if="!editor" @click="editor = true"><img src="../assets/images/edit.png" alt=""></div>
      <div v-else>
        <div>
          <textarea v-model="task_editor" cols="65" rows="2"></textarea>
        </div>
        <div class="cursor-pointer task-edit-button" @click="if (task_editor) {editTask(index, task_editor); editor = false}">Save</div>
        <div class="cursor-pointer task-edit-button" @click="editor = false">Cancel</div>
      </div>
      <div v-if="!editor" class="cursor-pointer" @click="deleteTask(index)"><img src="../assets/images/delete.png" alt=""></div>
    </div>
  </li>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    task: Object,
    index: Number,
  },
  data () {
    return {
      editor: false,
      task_editor: ''
    }
  },
  methods: {
    ...mapMutations([
      'delete_task',
      'edit_task'
    ]),
    deleteTask(index) {
      this.delete_task(index)
    },
    editTask(index, task_editor) {
      if (task_editor) {
        this.edit_task({index, text: task_editor})
      }
    }
  }
}
</script>
<style scoped>
  .done {
    background-color:green
  }
  .waiting {
    background-color: cornflowerblue;
  }
  li {
    border-radius: 15px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border: 3px solid darkseagreen;
    align-items: center;
  }
  .task-checkbox {
    transform: scale(2);
    cursor: pointer;
  }
  .line-throw {
    text-decoration: line-through;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .editor-container{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media only screen and (max-width: 600px) {
    img {
      transform: scale(0.5);
    }
    .task-done-container {
      margin-right: 10px;
    }
    .editor-container, textarea {
      width: 100%;
    }
    .task-text {
      width: 100%;
    }
  }

</style>