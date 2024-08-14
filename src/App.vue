<script lang="ts">
// import HomePage from "./components/HomePage.vue";
// import FormPageConnexion from "./components/FormPageConnexion.vue";
// import AddTaskPage from "./components/AddTaskPage.vue";
import HomePage from "./components/HomePage.vue";
import TheLoader from "./components/TheLoader.vue";
// import VoirProfil from "./components/VoirProfil.vue";

export default {
  props: ["tasks"],
  components: {
    homepage: HomePage,
    theloader: TheLoader,
  },

  data() {
    return {};
  },
};
</script>

<template>
  <!-- <AddTaskPage></AddTaskPage> -->
  <!-- <VoirProfil></VoirProfil> -->
  <routerView class="p-8 bg-gray-100 min-h-screen" :tasks="tasks"></routerView>
  <!-- <FormPageConnexion></FormPageConnexion> -->
  <!-- <div class="p-8 bg-gray-100 min-h-screen">
    <HomePage :tasks="myArray"></HomePage>
  </div> -->
</template>

<style scoped></style>
