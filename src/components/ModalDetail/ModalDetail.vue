<template>
  <div class="absolute bg-white border top-[47px] right-0 h-full text-sm">
    <div class="py-2 mx-12">
      <div @click="hiddenBackgroundAndDetail" class="cursor-pointer">
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
      <div class="text-sm absolute left-[100px] my-20 mx-4">
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
        class="text-sm absolute w-82 overflow-hidden top-[80px] left-[300px] text-ellipsis mx-4"
      >
        <div>Description</div>
        <!-- v-if="showInputDescription" -->
        <textarea
          v-if="showInputDescription"
          v-model="description"
          rows="15"
          cols="35"
          class="border rounded-md shadow-lg resize-none focus:outline-none focus:ring-2"
          style="width: 100%; height: auto"
          name=""
          id=""
        ></textarea>
        <p
          class="border border-white hover:border-black/20 w-[301px] h-[301px] rounded-md top-[20px] shadow-lg focus:outline-none focus:ring-2"
          v-if="showValueOfDescription"
          @click="clickValue"
        >
          {{ description }}
        </p>
      </div>
      <button
        @click="addDescription"
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
const description = ref("");
const nameOfTask = ref("Le nom de la tâche ejhdgfyuezdvsyuchgs");
const showInputDescription = ref(false);
const showValueOfDescription = ref(true);
function addDescription() {
  showInputDescription.value = false;
  showValueOfDescription.value = true;
}
function clickValue() {
  showInputDescription.value = true;
  showValueOfDescription.value = false;
}
</script>
