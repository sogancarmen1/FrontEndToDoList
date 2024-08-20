<template>
  <ProjectView>
    <table class="w-full">
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
  </ProjectView>
</template>

<script setup lang="ts">
//  projectIsSelected,
import {
  taskIsSelected,
  dateIsSelected,
  priorityIsSelected,
  collaboratorIsSelected,
  statusIsSelected,
} from "./EnteteTableau/EnteteTableau";
import ProjectView from "./ProjectView.vue";
</script>
