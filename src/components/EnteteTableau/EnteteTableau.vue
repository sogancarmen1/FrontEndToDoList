<template>
  <table class="w-full bg-white">
    <tr class="">
      <td
        @mouseover="taskIsSelected = true"
        @mouseleave="taskIsSelected = false"
        class="pl-2 py-2 pr-52 border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <span class="font-zen">Task name</span>
        <font-awesome-icon
          v-show="taskIsSelected"
          icon="fa-chevron-down"
          class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
        ></font-awesome-icon>
      </td>
      <td
        @mouseover="projectIsSelected = true"
        @mouseleave="projectIsSelected = false"
        class="pl-2 pr-20 border text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <span class="font-zen">Project</span>
        <font-awesome-icon
          v-show="projectIsSelected"
          icon="fa-chevron-down"
          class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
        ></font-awesome-icon>
      </td>
      <td
        @mouseover="dateIsSelected = true"
        @mouseleave="dateIsSelected = false"
        class="pl-2 pr-20 border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <span class="font-zen">Due Date</span>
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
        <span class="font-zen">Priority</span>
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
        <span class="font-zen">Contributor</span>
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
        <span class="font-zen">Status</span>
        <font-awesome-icon
          v-show="statusIsSelected"
          icon="fa-chevron-down"
          class="mx-2 rounded fixed mt-1 text-black/70 hover:text-black bg-slate-200 hover:bg-slate-400"
        ></font-awesome-icon>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import {
  taskIsSelected,
  projectIsSelected,
  dateIsSelected,
  priorityIsSelected,
  collaboratorIsSelected,
  statusIsSelected,
} from "./EnteteTableau";
</script>
