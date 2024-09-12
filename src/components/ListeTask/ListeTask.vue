<template>
  <table
    v-for="project in projects"
    :key="project.id"
    class="w-full bg-white relative overflow-auto"
  >
    <tr v-for="task in project.listOfTask" :key="task.id" class="relative">
      <td
        @mouseover="hoveredTaskId = task.id"
        @mouseleave="hoveredTaskId = null"
        class="pl-2 pb-8 relative pt-2 w-[339px] overflow-hidden text-ellipsis whitespace-nowrap border-y text-sm whitespace-nowrap cursor-pointer"
      >
        <div class="flex">
          <form
            :class="task.showInput ? 'inline' : 'hidden'"
            @submit.prevent="onSubmit(task, task.id, task.name)"
            action=""
            class="absolute left-[41px]"
          >
            <font-awesome-icon
              :class="task.showInput ? 'text-black' : ''"
              class="pt-[3px]"
              icon="fa-circle-check"
            ></font-awesome-icon>
            <input
              :class="
                hoveredTaskId === task.id
                  ? 'border border-blue-500'
                  : 'border border-black/0'
              "
              class="outline-none"
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
                  hoveredTaskId === task.id ? 'border' : 'border border-black/0'
                "
                class="text-ellipsis font-zen overflow-hidden w-[197px]"
              >
                {{ task.name }}
              </p>
            </div>
            <div>
              <font-awesome-icon
                @click="showDetailOrNot"
                v-if="hoveredTaskId === task.id"
                :class="detailOfTask ? 'hidden' : ''"
                class="rounded mx-2 p-1 hover:bg-slate-200"
                icon="fa-chevron-right"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </td>
      <td
        class="w-[161px] border text-sm whitespace-nowrap text-black/70 hover:text-black"
      >
        <span :title="task.inProject" class="font-zen px-2">{{
          task.inProject
        }}</span>
      </td>
      <td class="px-[123px] relative min-w-10 pr-8 text-sm whitespace-nowrap">
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
          <!-- <p
            @click="onClickDate(task)"
            class="border-y w-full font-zen px-2 pt-2 pb-[12px] outline-none cursor-pointer"
            v-if="task.showValueOfInputOfDate"
            title="Click for modification"
          >
            {{ task.dueDate }}
          </p> -->
        </form>
      </td>
      <td
        @mouseover="task.showCloseIcon = true"
        @mouseleave="task.showCloseIcon = false"
        class="px-[58px] relative border text-sm whitespace-nowrap cursor-pointer"
      >
        <form action="" class="border-black">
          <select
            v-if="task.priority == null ? true : false"
            v-model="task.priority"
            name=""
            id=""
            @change="showOrNotPriorityChoice(task, task.id, task.priority)"
            :class="`absolute font-zen rounded bottom-[2px] left-[-4px] px-2 py-2 mx-2 outline-none`"
          >
            <option disabled value="">Add</option>
            <option value="High">HIGH</option>
            <option value="Average">AVERAGE</option>
            <option value="Low">LOW</option>
          </select>
          <p
            v-if="task.priority == null ? false : true"
            :class="`absolute bg-red-500 text-white font-zen rounded bottom-[2px] left-[-4px] px-2 py-2 mx-2 outline-none`"
          >
            <span :class="`uppercase`">{{ task.priority }}</span>
            <font-awesome-icon
              :class="task.showCloseIcon ? 'inline' : 'hidden'"
              @click="resetPriority(task)"
              class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
              icon="fa-xmark"
            ></font-awesome-icon>
          </p>
        </form>
      </td>
      <td
        class="w-[200px] overflow-hidden text-ellipsis whitespace-nowrap border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
         <td
        @click="assignStore.toggleReveleAndShowTaskId(task.id)"
        class="text-sm whitespace-nowrap cursor-pointer w-56 overflow-hidden text-ellipsis whitespace-nowrap text-black/70 hover:text-black"
      >
        <span
          v-if="task.assign"
          class="font-zen border bg-green-200 text-gray-900 rounded mx-1 px-1"
          >{{ task.assign }}
        </span>
        <span
          v-if="!task.assign"
          class="font-zen border rounded bg-yellow-200 text-gray-700 mx-1 px-1"
          >Assign task to</span
        >
      </td>
      </td>
      <td
        @mouseover="task.showCloseIconStatus = true"
        @mouseleave="task.showCloseIconStatus = false"
        class="px-[66px] relative border text-sm whitespace-nowrap cursor-pointer"
      >
        <form action="" class="border-black w-full">
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
            class="absolute bg-red-700 text-white font-zen rounded bottom-[2px] left-[-4px] px-2 py-2 mx-2 outline-none"
          >
            <span class="uppercase">{{ task.status }}</span>
            <font-awesome-icon
              :class="task.showCloseIconStatus ? 'inline' : 'hidden'"
              @click="resetTodo(task)"
              class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
              icon="fa-xmark"
            ></font-awesome-icon>
          </p>
        </form>
      </td>
    </tr>
  </table>
  <div
    @click="hiddenBackgroundAndDetail"
    v-if="deleteBackground"
    class="border absolute h-full top-[47px] w-full"
  ></div>
  <modal-detail v-if="detailOfTask"></modal-detail>
  <!-- new -->
</template>

<script setup lang="ts">
import ModalDetail from "../ModalDetail/ModalDetail.vue";
import {
  onSubmit,
  onClick,
  showOrNotPriorityChoice,
  resetPriority,
  showOrNotStatusChoice,
  resetTodo,
  detailOfTask,
  showDetailOrNot,
  hiddenBackgroundAndDetail,
  deleteBackground,
  // onClickDate,
  onSubmitDate,
  hoveredTaskId,
} from "./ListeTask";
import { onBeforeMount, ref } from "vue";
import { useProjectsStore } from "@/stores/user";
const projectsStore = useProjectsStore();
const projects = ref<any[]>([]);
import { useAssignToStore } from "@/stores/user";
const assignStore = useAssignToStore();
onBeforeMount(async () => {
  // await projectsStore.fetchProjects();
  projects.value = projectsStore.projects;
});

// });
// const priorityClass = computed((task: any) => {
//   if (task.priority === "High") return "bg-red-700";
//   if (task.priority === "Average") return "bg-yellow-500";
//   if (task.priority === "Low") return "bg-green-500";
//   return "";
// });
// const statusClass = computed(() => {
//   if (status.value === "todo") return "bg-blue-300";
//   if (status.value === "in_progress") return "bg-yellow-500";
//   if (status.value === "waiting") return "bg-orange-500";
//   if (status.value === "done") return "bg-green-700";
//   if (status.value === "canceled") return "bg-gray-400";
//   return "";
// });
</script>
