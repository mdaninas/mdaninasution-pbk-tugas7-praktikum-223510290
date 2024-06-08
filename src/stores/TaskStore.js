import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    nextId: JSON.parse(localStorage.getItem('nextId') || '1')
  }),
  getters: {
    incompleteTasksCount: (state) => {
      return state.tasks.filter(task => !task.completed).length
    }
  },
  actions: {
    addTask(judul) {
      this.tasks.push({ id: this.nextId, judul, completed: false })
      this.nextId++
      this.saveTasks()
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
      this.saveTasks()
    },
    toggleTaskCompletion(id) {
      const task = this.tasks.find(task => task.id === id)
      if (task) {
        task.completed = !task.completed
        this.saveTasks()
      }
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      localStorage.setItem('nextId', JSON.stringify(this.nextId))
    }
  }
})
