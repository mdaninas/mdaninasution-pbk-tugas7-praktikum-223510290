<template>
  <div class="hero">
    <div class="q-pa-md example-column-row-width px" style="height: 100%">
      <div class="column" style="height: 100%; width: 40%;">
        <div class="col-2 red">
          <div class="top">
            <p>OUR LIST</p>
            <span class="input">
              <input v-model="newTask" placeholder="Tambah tugas baru" />
              <button @click="addNewTask">Tambah</button>
            </span>
          </div>
        </div>
        <div class="col blue">
          <ul class="list">
            <li v-for="task in TaskStore.tasks" :key="task.id" class="task-item">
              <label>
                <input type="checkbox" :checked="task.completed" @change="toggleCompletion(task.id)" />
                <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
                  {{ task.judul }}
                </span>
              </label>
              <button @click="removeTask(task.id)">Hapus</button>
            </li>
          </ul>
          <div class="last">
            <p>Jumlah tugas yang belum selesai: {{ TaskStore.incompleteTasksCount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from './stores/TaskStore'

const TaskStore = useTaskStore()
const newTask = ref('')

const addNewTask = () => {
  if (newTask.value.trim()) {
    TaskStore.addTask(newTask.value)
    newTask.value = ''
  }
}

const removeTask = (id) => {
  TaskStore.removeTask(id)
}

const toggleCompletion = (id) => {
  TaskStore.toggleTaskCompletion(id)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  

.hero {
  background-image: url(./assets/bg.gif);
  height: 100vh;
}

.red {
  background-color: rgba(240, 255, 255, 0.278);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  display: flex;
  justify-content: center;
  color: rgb(66, 46, 46);
  font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}
span>input{
  scale: 1.5;
}
span>button {
  scale: 1.5;
}
.red>div>p{
  font-size: 45px;
  margin-bottom: 0;
}

.last {
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(240, 255, 255, 0.278);
  border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    font-family: "Outfit", sans-serif;
      font-optical-sizing: auto;
      color: rgb(37, 180, 109);
      font-size: 30px;
      font-style: normal;
}

.blue {

  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.px {
  display: flex;
  justify-content: center;
}

.input {
  display: flex;
  gap: 80px;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

input[type="checkbox"] {
  margin-right: 20px;
  scale: 2.5;
}

.list {
  background-color: rgba(0, 0, 0, 0.737);
  height: 80%;
  padding-top: 10px;
  padding-left: 20px;
  overflow: auto;
  padding-right: 20px;
  color: wheat;
  font-size: 35px;
  font-family: "Abel", sans-serif;
    font-weight: 700;
    font-style: normal;
}

li {
  list-style-type: none;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.task-item label {
  display: flex;
  align-items: center;
}
</style>
