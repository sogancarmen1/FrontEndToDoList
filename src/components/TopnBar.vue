<template>
  <header
    class="bg-black/85 px-5 sm:px-9 border-b border-opacity-10 border-white"
  >
    <div class="flex justify-between py-2">
      <div class="flex gap-2">
        <div class="flex space-x-2">
          <svg
            class="w-[30px] h-[40px]"
            fill="currentColor"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 0c16.569 0 30 13.431 30 30v30H30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0Z"
              fill="#918EF4"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.68 30.585v-.392c2.418-.245 3.6-1.479 3.6-3.849v-4.323c0-2.632.938-3.7 3.257-3.7h.657V16h-.9c-3.882 0-5.71 1.826-5.71 5.658v3.666c0 2.632-.9 3.5-3.584 3.5v3.125c2.68 0 3.584.871 3.584 3.5v3.666c0 3.832 1.826 5.658 5.706 5.658h.9v-2.315h-.657c-2.319 0-3.257-1.068-3.257-3.7v-4.324c.005-2.368-1.176-3.602-3.596-3.849ZM44 30.193v.392c-2.418.248-3.6 1.482-3.6 3.849v4.325c0 2.632-.938 3.7-3.257 3.7h-.657v2.319h.9c3.88 0 5.706-1.826 5.706-5.658v-3.667c0-2.632.9-3.5 3.584-3.5v-3.127c-2.68 0-3.584-.871-3.584-3.5v-3.668C43.093 17.826 41.264 16 37.387 16h-.9v2.319h.657c2.32 0 3.257 1.068 3.257 3.7v4.325c0 2.367 1.183 3.6 3.6 3.849ZM30.5 27a3.5 3.5 0 0 1 3.5 3.5V34h-3.5a3.5 3.5 0 1 1 0-7Z"
              fill="#fff"
            />
          </svg>
          <span class="text-white font-bold my-2">ProAt</span>
        </div>
      </div>
      <!-- Search bar -->
      <div
        class="flex gap-1 bg-white/50 rounded-2xl w-full mx-2 px-4 py-[2px] sm:w-80 transition-all duration-500 ease-in-out"
      >
        <icon-view
          classProp="block float-left my-1 text-white cursor-pointeur"
          iconProp="fa-solid fa-magnifying-glass"
        />
        <input
          type=""
          placeholder="Search"
          class="outline-none bg-transparent text-base w-full text-white"
        />
      </div>
      <div class="flex gap-0 cursor-pointer">
        <icon-view classProp="text-white" iconProp="fa-user" />
        <icon-view classProp="text-white" iconProp="fa-solid fa-caret-down" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useProjectsStore } from "@/stores/user";
const projectsStore = useProjectsStore();
onBeforeMount(async () => {
  await projectsStore.fetchProjects();
});
import IconView from "./IconView.vue";
</script>
