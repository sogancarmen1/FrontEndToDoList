<template>
  <div
    v-if="taskStores.revele"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <AddTaskOnProjectPage></AddTaskOnProjectPage>
  </div>
  <div
    v-if="assignStores.revele"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <AssignTaskPage></AssignTaskPage>
  </div>
  <ProjectView>
    <button @click="taskStores.toggleRevele">
      <AddtaskButton
        classProp="bg-blue-600 text-white hover:bg-blue-800"
        class="m-4"
      >
      </AddtaskButton>
    </button>
    <div class="flex absolute right-[28px] top-[150px]">
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
    <table class="w-full my-4 bg-white">
      <tr>
        <td
          class="table-cell-task border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <div class="flex items-center">
            <span class="">Task name</span>
            <font-awesome-icon
              v-show="taskIsSelected"
              icon="fa-chevron-down"
              class="mx-2 rounded text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
            ></font-awesome-icon>
          </div>
        </td>
        <!-- Répétez pour les autres colonnes -->
        <td
          class="table-cell-due-date border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <div class="flex items-center">
            <span class="">Due Date</span>
            <font-awesome-icon
              v-show="taskIsSelected"
              icon="fa-chevron-down"
              class="mx-2 rounded text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
            ></font-awesome-icon>
          </div>
        </td>
        <td
          class="table-cell-priority border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <div class="flex items-center">
            <span class="">Priority</span>
            <font-awesome-icon
              v-show="taskIsSelected"
              icon="fa-chevron-down"
              class="mx-2 rounded text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
            ></font-awesome-icon>
          </div>
        </td>
        <td
          class="table-cell-status border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <div class="flex items-center">
            <span class=""> Status</span>
            <font-awesome-icon
              v-show="taskIsSelected"
              icon="fa-chevron-down"
              class="mx-2 rounded text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
            ></font-awesome-icon>
          </div>
        </td>
        <td
          class="table-cell-assign-task pl-5 border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <div class="flex items-center">
            <span class="">Assign task to</span>
            <font-awesome-icon
              v-show="taskIsSelected"
              icon="fa-chevron-down"
              class="mx-2 rounded text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
            ></font-awesome-icon>
          </div>
        </td>
      </tr>
    </table>
    <!-- <table class="w-full my-4 bg-white">
      <tr class="">
        <td
          @mouseover="taskIsSelected = true"
          @mouseleave="taskIsSelected = false"
          class="py-2 pl-10 pr-[413px] border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <span>Task name</span>
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
          <span>Due Date</span>
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
          <span>Priority</span>
          <font-awesome-icon
            v-show="priorityIsSelected"
            icon="fa-chevron-down"
            class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
          ></font-awesome-icon>
        </td>
        <td
          @mouseover="collaboratorIsSelected = true"
          @mouseleave="collaboratorIsSelected = false"
          class="pl-1 pr-[77px] border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <span>Assign task to</span>
          <font-awesome-icon
            v-show="collaboratorIsSelected"
            icon="fa-chevron-down"
            class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
          ></font-awesome-icon>
        </td>
        <td
          @mouseover="statusIsSelected = true"
          @mouseleave="statusIsSelected = false"
          class="pl-5 pr-[80px] border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
        >
          <span>Status</span>
          <font-awesome-icon
            v-show="statusIsSelected"
            icon="fa-chevron-down"
            class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
          ></font-awesome-icon>
        </td>
      </tr>
    </table> -->
    <div class="h-[356px] w-full overflow-auto">
      <ListeTaskInProject></ListeTaskInProject>
    </div>
  </ProjectView>
</template>

<script setup lang="ts">
//  projectIsSelected,
import ListeTaskInProject from "./ListeTaskInProject.vue";
import {
  taskIsSelected,
  // dateIsSelected,
  // priorityIsSelected,
  // collaboratorIsSelected,
  // statusIsSelected,
} from "./EnteteTableau/EnteteTableau";
import ProjectView from "./ProjectView.vue";
import { useTaskOnProjectStore, useAssignToStore } from "@/stores/user";
const taskStores = useTaskOnProjectStore();
const assignStores = useAssignToStore();
import AddtaskButton from "./AddButton/AddtaskButton.vue";
import AddTaskOnProjectPage from "./AddTaskOnProjectPage.vue";
// import AddCollaborator from "./AddCollaborator.vue";
import AssignTaskPage from "./AssigntaskPage.vue";
</script>

<style>
.table-header {
  width: 20%;
}

.table-cell {
  padding: 10px;
  text-align: left;
}

.table-cell-task {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 205px;
  text-align: left;
}

.table-cell-due-date {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  text-align: left;
}

.table-cell-priority {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  text-align: left;
}

.table-cell-assign-task {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 42px;
  text-align: left;
}

.table-cell-status {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  text-align: left;
}
</style>
