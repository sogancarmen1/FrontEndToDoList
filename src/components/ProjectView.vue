<template>
  <topside-bar>
    <div @click="toggleModalOfProjetAndPlus" class="w-full">
      <div class="flex gap-0 pb-1">
        <div>
          <icon-view
            classProp="text-red-300 h-10 pt-6 mx-4"
            iconProp="fa-solid fa-list-check"
          />
        </div>
        <div class="flex flex-col pt-[20px]">
          <span class="text-base font-bold">{{
            projectsAndEquipe[0].listOfProject?.find(
              (project) => project.id == $route.params.id
            )?.name
          }}</span>
          <span class="pt-2">
            <router-link
              :to="createLink($route.params.id.toString(), value)"
              @click="toggleIsNotSelected"
              :class="isSelected ? 'border-b text-black' : 'text-black/50'"
              class="border-black/50 cursor-pointer pb-[6px] hover:text-black"
              >Liste</router-link
            >
            <router-link
              :to="createLink($route.params.id.toString(), value1)"
              @click="toggleIsSelected"
              :class="isNotSelected ? 'border-b text-black' : 'text-black/50'"
              class="text-base mx-2 border-black/50 cursor-pointer pb-[6px] hover:text-black"
              >Fichiers</router-link
            >
          </span>
        </div>
      </div>
      <slot />
    </div>
  </topside-bar>
</template>

<script setup lang="ts">
import {
  createLink,
  value,
  value1,
} from "./ProjectviewListe/ProjectviewListe";
import IconView from "./IconView.vue";
import {
  isSelected,
  toggleIsSelected,
  isNotSelected,
  toggleIsNotSelected,
} from "./tasks";
import { RouterLink } from "vue-router";
import { toggleModalOfProjetAndPlus } from "./layouts/topSideBar";
import { projectsAndEquipe } from "./SideBar/sideBar";
import TopsideBar from "./TopsideBar.vue";
</script>
