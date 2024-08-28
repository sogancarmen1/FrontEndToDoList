<template>
  <div
    v-if="taskStores.revele"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <AddTask></AddTask>
  </div>
  <TopsideBar>
    <EnTete>
      <div class="border-t">
        <button @click="taskStores.toggleRevele">
          <AddtaskButton
            classProp="bg-blue-600 text-white hover:bg-blue-800"
            class="m-4"
          >
            <!-- <div class="px-4">
            <font-awesome-icon
              class="text-sm px-1"
              icon="fa-pen-nib"
            ></font-awesome-icon>
            <span class="text-sm font-zen">Description</span>
          </div>
          <div class="px-4">
            <font-awesome-icon
              class="text-sm px-1"
              icon="fa-filter"
            ></font-awesome-icon>
            <span class="text-sm font-zen">Filter</span>
          </div>
          <div class="px-4">
            <font-awesome-icon
              class="text-sm px-1"
              icon="fa-sort"
            ></font-awesome-icon>
            <span class="text-sm font-zen">Sort</span>
          </div> -->
          </AddtaskButton>
        </button>
        <div class="flex absolute right-[28px] top-[145px]">
          <!-- <div class="px-4 cursor-pointer">
            <font-awesome-icon
              class="text-sm px-1"
              icon="fa-pen-nib"
            ></font-awesome-icon>
            <span class="text-sm font-zen">Description</span>
          </div> -->
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
        <entete-tableau></entete-tableau>
        <div class="py-4 h-96 w-full overflow-auto">
          <liste-task></liste-task>
        </div>
      </div>
    </EnTete>
  </TopsideBar>
</template>

<script setup lang="ts">
import EnteteTableau from "./EnteteTableau/EnteteTableau.vue";
import EnTete from "./EnTete.vue";
import TopsideBar from "./TopsideBar.vue";
import AddtaskButton from "./AddButton/AddtaskButton.vue";
import ListeTask from "./ListeTask/ListeTask.vue";
import AddTask from "./AddTask.vue";
import { useTaskStore } from "@/stores/user";
const taskStores = useTaskStore();
</script>
