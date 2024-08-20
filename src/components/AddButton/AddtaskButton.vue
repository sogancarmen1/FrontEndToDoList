<template>
  <div class="sm:flex justify-between">
    <div
      :class="classProp"
      class="border rounded px-8 cursor-pointer whitespace-nowrap"
    >
      <font-awesome-icon
        icon="fa-plus"
        class="text-sm pr-2 font-zen"
      ></font-awesome-icon>
      <span class="text-sm font-zen">Add task</span>
    </div>
    <div class="flex cursor-pointer">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  classProp: String,
});
</script>
