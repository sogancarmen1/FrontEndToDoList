<template>
  <div class="absolute my-2 rounded shadow bg-white py-3">
    <div v-for="(value, index) in iconAndTextProp" :key="index">
      <span
        class="text-sm whitespace-nowrap text-black/50 px-2 py-2 hover:bg-slate-100 hover:text-black cursor-pointer"
      >
        <font-awesome-icon :icon="value.icon" class=""></font-awesome-icon>
        {{
          value.text.length > 14 ? value.text.slice(0, 15) + "..." : value.text
        }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  iconAndTextProp: Array<{ icon: String; text: String }>,
});
</script>
