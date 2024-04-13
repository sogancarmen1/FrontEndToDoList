<script>
export default {
  props: ["isHovered", "valueSend"],
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<template>
  <!-- v-if="isHovered" -->
  <div class="flex space-x-2" v-if="valueSend">
    <button
      class="rounded-md px-3 mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1"
    >
      Modified
    </button>
    <button
      class="rounded-md px-3 py-1 mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
    >
      Delete
    </button>
  </div>
</template>

<style></style>
