<script>
import axios from "axios";
import { postData } from "../utils/utils";

export default {
  props: ["reveleProfil", "toggleProfil"],
  data() {
    return {};
  },

  components: {},

  methods: {
    async onSubmit() {
      await postData(
        "http://localhost:3000/auth/logout"
      );
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div v-if="reveleProfil" class="fixed top-12 right-2">
    <ul class="">
      <li>
        <button
          @click="onSubmit"
          class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        >
          Se déconnecter
        </button>
      </li>
    </ul>
  </div>
</template>

<style></style>
