import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from 'vue-router';
import FormPageConnexion from './components/FormPageConnexion.vue';
import FormPageInscription from './components/FormPageInscription.vue';
import HomePage from './components/HomePage.vue';

const routes = [
    { path: '/login', component: FormPageConnexion },
    { path: '/register', component: FormPageInscription },
    { path: '/home', component: HomePage }
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
