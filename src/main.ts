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
import { isAuthenticated } from "./utils/utils";

const routes = [
  { path: "/", name: "Login", component: FormPageConnexion },
  { path: "/register", component: FormPageInscription },
  {
    path: "/home",
    name: "Dashboard",
    component: HomePage,
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

// router.beforeEach(async (to, from, next) => {
//   if (isAuthenticated() == false && to.name !== "Login") next({ name: "Login" });
//   else {
//     next({ name: "Dashboard" });
//   }
// });

export const app = createApp(App);
app.use(router);
app.mount("#app");
