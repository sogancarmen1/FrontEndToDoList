<template>
  <div class="absolute bg-white border top-[47px] right-0 h-full text-sm">
    <div class="flex space-x-[80px] my-4 mx-4">
      <div
        class="border rounded hover:bg-slate-100 cursor-pointer hover:text-green-800 hover:border-green-800"
      >
        <font-awesome-icon class="px-1" icon="fa-check"></font-awesome-icon>
        <span class="px-1">Marquer comme terminée</span>
      </div>
      <div class="flex space-x-3">
        <div class="hover:rounded hover:bg-slate-50 cursor-pointer">
          <font-awesome-icon
            class="px-1"
            icon="fa-paperclip"
          ></font-awesome-icon>
        </div>
        <div class="hover:rounded hover:bg-slate-50 cursor-pointer">
          <font-awesome-icon
            class="px-1"
            icon="fa-ellipsis"
          ></font-awesome-icon>
        </div>
        <div
          @click="hiddenBackgroundAndDetail"
          class="hover:rounded hover:bg-slate-50 cursor-pointer"
        >
          <font-awesome-icon class="px-1" icon="xmark"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="border-t bg-slate-100 py-[10px] px-4">
      <font-awesome-icon icon="fa-lock" class="px-2"></font-awesome-icon>
      <span>Cette tâche est visible par : ses collaborateurs</span>
    </div>
    <div class="relative w-22">
      <h1
        class="absolute my-8 mx-6 text-3xl font-bold overflow-hidden text-ellipsis"
      >
        {{
          nameOfTask.length > 18 ? nameOfTask.slice(0, 18) + "..." : nameOfTask
        }}
      </h1>
      <div class="text-sm absolute my-20 mx-4">
        <ul class="" v-for="detail in details" :key="detail.name">
          <li class="py-2">
            <span class="w-2">{{ detail.name }}</span>
          </li>
        </ul>
      </div>
      <div class="text-sm absolute left-40 my-20 mx-4">
        <ul class="" v-for="detail in details" :key="detail.name">
          <li class="py-2">
            <span class="font-bold">{{
              Number(detail.value?.length) > 20
                ? detail.value?.slice(0, 20) + "..."
                : detail.value
            }}</span>
          </li>
        </ul>
      </div>
      <div
        class="text-sm absolute w-82 overflow-hidden text-ellipsis mx-4 top-[340px]"
      >
        <ul class="" v-for="detail in details" :key="detail.name">
          <li class="">
            <span class="font-bold">{{
              Number(detail.description?.length) > 154
                ? detail.description?.slice(0, 154) + "..."
                : detail.description
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="absolute bottom-2 right-[98px]">
    <font-awesome-icon
      icon="fa-circle-info"
      class="text-black/50"
    ></font-awesome-icon>
    <span class="px-2 text-sm text-black/50">Information sur une tâche</span>
  </div>
</template>

<script setup lang="ts">
import { details } from "./ModalDetail";
import { hiddenBackgroundAndDetail } from "../ListeTask/ListeTask";
import { ref } from "vue";

const nameOfTask = ref("Le nom de la tâche ejhdgfyuezdvsyuchgs");
</script>
