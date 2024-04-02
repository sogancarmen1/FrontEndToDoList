import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from 'vue-router';
import FormPageConnexion from './components/FormPageConnexion.vue';
import FormPageInscription from './components/FormPageInscription.vue';
import HomePage from './components/HomePage.vue';
import AddTaskPage from "./components/AddTaskPage.vue";
import VoirProfil from "./components/VoirProfil.vue";
import UpdateTask from "./components/UpdateTask.vue";
import EssaiOp from "./components/EssaiOp.vue";

const routes = [
    { path: '/', component: FormPageConnexion },
    { path: '/register', component: FormPageInscription },
    { path: '/home', component: HomePage },
    { path: '/addtask', component: AddTaskPage },
    { path: '/showprofil', component: VoirProfil },
    { path: '/updatetask', component: UpdateTask },
    { path: '/essai', component: EssaiOp },
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export const app = createApp(App)
app.use(router)
app.mount('#app')
