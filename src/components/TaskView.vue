<template>
  <Entete>
    <RouterView />
  </Entete>
</template>

<script setup lang="ts">
import Entete from "./EnTete.vue";
import { RouterView } from "vue-router";
</script>
