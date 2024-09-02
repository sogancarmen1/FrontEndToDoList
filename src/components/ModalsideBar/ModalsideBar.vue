<template>
  <div class="absolute my-2 rounded shadow bg-white py-3">
    <span
      class="text-sm font-zen whitespace-nowrap text-black/50 px-2 py-2 hover:bg-slate-100 hover:text-black cursor-pointer"
    >
      <font-awesome-icon :icon="icon" class=""></font-awesome-icon>
      {{ text && text.length > 14 ? text?.slice(0, 15) + "..." : text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";

// Correction des types : string en minuscule
defineProps({
  icon: String as PropType<string>, // Type de propriété correcte
  text: String as PropType<string | undefined>, // Type de propriété correcte
});
</script>
