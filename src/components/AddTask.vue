<template>
  <div
    v-if="taskStores.revele"
    class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0"
  >
    <div class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"></div>
    <div
      class="space-y-2 rounded-lg dark:bg-black/90 bg-white shadow-2xl fixed"
    >
      <button @click="toggleRevele" class="w-5 py-4 absolute right-4">
        <svg
          class="dark:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512.021 512.021"
          style="enable-background: new 0 0 512.021 512.021"
          xml:space="preserve"
          width="20"
          height="20"
        >
          <g>
            <path
              d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"
            />
          </g>
        </svg>
      </button>
      <!-- <div class="flex"> -->
      <div class="px-8 pt-4 flex items-center font-zen flex-none">
        <div>
          <h1
            class="text-center font-bold py-4 text-2xl dark:text-white text-gray-800"
          >
            Add a task
          </h1>
          <div>
            <div>
              <p
                class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium dark:text-white text-slate-700"
              >
                In project
              </p>
              <select
                v-model="inProject"
                @keyup.enter="onSubmit"
                class="mt-1 px-3 py-2 dark:bg-black/20 dark:text-white text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option disabled value="">Please select project</option>
                <option v-for="project in projects" :key="project.id">
                  {{ project.nameOfProject }}
                </option>
              </select>
            </div>
            <p
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium dark:text-white text-slate-700"
            >
              Name
            </p>
            <input
              v-model="name"
              @keyup.enter="onSubmit"
              placeholder="Enter name of task"
              type=""
              class="mt-1 px-3 py-2 dark:bg-black/20 dark:text-white text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div class="py-5">
            <button
              @click="onSubmit"
              class="shadow-xl mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add task
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const inProject = ref("");
import { useProjectsStore } from "@/stores/user";
const revele = ref(false);
const projectsStore = useProjectsStore();
const name = ref("");
const projects = projectsStore.projects;
import { useTaskStore } from "@/stores/user";
const taskStores = useTaskStore();
function onSubmit() {}
function toggleRevele() {
  revele.value = !revele.value;
}
</script>
