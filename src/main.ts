import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import FormPageConnexion from "./components/FormPageConnexion.vue";
import FormPageInscription from "./components/FormPageInscription.vue";
import HomePage from "./components/HomePage.vue";
import AddTaskPage from "./components/AddTaskPage.vue";
import VoirProfil from "./components/VoirProfil.vue";
import UpdateTask from "./components/UpdateTask.vue";
import EssaiOp from "./components/EssaiOp.vue";
import SettingsPage from "./components/SettingsPage.vue";
import { createPinia } from "pinia";
import { useUserStore } from "./stores/user";

const routes = [
  { path: "/", name: "Login", component: FormPageConnexion },
  { path: "/register", component: FormPageInscription },
  {
    path: "/home",
    name: "Dashboard",
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/addtask", component: AddTaskPage },
  { path: "/showprofil", component: VoirProfil },
  { path: "/updatetask", component: UpdateTask },
  { path: "/essai", component: EssaiOp },
  { path: "/settings", component: SettingsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!userStore.userData) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});
