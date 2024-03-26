<script setup lang="ts">
import HomePage from "./components/HomePage.vue";
import { ref } from "vue";
const myArray = ref([
  { id: 1, name: 'tâche 1', dueDate: '2000-02-14', priority: 'High', status: 'in_progress' },
  { id: 2, name: 'tâche 2', dueDate: '2010-02-14', priority: 'low', status: 'done' },
  { id: 3, name: 'tâche 3', dueDate: '2020-01-01', priority: 'High', status: 'pause' }
]);


</script>

<template>
  <routerView class="p-8 bg-gray-100 min-h-screen" :tasks="myArray"></routerView>
  <!-- <div class="p-8 bg-gray-100 min-h-screen">
    <HomePage :tasks="myArray"></HomePage>
  </div> -->
</template>

<style scoped></style>
