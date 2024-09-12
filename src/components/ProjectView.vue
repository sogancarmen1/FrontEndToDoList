<template>
  <div
    v-if="ProjectParameterStore.revele"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <project-parameter></project-parameter>
  </div>
  <topside-bar>
    <div @click="toggleModalOfProjetAndPlus" class="w-full bg-back">
      <div class="flex gap-0 pb-1 bg-white shadow-sm">
        <div>
          <icon-view
            classProp="text-red-300 h-10 pt-6 mx-4"
            iconProp="fa-solid fa-list-check"
          />
        </div>
        <div class="flex flex-col pt-[20px]">
          <div class="flex justify-between">
            <form
              action=""
              @submit.prevent="projectStore.onSubmit($route.params.id)"
              class=""
            >
              <span
                @click="projectStore.toggleReveleInput"
                v-if="projectStore.reveleText"
                class="text-base cursor-pointer font-bold border border-black/0 hover:border-black/20 px-[22px] py-[3px]"
                >{{ projectStore.projectName }}
              </span>
              <input
                v-if="projectStore.reveleInput"
                class="outline-none border py-[1px] text-center px-[px]"
                type="text"
                v-model="projectStore.projectName"
              />
            </form>
            <span
              @click="ProjectParameterStore.toggleRevele"
              class="flex cursor-pointer"
            >
              <icon-view
                classProp="text-blue-500 mx-2"
                iconProp="fa-solid fa-gear"
              />
            </span>
          </div>
          <span class="pt-2">
            <router-link
              :to="createLink($route.params.id.toString(), value)"
              @click="toggleIsNotSelected"
              :class="isSelected ? 'border-b text-black' : 'text-black/50'"
              class="border-black/50 cursor-pointer pb-[6px] hover:text-black"
              >List</router-link
            >
            <router-link
              :to="createLink($route.params.id.toString(), value1)"
              @click="toggleIsSelected"
              :class="isNotSelected ? 'border-b text-black' : 'text-black/50'"
              class="text-base mx-2 border-black/50 cursor-pointer pb-[6px] hover:text-black"
              >Files</router-link
            >
          </span>
        </div>
      </div>
      <slot />
    </div>
  </topside-bar>
</template>

<script setup lang="ts">
import { createLink, value, value1 } from "./ProjectviewListe/ProjectviewListe";
import IconView from "./IconView.vue";
import {
  isSelected,
  toggleIsSelected,
  isNotSelected,
  toggleIsNotSelected,
} from "./tasks";
import { RouterLink } from "vue-router";
import { toggleModalOfProjetAndPlus } from "./layouts/topSideBar";
import TopsideBar from "./TopsideBar.vue";
import {
  useProjectStore,
  useProjectParameterStore,
  useMemberStore,
} from "@/stores/user";
const projectStore = useProjectStore();
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { watch } from "vue";
import ProjectParameter from "@/components/ProjectParameter.vue";
watch(
  () => route.params.id,
  (newId) => {
    projectStore.getProjectById(newId);
    members.getAllMembersInProject(newId);
  }
);
onBeforeMount(() => {
  projectStore.getProjectById(route.params.id);
  members.getAllMembersInProject(route.params.id);
});
const ProjectParameterStore = useProjectParameterStore();
const members = useMemberStore();
</script>
