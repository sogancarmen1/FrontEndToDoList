<template>
  <div
    class="absolute bg-white font-zen border top-[47px] right-0 h-full text-sm"
  >
    <div class="py-2 mx-12">
      <div @click="ProjectParameterStore.toggleRevele" class="cursor-pointer">
        <font-awesome-icon class="px-1" icon="xmark"></font-awesome-icon>
      </div>
    </div>
    <div class="border-t bg-slate-100 py-[10px] px-[160px]">
      <font-awesome-icon icon="fa-lock" class="px-2"></font-awesome-icon>
      <span>Cet projet est visible par : ses collaborateurs</span>
    </div>
    <div class="relative w-22">
      <h1
        class="absolute my-8 mx-6 text-3xl font-bold overflow-hidden text-ellipsis"
      >
        {{ projectStore.projectName }}
      </h1>
      <div class="text-sm flex space-x-48 absolute my-20 mx-4">
        <p>Email</p>
        <p>Role</p>
      </div>
      <div
        class="text-sm space-y-4 font-bold h-[352px] overflow-y-auto absolute my-[102px] mx-4"
      >
        <div class="" v-for="member in members.members" :key="member?.id">
          <div class="flex justify-between">
            <p
              :class="
                member.roleType === 'owner' ? 'text-gray-800' : 'text-gray-600'
              "
              class="border px-1 rounded"
            >
              {{ member.email }}
            </p>
            <p
              :class="
                member.roleType == 'owner'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-300 text-black'
              "
              class="mx-[38px] border px-1 rounded"
            >
              {{ member.roleType }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="text-sm absolute w-82 overflow-hidden top-[80px] left-[300px] text-ellipsis mx-4"
      >
        <div class="font-bold">Description</div>
        <!-- v-if="showInputDescription" -->
        <div v-for="project in projetsStore.projects" :key="project.id">
          <textarea
            v-if="project.id == $route.params.id"
            v-show="showInputDescription"
            v-model="project.description"
            rows="15"
            cols="35"
            class="border rounded-md shadow-lg resize-none focus:outline-none focus:ring-2"
            style="width: 100%; height: auto"
            name=""
            id=""
          ></textarea>
          <p
            v-show="seeValueOfTextArea"
            class="border border-white hover:border-black/20 w-[301px] h-[301px] rounded-md top-[20px] shadow-lg focus:outline-none focus:ring-2"
            v-if="project.id == $route.params.id"
            @click="clickValue"
          >
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-for="project in projetsStore.projects" :key="project.id">
      <button
        @click="addDescription($route.params.id, project.description)"
        class="m-4 bg-blue-700 px-5 absolute top-[480px] left-[350px] rounded border text-white hover:bg-blue-800"
      >
        <font-awesome-icon
          icon="fa-plus"
          class="text-sm pr-2 font-zen"
        ></font-awesome-icon>
        <span class="text-sm font-zen">Add description</span>
      </button>
    </div>
  </div>
  <div class="absolute bottom-2 right-[200px]">
    <font-awesome-icon
      icon="fa-circle-info"
      class="text-black/50"
    ></font-awesome-icon>
    <span class="px-2 text-sm text-black/50">Information about a project</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showInputDescription = ref(false);
async function addDescription(value: any, newDescription: string) {
  showInputDescription.value = false;
  await updateData(`https://backend-application-v09m.onrender.com/projects/${value}`, {
    description: newDescription,
  });
  seeValueOfTextArea.value = true;
}
const seeValueOfTextArea = ref(true);
function clickValue() {
  showInputDescription.value = true;
  seeValueOfTextArea.value = false;
}
import { useProjectsStore, useMemberStore } from "@/stores/user";
import { updateData } from "@/utils/utils";
const projetsStore = useProjectsStore();
import { useProjectParameterStore, useProjectStore } from "@/stores/user";
const ProjectParameterStore = useProjectParameterStore();
const projectStore = useProjectStore();
const members = useMemberStore();
</script>
