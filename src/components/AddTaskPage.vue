<script>
// import HomePage from './HomePage.vue';
export default {
  props: ["revele", "toggleModale", "projects", "isDark"],
  data() {
    return {
      id: 1,
      name: "",
      dueDate: "",
      priority: "",
      status: "",
      inProject: "",
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
      this.name = "";
      this.dueDate = "";
      this.priority = "";
      this.status = "";
      this.inProject = "";
      this.description = "";
    },
    onSubmit() {
      if (
        this.name == "" ||
        this.priority == "" ||
        this.status == "" ||
        this.dueDate == "" ||
        this.inProject == ""
      ) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
        this.$emit("form-submitted", {
          id: this.id,
          nameFormatted: this.name.slice(0, 8) + "...",
          name: this.name,
          dueDate: this.dueDate,
          priority: this.priority,
          status: this.status,
          inProject: this.inProject,
          description: this.description,
        });
        this.toggleModale();
        this.resetForm();
      }
    },
  },
};
</script>

<template>
  <div
    v-if="revele"
    class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0"
  >
    <div
      @click="toggleModale"
      class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"
    ></div>
    <div
      :class="{ dark: isDark }"
      class="space-y-2 rounded-lg dark:bg-black/90 bg-white shadow-2xl fixed"
    >
      <button @click="toggleModale" class="w-5 py-4 absolute right-4">
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
          <h1
            :class="{ dark: isDark }"
            class="text-center font-bold py-4 text-2xl dark:text-white text-gray-800"
          >
            Add a task
          </h1>
          <div>
            <div>
              <p
                :class="{ dark: isDark }"
                class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium dark:text-white text-slate-700"
              >
                In project
              </p>
              <select
                v-model="inProject"
                :class="{ dark: isDark }"
                @keyup.enter="onSubmit"
                class="mt-1 px-3 py-2 dark:bg-black/20 dark:text-white text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option disabled value="">Please select project</option>
                <option v-for="project in projects" :key="project.id">
                  {{ project.nameOfProject }}
                </option>
              </select>
            </div>
            <p
              :class="{ dark: isDark }"
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium dark:text-white text-slate-700"
            >
              Name
            </p>
            <input
              v-model="name"
              @keyup.enter="onSubmit"
              placeholder="Enter name of task"
              type=""
              :class="{ dark: isDark }"
              class="mt-1 px-3 py-2 dark:bg-black/20 dark:text-white text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div>
            <p
              :class="{ dark: isDark }"
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium dark:text-white text-slate-700"
            >
              Due Date
            </p>
            <input
              v-model="dueDate"
              @keyup.enter="onSubmit"
              placeholder="Enter name of task"
              type="date"
              :class="{ dark: isDark }"
              class="mt-1 px-3 py-2 dark:bg-black/20 dark:text-white text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div>
            <p
              :class="{ dark: isDark }"
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium dark:text-white text-slate-700"
            >
              Priority
            </p>
            <select
              v-model="priority"
              :class="{ dark: isDark }"
              @keyup.enter="onSubmit"
              class="mt-1 px-3 py-2 dark:bg-black/20 dark:text-white text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option disabled value="">Please select priority</option>
              <option>High</option>
              <option>Average</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <p
              :class="{ dark: isDark }"
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium dark:text-white text-slate-700"
            >
              Status
            </p>
            <select
              v-model="status"
              :class="{ dark: isDark }"
              @keyup.enter="onSubmit"
              class="mt-1 px-3 py-2 dark:bg-black/20 dark:text-white text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option disabled value="">Please select status</option>
              <option>todo</option>
              <option>in_progess</option>
              <option>waiting</option>
              <option>done</option>
              <option>canceled</option>
            </select>
          </div>
          <div v-if="isEmpty" class="text-sm text-red-700 text-center py-2">
            the fiels shouldn't empty
          </div>
          <div>
            <p
              :class="{ dark: isDark }"
              class="after:ml-0.5 py-2 after:text-red-500 block text-sm font-medium dark:text-white text-slate-700"
            >
              Description
            </p>
            <textarea
              v-model="description"
              @keyup.enter="onSubmit"
              placeholder="Add a description..."
              type=""
              :class="{ dark: isDark }"
              class="resize-none px-3 py-2 dark:bg-black/20 dark:text-white text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div class="py-5">
            <button
              @click="onSubmit"
              class="shadow-xl mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add task
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style></style>
