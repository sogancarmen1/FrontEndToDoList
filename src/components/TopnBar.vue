<template>
  <header
    class="bg-black/85 px-5 sm:px-9 border-b border-opacity-10 border-white"
  >
    <div class="flex justify-between py-2">
      <div class="flex gap-2">
        <icon-view
          @click="$emit('toggle-sidebar')"
          classProp="text-white"
          iconProp="fa-solid fa-bars"
          title="Masquer la barre latérale"
        />
        <!-- Button create -->
        <div
          class="flex gap-1 rounded-2xl px-1 sm:bg-white/30 sm:border cursor-pointer transition easy-in-out"
        >
          <icon-view
            classProp="text-red-300 rounded-full"
            iconProp="fa-solid fa-circle-plus"
          />
          <span class="hidden text-white sm:inline text-md font-zen"
            >Create</span
          >
        </div>
      </div>
      <!-- Search bar -->
      <div
        class="flex gap-1 bg-white/50 rounded-2xl w-full mx-2 px-4 py-[2px] sm:w-80 transition-all duration-500 ease-in-out"
      >
        <icon-view
          classProp="block float-left text-white cursor-pointeur"
          iconProp="fa-solid fa-magnifying-glass"
        />
        <input
          type=""
          placeholder="Search"
          class="outline-none bg-transparent text-base w-full text-white"
        />
      </div>
      <div class="flex gap-0 cursor-pointer">
        <icon-view classProp="text-white" iconProp="fa-user" />
        <icon-view classProp="text-white" iconProp="fa-solid fa-caret-down" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconView from "./IconView.vue";
</script>
