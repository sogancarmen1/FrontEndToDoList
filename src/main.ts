import { createApp } from "vue";
import "./style.css";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
import HomeView from "./components/HomeView.vue";
import TaskView from "./components/TaskView.vue";
import ListView from "./components/ListView.vue";
import FilesView from "./components/FilesView.vue";
import ProjectviewListe from "./components/ProjectviewListe.vue";
import ProjectviewFile from "./components/ProjectviewFile.vue";

import {
  faUserSecret,
  faUser,
  faBars,
  faCirclePlus,
  faCircleChevronDown,
  faCaretDown,
  faMagnifyingGlass,
  faCircleCheck,
  faHouse,
  faUserGroup,
  faListCheck,
  faEnvelope,
  faCircleInfo,
  faChevronDown,
  faPlus,
  faChevronRight,
  faCaretRight,
  faCircleUser,
  faFilter,
  faSort,
  faCalendar,
  faXmark,
  faPenNib,
  faPaperclip,
  faEllipsis,
  faCheck,
  faLock,
  faDiagramProject,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserSecret,
  faUser,
  faBars,
  faCirclePlus,
  faCircleChevronDown,
  faCaretDown,
  faMagnifyingGlass,
  faCircleCheck,
  faHouse,
  faUserGroup,
  faListCheck,
  faEnvelope,
  faCircleInfo,
  faChevronDown,
  faPlus,
  faChevronRight,
  faCaretRight,
  faCircleUser,
  faFilter,
  faSort,
  faCalendar,
  faXmark,
  faPenNib,
  faPaperclip,
  faEllipsis,
  faCheck,
  faLock,
  faDiagramProject,
  faListUl
);

const routes = [
  {
    path: "/home",
    meta: {
      requiresAuth: true,
    },
    component: HomeView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TaskView,
  },
  {
    path: "/tasks/list",
    meta: {
      requiresAuth: true,
    },
    name: "list",
    component: ListView,
  },
  {
    path: "/tasks/file",
    name: "file",
    component: FilesView,
  },
  {
    path: "/project/:id/list",
    component: ProjectviewListe,
  },
  {
    path: "/project/:id/files",
    component: ProjectviewFile,
  },
  { path: "/", name: "Login", component: FormPageConnexion },
  { path: "/register", component: FormPageInscription },
  // {
  //   path: "/home",
  //   name: "Dashboard",
  //   component: HomePage,
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
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
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(ToastPlugin);
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
