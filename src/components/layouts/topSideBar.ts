import { ref } from "vue";
import { showModalProject, showModalProjectPlus } from "../SideBar/sideBar";

export const isSidebarVisible = ref(true);

export function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
}

export function toggleModalOfProjetAndPlus() {
  showModalProject.value = false;
  showModalProjectPlus.value = false;
}

export function toggleModalOfProjetAndPlusInSideBar() {
  if (showModalProject.value == true || showModalProjectPlus.value == true) {
    showModalProject.value = false;
    showModalProjectPlus.value = false;
  }
}
