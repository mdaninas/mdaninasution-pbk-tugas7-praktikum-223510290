import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// Buat satu instance createApp
const app = createApp(App)

// Gunakan Pinia sebagai state management
app.use(createPinia())

// Gunakan Quasar framework
app.use(Quasar, {
  plugins: {}, 
})

// Mount aplikasi ke elemen dengan ID 'app'
app.mount('#app')
