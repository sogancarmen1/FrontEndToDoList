<template>
  <nav @click="toggleModalOfProjetAndPlus">
    <top-bar @toggle-sidebar="toggleSidebar"></top-bar>
  </nav>
  <div class="flex">
    <div @click="">
      <side-bar v-if="isSidebarVisible"></side-bar>
    </div>
    <slot class=""></slot>
  </div>
</template>

<script setup lang="ts">
import TopBar from "./TopnBar.vue";
import SideBar from "./SideBar/SideBar.vue";
import { isSidebarVisible } from "./layouts/topSideBar";
import {
  toggleSidebar,
  toggleModalOfProjetAndPlus,
} from "./layouts/topSideBar";
</script>
