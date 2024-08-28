<template>
  <topside-bar>
    <div class="w-full bg-back font-zen">
      <div class="flex py-2 flex-col px-8 w-full bg-white shadow-md">
        <span class="font-bold">Dashboard </span>
        <span>Hi, welcome to task management dashboard</span>
      </div>
      <div class="font-zen">
        <main class="p-6">
          <!-- Stats Section -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
          >
            <!-- Stat Card -->
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div class="flex items-center">
                <div class="bg-blue-500 text-white rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12l2 2 4-4m0 0l-4 4-2-2m0 0l2-2-4-4 4 4z"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold">Completed Tasks</h3>
                  <p class="text-2xl font-bold">
                    {{ projectsStore.countCompletedTasks }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Stat Card -->
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div class="flex items-center">
                <div class="bg-green-500 text-white rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v16c0 .65.35 1 1 1h14c.65 0 1-.35 1-1V4H4zm16 0l-8 5-8-5"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold">Ongoing Tasks</h3>
                  <p class="text-2xl font-bold">
                    {{ projectsStore.countOnGoingTasks }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Stat Card -->
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div class="flex items-center">
                <div class="bg-yellow-500 text-white rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 12h4v4h2v2H8v-2h2v-4zm0-4h4v2h-4V8z"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold">Pending Tasks</h3>
                  <p class="text-2xl font-bold">
                    {{ projectsStore.countPendingTasks }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Stat Card -->
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div class="flex items-center">
                <div class="bg-red-500 text-white rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold">Overdue Tasks</h3>
                  <p class="text-2xl font-bold">
                    {{ projectsStore.countOverdueTasks }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Overview Section -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Project Overview</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead>
                  <tr class="bg-gray-100 text-gray-700 uppercase text-sm">
                    <th class="py-3 px-4">Project Name</th>
                    <th class="py-3 px-4">Team</th>
                    <th class="py-3 px-4">Tasks</th>
                    <th class="py-3 px-4">Description</th>
                  </tr>
                </thead>
                <tbody
                  v-for="project in projectsStore.projects"
                  :key="project.id"
                  class="text-gray-600"
                >
                  <tr class="border-b hover:bg-gray-50">
                    <td class="py-3 px-4">{{ project.nameOfProject }}</td>
                    <td class="py-3 px-4">Team Alpha</td>
                    <td class="py-3 px-8">{{ project.listOfTask?.length }}</td>
                    <td class="py-3 px-4">
                      {{
                        project.hasOwnProperty("description")
                          ? `${project.description}`
                          : "Aucune description"
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  </topside-bar>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import TopsideBar from "./TopsideBar.vue";
import { useProjectsStore } from "@/stores/user";
const projectsStore = useProjectsStore();
const projectss = ref<any[]>([]);
onBeforeMount(async () => {
  projectss.value = projectsStore.projects;
  projectsStore.projects.forEach((proj: any) => {
    console.log(proj);
  });
});
</script>
