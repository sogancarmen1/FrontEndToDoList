<template>
  <div @click="toggleModalOfProjetAndPlus" class="w-full">
    <div class="flex gap-0 pb-1">
      <div>
        <icon-view
          classProp="text-black h-10 pt-6 mx-4"
          iconProp="fa-solid fa-circle-user"
        />
      </div>
      <div class="flex flex-col pt-[20px]">
        <span class="text-base font-bold font-zen">My Tasks</span>
        <span class="pt-2">
          <router-link
            to="/tasks/list"
            @click="toggleIsNotSelected"
            :class="isSelected ? 'border-b text-black' : 'text-black/50'"
            class="border-black/50 cursor-pointer pb-[6px] font-zen hover:text-black"
            >List</router-link
          >
          <router-link
            to="/tasks/file"
            @click="toggleIsSelected"
            :class="isNotSelected ? 'border-b text-black' : 'text-black/50'"
            class="text-base mx-2 border-black/50 font-zen cursor-pointer pb-[6px] hover:text-black"
            >Files</router-link
          >
        </span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import IconView from "./IconView.vue";
import {
  isSelected,
  toggleIsSelected,
  isNotSelected,
  toggleIsNotSelected,
} from "./tasks";
import { RouterLink } from "vue-router";
import { toggleModalOfProjetAndPlus } from "./layouts/topSideBar";
</script>
