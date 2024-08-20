<template>
  <font-awesome-icon
    :class="classProp"
    :icon="iconProp"
    class="cursor-pointer h-5 pt-1"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  classProp: String,
  iconProp: String,
});
</script>
