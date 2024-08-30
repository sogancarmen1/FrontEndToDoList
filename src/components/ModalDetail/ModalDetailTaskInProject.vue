<template>
  <div
    class="absolute bg-white font-zen border top-[47px] right-0 h-full text-sm"
  >
    <div class="py-2 mx-12">
      <div @click="hiddenBackgroundAndDetailView" class="cursor-pointer">
        <font-awesome-icon class="px-1" icon="xmark"></font-awesome-icon>
      </div>
    </div>
    <div class="border-t bg-slate-100 py-[10px] px-[160px]">
      <font-awesome-icon icon="fa-lock" class="px-2"></font-awesome-icon>
      <span>Cette tâche est visible par : ses collaborateurs</span>
    </div>
    <div class="relative w-22">
      <h1
        class="absolute my-8 mx-6 text-3xl font-bold overflow-hidden text-ellipsis"
      >
        {{
          modalDetail.valueOfDetail.name?.length > 20
            ? modalDetail.valueOfDetail.name?.slice(0, 20)
            : modalDetail.valueOfDetail.name
        }}
      </h1>
      <div class="text-sm space-y-4 absolute my-20 mx-4">
        <p>Responsible</p>
        <p>Due Date</p>
        <p>Priority</p>
        <p>Status</p>
        <p>Collaborators</p>
      </div>
      <div class="text-sm space-y-4 font-bold absolute left-[100px] my-20 mx-4">
        <a href="#">{{ userInformations.informations }}</a>
        <p v-if="!modalDetail.valueOfDetail.dueDate">Empty</p>
        <p v-if="modalDetail.valueOfDetail.dueDate">
          {{ modalDetail.valueOfDetail.dueDate }}
        </p>
        <p v-if="!modalDetail.valueOfDetail.priority">Empty</p>
        <p v-if="modalDetail.valueOfDetail.priority" class="uppercase">
          {{ modalDetail.valueOfDetail.priority }}
        </p>
        <p v-if="!modalDetail.valueOfDetail.status">Empty</p>
        <p v-if="modalDetail.valueOfDetail.status" class="uppercase">
          {{ modalDetail.valueOfDetail.status }}
        </p>
        <p>Les collaborateurs</p>
      </div>
      <div
        class="text-sm absolute w-82 overflow-hidden top-[80px] left-[300px] text-ellipsis mx-4"
      >
        <div>Description</div>
        <!-- v-if="showInputDescription" -->
        <div v-for="project in projetsStore.projects" :key="project.id">
          <div v-for="task in project.listOfTask" :key="task.id">
            <textarea
              v-if="task.id == modalDetail.idTask"
              v-show="showInputDescription"
              v-model="task.description"
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
              v-if="task.id == modalDetail.idTask"
              @click="clickValue"
            >
              {{ task.description }}
            </p>
          </div>
        </div>
      </div>
      <div v-for="project in projetsStore.projects" :key="project.id">
        <div v-for="task in project.listOfTask" :key="task.id">
          <button
            @click="addDescription(task.description)"
            v-if="task.id == modalDetail.idTask"
            class="m-4 bg-blue-700 px-5 absolute top-[300px] left-[50px] rounded border text-white hover:bg-blue-800"
          >
            <font-awesome-icon
              icon="fa-plus"
              class="text-sm pr-2 font-zen"
            ></font-awesome-icon>
            <span class="text-sm font-zen">Add description</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-2 right-[200px]">
    <font-awesome-icon
      icon="fa-circle-info"
      class="text-black/50"
    ></font-awesome-icon>
    <span class="px-2 text-sm text-black/50">Information sur une tâche</span>
  </div>
</template>

<script setup lang="ts">
// import { details } from "./ModalDetail";
import { hiddenBackgroundAndDetailView } from "@/components/ListeTaskInProject";
import { ref } from "vue";
const showInputDescription = ref(false);
import { hoveredTask } from "@/components/ListeTaskInProject";
async function addDescription(value: string) {
  showInputDescription.value = false;
  (
    await updateData(
      `http://localhost:3000/tasks/${modalDetail.valueOfDetail.id}`,
      {
        description: value,
      }
    )
  ).data.data.taskDescription;
  seeValueOfTextArea.value = true;
}
const seeValueOfTextArea = ref(true);
function clickValue() {
  showInputDescription.value = true;
  seeValueOfTextArea.value = false;
}
import { onBeforeMount } from "vue";
import {
  useModalDetailStore,
  useUserStore,
  useProjectsStore,
} from "@/stores/user";
import { updateData } from "@/utils/utils";
const modalDetail = useModalDetailStore();
const userInformations = useUserStore();
const projetsStore = useProjectsStore();
onBeforeMount(async () => {
  await modalDetail.getDetailTask(hoveredTask.value!);
  modalDetail.setId(modalDetail.valueOfDetail.id ?? 0);
  await projetsStore.fetchProjects();
  userInformations.getUserInformations();
});
</script>
