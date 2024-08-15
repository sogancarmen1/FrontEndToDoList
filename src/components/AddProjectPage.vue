<script>
// import HomePage from './HomePage.vue';
export default {
  props: [
    "reveleCreateProjectForm",
    "toggleReveleCreateProjectForm",
    "projects",
    "showCreateTaskButton",
    "showOrNotImage",
    "moonIsSelected",
    "sunIsSelected",
    "isDark",
  ],
  data() {
    return {
      id: 1,
      nameOfProject: "",
      description: "",
      isEmpty: false,
      nameOfModale: "Modale",
    };
  },

  components: {
    // 'homepage': HomePage,
  },

  methods: {
    resetForm() {
      this.nameOfProject = "";
      this.description = "";
    },
    onSubmit() {
      if (this.nameOfProject == "") {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
        this.$emit("form-project-submitted", {
          id: this.id,
          nameOfProject: this.nameOfProject,
          description: this.description,
        });
        this.toggleReveleCreateProjectForm();
        this.showCreateTaskButton();
        this.showOrNotImage();
        this.resetForm();
      }
    },
  },
};
</script>

<template>
  <div
    v-if="reveleCreateProjectForm"
    class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0"
  >
    <div
      @click="toggleReveleCreateProjectForm"
      class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"
    ></div>
    <div
      :class="{ dark: isDark }"
      class="bg-white dark:bg-black/90 space-y-2 rounded-lg shadow-2xl fixed"
    >
      <button
        @click="toggleReveleCreateProjectForm"
        class="w-5 py-4 absolute right-4"
      >
        <svg
          :class="{ dark: isDark }"
          class="dark:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512.021 512.021"
          style="enable-background: new 0 0 512.021 512.021"
          xml:space="preserve"
          width="20"
          height="20"
        >
          <g>
            <path
              d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"
            />
          </g>
        </svg>
      </button>
      <!-- <div class="flex"> -->
      <div class="px-8 pt-4 flex items-center flex-none">
        <div>
          <div>
            <p
              :class="{ dark: isDark }"
              class="text-gray-800 dark:text-white text-center font-bold py-4 text-2xl"
            >
              Add a project
            </p>
            <p
              :class="{ dark: isDark }"
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 dark:text-white"
            >
              Name of project
            </p>
            <input
              v-model="nameOfProject"
              placeholder="Enter name of project"
              @keyup.enter="onSubmit"
              autofocus
              type="text"
              :class="{ dark: isDark }"
              class="mt-1 px-3 py-2 dark:bg-black dark:text-white bg-white text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div v-if="isEmpty" class="text-sm text-red-700 text-center py-2">
            the fiels shouldn't empty
          </div>
          <p
            :class="{ dark: isDark }"
            class="after:ml-0.5 py-4 after:text-red-500 block text-sm font-medium text-slate-700 dark:text-white"
          >
            Description
          </p>
          <textarea
            v-model="description"
            placeholder="Enter a description..."
            @keyup.enter="onSubmit"
            autofocus
            rows="5"
            cols="10"
            type="text"
            :class="{ dark: isDark }"
            class="mt-1 px-3 py-2 resize-none dark:bg-black dark:text-white bg-white text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
          <div class="py-5">
            <button
              @click="onSubmit"
              class="shadow-xl mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style></style>
