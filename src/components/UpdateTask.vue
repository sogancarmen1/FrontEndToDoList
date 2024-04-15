<script>
import { ref } from "vue";

// import HomePage from './HomePage.vue';
export default {
  props: [
    "isDark",
    "task",
    "reveleUpdateTask",
    "tooglereveleUpdateTask",
    "projects",
    "name",
    "dueDate",
    "priority",
    "status",
    "inProjectUpdate",
  ],
  data() {
    return {
      isEmpty: false,
      nameOfModale: "Modale",
    };
  },

  components: {
    // 'homepage': HomePage,
  },

  methods: {
    onSubmit() {
      if (
        this.$props.task.name == "" ||
        this.$props.task.priority == "" ||
        this.$props.task.status == "" ||
        this.$props.task.dueDate == "" ||
        this.$props.task.inProject == ""
      ) {
        this.isEmpty = true;
      } 
      else {
        this.isEmpty = false;
        this.$emit("form-submitted-update", {
          id: this.$props.task.id,
          nameFormatted: this.$props.task.name.slice(0, 8) + "...",
          name: this.$props.task.name,
          dueDate: this.$props.task.dueDate,
          priority: this.$props.task.priority,
          status: this.$props.task.status,
          inProjectUpdate: this.$props.task.inProject,
        });
      }
      this.tooglereveleUpdateTask({});
      // this.$emit('essai', updateData());
      // updateData();
    },
  },

  mounted() {
    // console.log("salut tout le monde");
    // this.name = selectedTask.nam
  },
};
</script>

<template>
  <div
    v-if="reveleUpdateTask"
    class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0"
  >
    <div
      @click="tooglereveleUpdateTask"
      class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"
    ></div>
    <div :class="{ 'dark': isDark }" class="dark:bg-black/90 dark:border-none space-y-2 border rounded-lg bg-white shadow-2xl fixed">
      <button @click="tooglereveleUpdateTask" class="w-5 py-4 absolute right-5">
        <svg :class="{ 'dark': isDark }" class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="20" height="20">
            <g>
                <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
            </g>
        </svg>
      </button>
      <!-- <div class="flex"> -->
      <div class="px-8 pt-4 flex items-center flex-none">
        <div>
          <div>
            <h1 :class="{ 'dark': isDark }" class="dark:text-white text-center font-bold py-4 text-2xl text-gray-800">
              Edit a task
            </h1>
            <p
              :class="{ 'dark': isDark }"
              class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
            >
              Name
            </p>
            <!-- Chercher à faire les réglages ici et voir dans la console -->
            <input
              :class="{ 'dark': isDark }"
              v-model="task.name"
              placeholder="Enter name of task"
              type=""
              class="mt-1 px-3 py-2 dark:bg-black/80 dark:text-white bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <!-- :value="name"
              @input="name = $event.target.value" -->
          <div>
            <p
              :class="{ 'dark': isDark }"
              class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
            >
              Due Date
            </p>
            <input
              v-model="task.dueDate"
              placeholder="Enter name of task"
              type="date"
              class="mt-1 px-3 py-2 dark:bg-black/80 dark:text-white bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <!--v-model="nameUpdate" ou  :value="dueDate"
              @input="dueDate = $event.target.value" -->
          <div>
            
            <p
              :class="{ 'dark': isDark }"
              class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
            >
              Priority
            </p>
            <select
              :class="{ 'dark': isDark }"
              v-model="task.priority"
              class="mt-1 px-3 py-2 dark:bg-black/80 dark:text-white bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option disabled value="">Please select priority</option>
              <option>High</option>
              <option>Average</option>
              <option>Low</option>
            </select>
          </div>
          <!-- :value="priority"
              @input="priority = $event.target.value" -->
          <div>
            <p
              :class="{ 'dark': isDark }"
              class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
            >
              Status
            </p>
            <select
              :class="{ 'dark': isDark }"
              v-model="task.status"
              class="mt-1 px-3 py-2 dark:bg-black/80 dark:text-white bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option disabled value="">Please select status</option>
              <option>todo</option>
              <option>in_progress</option>
              <option>waiting</option>
              <option>done</option>
              <option>canceled</option>
            </select>
          </div>
          <!-- :value="status"
              @input="status = $event.target.value" -->
          <!-- <div>
            <p
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
            >
              In project
            </p>
            <select
              v-model="task.inProjectUpdate"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option disabled value="">Please select project</option>
              <option v-for="project in projects" :key="project.id">
                {{ project.nameOfProject }}
              </option>
            </select>
          </div> -->
          <!-- :value="inProject"
              @input="inProject = $event.target.value" -->
          <div v-if="isEmpty" class="text-sm text-red-700 text-center py-2">
            the fiels shouldn't empty
          </div>
          <div class="py-5">
            <button
              :class="{ 'dark': isDark }"
              @click="onSubmit"
              class="dark:shadow-black shadow-md mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Edit task
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style></style>
