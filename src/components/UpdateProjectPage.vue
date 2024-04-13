<script>
// import HomePage from './HomePage.vue';
export default {
  props: [
    "reveleUpdateProject",
    "toogleUpdateProject",
    "projects",
    "showCreateTaskButton",
    "showOrNotImage",
  ],
  data() {
    return {
      id: 1,
      nameOfProject: "",
      isEmpty: false,
      nameOfModale: "Modale",
      isSelectedProject: false,
    };
  },

  components: {
    // 'homepage': HomePage,
  },

  methods: {
    resetForm() {
      this.nameOfProject = "";
    },
    onSubmit() {
      if (this.nameOfProject == "") {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
        this.$emit("edit-project-submitted", {
          id: this.id,
          isSelectedProject: this.isSelectedProject,
          nameOfProject: this.nameOfProject,
        });
      }
    },
  },
};
</script>

<template>
  <div
    v-if="reveleUpdateProject"
    class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0"
  >
    <div
      @click="toogleUpdateProject"
      class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"
    ></div>
    <div class="space-y-2 border rounded-lg bg-white shadow-2xl fixed">
      <button
        @click="toogleUpdateProject"
        class="w-5 py-2 absolute right-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </button>
      <!-- <div class="flex"> -->
      <div class="px-8 pt-4 flex items-center flex-none">
        <div>
          <div>
            <p class="text-center font-bold py-4 text-2xl text-gray-800">
              Edit a project
            </p>
            <p
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
            >
              Name of project
            </p>
            <input
              v-model="nameOfProject"
              placeholder="Enter name of project"
              type=""
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div v-if="isEmpty" class="text-sm text-red-700 text-center py-2">
            the fiels shouldn't empty
          </div>
          <div class="py-5">
            <button
              @click="onSubmit"
              class="mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Edit project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style></style>
