<template>
  <table
    v-for="project in projectsStore.projects"
    :key="project.id"
    class="w-full bg-white relative overflow-auto"
  >
    <tr
      v-if="project.id == $route.params.id"
      v-for="task in project.listOfTask"
      :key="task.id"
      class="relative"
    >
      <td
        @mouseover="hoveredTask = task.id"
        @mouseleave="hoveredTask = null"
        class="pl-2 pb-8 relative pt-2 w-[415px] overflow-hidden text-ellipsis whitespace-nowrap border-y text-sm whitespace-nowrap cursor-pointer"
      >
        <div class="flex">
          <form
            :class="task.showInput ? 'inline' : 'hidden'"
            @submit.prevent="onSubmit(task, task.id, task.name)"
            action=""
            class="absolute mx-8"
          >
            <font-awesome-icon
              :class="task.showInput ? 'text-black' : ''"
              class="pt-[3px]"
              icon="fa-circle-check"
            ></font-awesome-icon>
            <input
              :class="
                hoveredTask === task.id
                  ? 'border border-blue-500'
                  : 'border border-black/0'
              "
              class="outline-none mx-2"
              type="text"
              v-model="task.name"
              placeholder="Donner un nom à la tâche"
            />
          </form>
          <div
            class="flex space-x-2 absolute justify-between px-8"
            :class="task.showValueOfInput ? 'inline' : 'hidden'"
          >
            <div class="flex">
              <font-awesome-icon
                class="pt-[6px] px-[1px]"
                icon="fa-circle-check"
              ></font-awesome-icon>
              <p
                @click="onClick(task)"
                :class="
                  hoveredTask === task.id ? 'border' : 'border border-black/0'
                "
                class="text-ellipsis font-zen overflow-hidden w-[380px] px-2 lowercase font-bold"
              >
                {{ task.name }}
              </p>
            </div>
            <div>
              <font-awesome-icon
                @click="showDetailOrNot"
                v-if="hoveredTask === task.id"
                :class="detailOfTask ? 'hidden' : ''"
                class="rounded mx-2 p-1 hover:bg-slate-200"
                icon="fa-chevron-right"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </td>
      <td class="border relative text-sm whitespace-nowrap w-[120px]">
        <form
          action=""
          class="absolute w-full h-full bottom-[-8px] top-[-1px] right-[-0px]"
        >
          <input
            v-if="true"
            @change="onSubmitDate(task, task.id, task.dueDate)"
            v-model="task.dueDate"
            class="border-y w-full font-zen px-2 pt-2 pb-[10px] outline-none cursor-pointer"
            type="date"
          />
        </form>
      </td>
      <td
        @mouseover="task.showCloseIcon = true"
        @mouseleave="task.showCloseIcon = false"
        class="relative border text-sm whitespace-nowrap cursor-pointer w-[100px] overflow-hidden text-ellipsis"
      >
        <form action="" class="border-black">
          <select
            v-if="task.priority == null"
            v-model="task.priority"
            name=""
            id=""
            @change="showOrNotPriorityChoice(task, task.id, task.priority)"
            :class="`absolute font-zen rounded bottom-[2px] left-[-4px]  py-2 mx-2 outline-none`"
          >
            <option disabled value="">Add</option>
            <option value="High">HIGH</option>
            <option value="Average">AVERAGE</option>
            <option value="Low">LOW</option>
          </select>
          <p
            v-if="task.priority != null"
            class="absolute text-white font-zen rounded bottom-[2px] left-[-4px] px-2 py-2 mx-2 outline-none"
            :class="priorityClass(task.priority)"
          >
            <span :class="`uppercase`">{{ task.priority }}</span>
            <font-awesome-icon
              :class="task.showCloseIcon ? 'inline' : 'hidden'"
              @click="resetPriority(task, task.id)"
              class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
              icon="fa-xmark"
            ></font-awesome-icon>
          </p>
        </form>
      </td>

      <td
        @mouseover="task.showCloseIconStatus = true"
        @mouseleave="task.showCloseIconStatus = false"
        class="relative border text-sm cursor-pointer w-[125px] overflow-hidden text-ellipsis whitespace-nowrap"
      >
        <form action="" class="border-black">
          <select
            v-if="task.status == null ? true : false"
            v-model="task.status"
            name=""
            id=""
            @change="showOrNotStatusChoice(task, task.id, task.status)"
            :class="`absolute rounded px-1 font-zen bottom-[2px] left-[-4px] py-2 mx-2 outline-none`"
          >
            <option disabled value="">Add</option>
            <option value="todo">TODO</option>
            <option value="in_progress">IN_PROGRESS</option>
            <option value="waiting">WAITING</option>
            <option value="done">DONE</option>
            <option value="canceled">CANCELED</option>
          </select>
          <p
            v-if="task.status == null ? false : true"
            class="absolute text-white font-zen rounded bottom-[2px] left-[-4px] px-2 py-2 mx-2 outline-none"
            :class="statusClass(task.status)"
          >
            <span class="uppercase">{{ task.status }}</span>
            <font-awesome-icon
              :class="task.showCloseIconStatus ? 'inline' : 'hidden'"
              @click="resetTodo(task, task.id)"
              class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
              icon="fa-xmark"
            ></font-awesome-icon>
          </p>
        </form>
      </td>
      <td
        @click="assignStore.toggleReveleAndShowTaskId(task.id)"
        class="border-y text-sm cursor-pointer w-[46px] overflow-hidden text-ellipsis whitespace-nowrap text-black/70 hover:text-black"
      >
        <span
          v-if="task.assign"
          class="font-zen border bg-green-200 text-gray-900 rounded mx-1 px-1"
          >{{ task.assign }}
        </span>
        <span
          v-if="!task.assign"
          class="font-zen border rounded bg-yellow-200 text-gray-700 mx-1 px-1"
          >Assign task to user in project</span
        >
      </td>
    </tr>
  </table>
  <div
    @click="hiddenBackgroundAndDetailView"
    v-if="deleteBackground"
    class="absolute h-full top-[57px] w-full"
  ></div>
  <modal-detail v-if="detailOfTask"></modal-detail>
  <!-- new -->
</template>

<script setup lang="ts">
import ModalDetail from "@/components/ModalDetail/ModalDetailTaskInProject.vue";
import {
  onSubmit,
  onClick,
  showOrNotPriorityChoice,
  resetPriority,
  showOrNotStatusChoice,
  resetTodo,
  detailOfTask,
  showDetailOrNot,
  hiddenBackgroundAndDetailView,
  deleteBackground,
  onSubmitDate,
  hoveredTask,
} from "@/components/ListeTaskInProject";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useProjectsStore, useAssignToStore } from "@/stores/user";
const assignStore = useAssignToStore();
const projectsStore = useProjectsStore();
import { watch } from "vue";

const route = useRoute();
projectsStore.projectId = Number(route.params.id);
watch(
  () => route.params.id,
  (newId) => {
    projectsStore.projectId = Number(newId);
  }
);

onBeforeMount(async () => {});

function priorityClass(taskPriority: any) {
  if (taskPriority === "High") return "bg-red-700";
  if (taskPriority === "Average") return "bg-yellow-500";
  if (taskPriority === "Low") return "bg-green-500";
  return "";
}

function statusClass(taskStatus: any) {
  if (taskStatus === "todo") return "bg-blue-300";
  if (taskStatus === "in_progress") return "bg-yellow-500";
  if (taskStatus === "waiting") return "bg-orange-500";
  if (taskStatus === "done") return "bg-green-700";
  if (taskStatus === "canceled") return "bg-gray-400";
  return "";
}
</script>
