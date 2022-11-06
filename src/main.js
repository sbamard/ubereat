import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import TheHome from './components/TheHome.vue' 
import TheRestaurant from './pages/TheRestaurant.vue' 

const routes = [
    {path: '/', component: TheHome},
    {path: '/TheRestaurant', component: TheRestaurant}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const vueApp = createApp(App)

vueApp.use(router)

vueApp.mount('#app')

