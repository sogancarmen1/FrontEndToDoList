<template>
  <div
    v-if="taskStores.revele"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <AddTaskOnProjectPage></AddTaskOnProjectPage>
  </div>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <AssignTaskPage></AssignTaskPage>
  </div>
  <ProjectView>
    <table class="w-full my-8 bg-white">
      <tr class="">
        <td
          @mouseover="taskIsSelected = true"
          @mouseleave="taskIsSelected = false"
          class="pl-2 py-2 pr-52 border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <span>Nom de la tâche</span>
          <font-awesome-icon
            v-show="taskIsSelected"
            icon="fa-chevron-down"
            class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
          ></font-awesome-icon>
        </td>
        <td
          @mouseover="dateIsSelected = true"
          @mouseleave="dateIsSelected = false"
          class="pl-2 pr-20 border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <span>Date de fin</span>
          <font-awesome-icon
            v-show="dateIsSelected"
            icon="fa-chevron-down"
            class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
          ></font-awesome-icon>
        </td>
        <td
          @mouseover="priorityIsSelected = true"
          @mouseleave="priorityIsSelected = false"
          class="pl-2 pr-14 border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <span>Priorité</span>
          <font-awesome-icon
            v-show="priorityIsSelected"
            icon="fa-chevron-down"
            class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
          ></font-awesome-icon>
        </td>
        <td
          @mouseover="collaboratorIsSelected = true"
          @mouseleave="collaboratorIsSelected = false"
          class="pl-2 pr-20 border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <span>Collaborateur</span>
          <font-awesome-icon
            v-show="collaboratorIsSelected"
            icon="fa-chevron-down"
            class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
          ></font-awesome-icon>
        </td>
        <td
          @mouseover="statusIsSelected = true"
          @mouseleave="statusIsSelected = false"
          class="pl-2 pr-20 border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <span>Status</span>
          <font-awesome-icon
            v-show="statusIsSelected"
            icon="fa-chevron-down"
            class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
          ></font-awesome-icon>
        </td>
      </tr>
    </table>
    <button @click="taskStores.toggleRevele">
      <AddtaskButton
        classProp="bg-blue-600 text-white hover:bg-blue-800"
        class="m-4"
      >
      </AddtaskButton>
    </button>
    <div class="flex absolute right-[28px] top-[245px]">
      <div class="px-4 cursor-pointer">
        <font-awesome-icon
          class="text-sm px-1"
          icon="fa-filter"
        ></font-awesome-icon>
        <span class="text-sm font-zen">Filter</span>
      </div>
      <div class="px-4 cursor-pointer">
        <font-awesome-icon
          class="text-sm px-1"
          icon="fa-sort"
        ></font-awesome-icon>
        <span class="text-sm font-zen">Sort</span>
      </div>
    </div>
    <ListeTaskInProject></ListeTaskInProject>
  </ProjectView>
</template>

<script setup lang="ts">
//  projectIsSelected,
import ListeTaskInProject from "./ListeTaskInProject.vue";
import {
  taskIsSelected,
  dateIsSelected,
  priorityIsSelected,
  collaboratorIsSelected,
  statusIsSelected,
} from "./EnteteTableau/EnteteTableau";
import ProjectView from "./ProjectView.vue";
import { useTaskOnProjectStore } from "@/stores/user";
const taskStores = useTaskOnProjectStore();
import AddtaskButton from "./AddButton/AddtaskButton.vue";
import AddTaskOnProjectPage from "./AddTaskOnProjectPage.vue";
// import AddCollaborator from "./AddCollaborator.vue";
import AssignTaskPage from "./AssigntaskPage.vue";
</script>
