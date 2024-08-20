<template>
  <table class="w-full relative">
    <tr class="">
      <td
        @mouseover="showIconAndBorder = true"
        @mouseleave="showIconAndBorder = false"
        class="pl-2 pb-8 relative pt-2 pr-[291px] border-y text-sm whitespace-nowrap cursor-pointer"
      >
        <div class="flex">
          <!-- :class="showInput ? 'inline' : 'hidden'" -->

          <form
            :class="showInput ? 'inline' : 'hidden'"
            @submit.prevent="onSubmit"
            action=""
            class="absolute left-[41px]"
          >
            <font-awesome-icon
              :class="showInput ? 'text-white' : ''"
              class="pt-[3px]"
              icon="fa-circle-check"
            ></font-awesome-icon>
            <input
              :class="showIconAndBorder ? 'border' : 'border border-black/0'"
              class="outline-none"
              type="text"
              v-model="nameOfTask"
              placeholder="Donner un nom à la tâche"
            />
          </form>
          <div
            class="flex space-x-2 absolute justify-between px-8"
            :class="showValueOfInput ? 'inline' : 'hidden'"
          >
            <div class="flex">
              <font-awesome-icon
                class="pt-[6px] px-[1px]"
                icon="fa-circle-check"
              ></font-awesome-icon>
              <p
                @click="onClick"
                :class="showIconAndBorder ? 'border' : 'border border-black/0'"
                class="text-ellipsis font-zen overflow-hidden w-[197px]"
              >
                {{ nameOfTask }}
              </p>
            </div>
            <div>
              <font-awesome-icon
                @click="showDetailOrNot"
                v-if="showIconAndBorder"
                :class="detailOfTask ? 'hidden' : ''"
                class="rounded mx-2 p-1 hover:bg-slate-200"
                icon="fa-chevron-right"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </td>
      <td
        class="pl-2 pr-[80px] border text-sm whitespace-nowrap text-black/70 hover:text-black"
      >
        <!-- La taille des noms de projet ne peut pas dépasser ce qui est écrit là donc faire un hover pour l'afficher en vignette -->
        <span class="font-zen px-2">Projet</span>
      </td>
      <td class="px-[123px] relative min-w-10 pr-8 text-sm whitespace-nowrap">
        <form
          action=""
          class="absolute w-full h-full bottom-[-8px] top-[-1px] right-[-0px]"
        >
          <input
            v-model="date"
            class="border-y w-full font-zen px-2 pt-2 pb-[10px] outline-none cursor-pointer"
            type="date"
          />
        </form>
      </td>
      <td
        @mouseover="showCloseIcon = true"
        @mouseleave="showCloseIcon = false"
        class="px-[58px] relative border text-sm whitespace-nowrap cursor-pointer"
      >
        <form action="" class="border-black">
          <select
            v-if="showChoicePriority"
            v-model="priority"
            name=""
            id=""
            @click="showOrNotPriorityChoice(priority)"
            class="absolute font-zen rounded bottom-[2px] left-[-4px] px-2 py-2 mx-2 outline-none"
          >
            <option disabled value="">Add</option>
            <option value="High">HIGH</option>
            <option value="Average">AVERAGE</option>
            <option value="Low">LOW</option>
          </select>
        </form>
        <div
          v-if="High"
          class="absolute rounded border bg-red-700 bottom-[2px] left-[-4px] px-4 py-2 mx-2"
        >
          <span class="text-white">HIGH</span>
          <font-awesome-icon
            :class="showCloseIcon ? 'inline' : 'hidden'"
            @click="notShowHigh"
            class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
            icon="fa-xmark"
          ></font-awesome-icon>
        </div>
        <div
          v-if="Average"
          class="absolute rounded bg-red-500 bottom-[2px] left-[-4px] px-2 py-2 mx-2"
        >
          <span class="text-white">AVERAGE</span>
          <font-awesome-icon
            v-if="showCloseIcon"
            @click="notShowAverage"
            class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
            icon="fa-xmark"
          ></font-awesome-icon>
        </div>
        <div
          @click="notShowLow"
          v-if="Low"
          class="absolute rounded bg-red-300 bottom-[2px] left-[-4px] px-4 py-2 mx-2"
        >
          <span class="text-white">LOW</span>
          <font-awesome-icon
            v-if="showCloseIcon"
            @click="notShowLow"
            class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
            icon="fa-xmark"
          ></font-awesome-icon>
        </div>
      </td>
      <td
        class="pl-2 pr-20 border-y text-sm whitespace-nowrap cursor-pointer text-black/70 hover:text-black"
      >
        <!-- Gardez le même nom ici aussi -->
        <span class="font-zen">Collaborateur</span>
      </td>
      <td
        @mouseover="showCloseIconInStatus = true"
        @mouseleave="showCloseIconInStatus = false"
        class="px-[66px] relative border text-sm whitespace-nowrap cursor-pointer"
      >
        <form action="" class="border-black w-full">
          <select
            v-if="showChoiceStatus"
            v-model="status"
            name=""
            id=""
            @click="showOrNotStatusChoice(status)"
            class="absolute rounded px-1 font-zen bottom-[2px] left-[-4px] py-2 mx-2 outline-none"
          >
            <option disabled value="">Add</option>
            <option value="todo">TODO</option>
            <option value="in_progress">IN_PROGRESS</option>
            <option value="waiting">WAITING</option>
            <option value="done">DONE</option>
            <option value="canceled">CANCELED</option>
          </select>
        </form>
        <div
          v-if="todo"
          class="absolute rounded border bg-blue-300 bottom-[2px] left-[-4px] px-4 py-2 mx-2"
        >
          <span class="text-white">TODO</span>
          <font-awesome-icon
            :class="showCloseIconInStatus ? 'inline' : 'hidden'"
            @click="notShowTodo"
            class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
            icon="fa-xmark"
          ></font-awesome-icon>
        </div>
        <div
          v-if="in_progress"
          class="absolute rounded bg-yellow-500 bottom-[2px] left-[-4px] px-2 py-2 mx-2"
        >
          <span class="text-white">EN COURS</span>
          <font-awesome-icon
            v-if="showCloseIconInStatus"
            @click="notShowInProgress"
            class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
            icon="fa-xmark"
          ></font-awesome-icon>
        </div>
        <div
          @click="notShowLow"
          v-if="waiting"
          class="absolute rounded bg-orange-700 bottom-[2px] left-[-4px] px-2 py-2 mx-2"
        >
          <span class="text-white">EN ATTENTE</span>
          <font-awesome-icon
            v-if="showCloseIconInStatus"
            @click="notShowWaiting"
            class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
            icon="fa-xmark"
          ></font-awesome-icon>
        </div>
        <div
          @click="notShowLow"
          v-if="done"
          class="absolute rounded bg-green-700 bottom-[2px] left-[-4px] px-4 py-2 mx-2"
        >
          <span class="text-white">TERMINÉE</span>
          <font-awesome-icon
            v-if="showCloseIconInStatus"
            @click="notShowDone"
            class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
            icon="fa-xmark"
          ></font-awesome-icon>
        </div>
        <div
          @click="notShowLow"
          v-if="canceled"
          class="absolute rounded bg-gray-400 bottom-[2px] left-[-4px] px-4 py-2 mx-2"
        >
          <span class="text-white">ANNULÉE</span>
          <font-awesome-icon
            v-if="showCloseIconInStatus"
            @click="notShowCanceled"
            class="absolute bottom-[10px] right-[-24px] cursor-pointer bg-slate-200 rounded-full px-1 py-[2px]"
            icon="fa-xmark"
          ></font-awesome-icon>
        </div>
      </td>
    </tr>
  </table>
  <div
    @click="hiddenBackgroundAndDetail"
    v-if="deleteBackground"
    class="border absolute h-full top-[47px] w-full"
  ></div>
  <modal-detail v-if="detailOfTask"></modal-detail>
</template>

<script setup lang="ts">
import ModalDetail from "../ModalDetail/ModalDetail.vue";
import {
  nameOfTask,
  showInput,
  showValueOfInput,
  onSubmit,
  onClick,
  showIconAndBorder,
  priority,
  date,
  showChoicePriority,
  showOrNotPriorityChoice,
  notShowHigh,
  notShowAverage,
  notShowLow,
  High,
  Average,
  Low,
  showCloseIcon,
  status,
  showChoiceStatus,
  todo,
  in_progress,
  waiting,
  done,
  showOrNotStatusChoice,
  canceled,
  notShowTodo,
  showCloseIconInStatus,
  notShowInProgress,
  notShowWaiting,
  notShowDone,
  notShowCanceled,
  detailOfTask,
  showDetailOrNot,
  hiddenBackgroundAndDetail,
  deleteBackground,
} from "./ListeTask";
// import { ref } from "vue";
</script>
