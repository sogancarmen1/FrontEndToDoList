import { ref } from "vue";
import { isNotSelected } from "../tasks";
export const stores = ref([
  {
    id: 1,
    nameIcon: "fa-house",
    textWithIcon: "Home",
    title: "Home",
    nameRoute: "/home",
    isSelectedAccueil: false,
  },
  {
    id: 2,
    nameIcon: "fa-circle-check",
    textWithIcon: "My tasks",
    title: "My tasks",
    nameRoute: `/tasks${isNotSelected ? "/list" : "/file"}`,
    isSelectedAccueil: false,
  },
]);

export function path(value: Number) {
  return `/project/${value}/list`;
}

// import { projects } from "../ListeTask/ListeTask";

export const projectsAndEquipe = ref([
  {
    id: 1,
    firstNameIcon: "fa-caret-down",
    secondeFormFirstNameIcon: "fa-caret-right",
    secondNameIcon: "fa-chevron-down",
    title: "Projects",
    thirdNameIcon: "fa-plus",
    fourNameIcon: "fa-list-check",
    isSelect: false,
    showValue: true,
    listOfProject: ref<any[]>([]),
  },
]);

export const footerContent = ref([
  {
    firstNameIcon: "fa-envelope",
    title: "Invite colleagues",
  },
  {
    firstNameIcon: "fa-circle-info",
    title: "Information",
  },
]);

export const iconAndText = [
  {
    id: 1,
    icon: "fa-user-plus",
    text: "Add collaborator",
  },
];

export const iconAndTextPlus = [
  {
    id: 1,
    icon: "fa-diagram-project",
    text: "Nouveau projet",
  },
  {
    id: 2,
    icon: "fa-user-plus",
    text: "Add collaborator",
  },
];

export const showModalProject = ref(false);
export const showModalProjectPlus = ref(false);

export function toggleAndHidden() {
  showModalProjectPlus.value = !showModalProjectPlus.value;
  showModalProject.value = false;
}

export function toggleAndHiddenOther() {
  showModalProject.value = !showModalProject.value;
  showModalProjectPlus.value = false;
}
