<script>
import { useDark, useToggle } from "@vueuse/core";
import { postData } from "../utils/utils";
import axios from "axios";
const isDark = useDark();
const toggleDark = useToggle(isDark);
import Cookies from "js-cookie";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
export default {
  props: [""],
  data() {
    return {
      emailValue: "",
      password: "",
      showError: false,
      isDark,
    };
  },

  methods: {
    async onSubmit() {
      const value = await postData("http://localhost:3000/auth/login", {
        email: this.emailValue,
        password: this.password,
      });
      if (value.data != null) {
        const userStore = useUserStore();
        userStore.setUserData(value.data.data);
        this.$router.push("/home");
      }
    },
  },
};
</script>

<template>
  <!--
        Faire la vérification au niveau de l'email (afficher le message en bas), faire le voir au niveau du password, 
        Vérifier si les données entré au niveau du password respect un certain regex? (Faire le message pour ça)
        Vérifier si les données entré au niveau du password sont correctes? (Faire le message pour ça)
        Faire les vues au niveau des password
    -->
  <div
    :class="{ dark: isDark }"
    class="dark:bg-black/90 flex items-center justify-center h-screen"
  >
    <div
      :class="{ dark: isDark }"
      class="space-y-2 dark:border-none border rounded-lg bg-white shadow-2xl"
    >
      <div :class="{ dark: isDark }" class="dark:shadow-black flex">
        <div class="">
          <img
            class="w-80 rounded-bl-lg rounded-tl-lg"
            src="../assets/pageDeGarde.jpg"
            alt=""
          />
        </div>
        <div
          :class="{ dark: isDark }"
          class="dark:bg-black/80 px-8 pt-16 flex items-center flex-none"
        >
          <div>
            <h1
              :class="{ dark: isDark }"
              class="text-center font-bold py-4 text-2xl dark:text-white text-gray-800"
            >
              Welcome
            </h1>
            <div>
              <p
                :class="{ dark: isDark }"
                class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
              >
                Email
              </p>
              <input
                :class="{ dark: isDark }"
                @keyup.enter="onSubmit"
                v-model="emailValue"
                placeholder="Enter your email"
                type="email"
                class="dark:bg-black/40 dark:text-white mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </div>
            <div>
              <p
                :class="{ dark: isDark }"
                class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
              >
                Password
              </p>
              <input
                :class="{ dark: isDark }"
                @keyup.enter="onSubmit"
                v-model="password"
                placeholder="Enter your password"
                type="password"
                class="dark:bg-black/40 dark:text-white mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </div>
            <div v-if="showError" class="text-sm text-red-700 text-center py-2">
              Email or password invalid
            </div>
            <div class="py-5">
              <button
                :class="{ dark: isDark }"
                @click="onSubmit"
                class="shadow-xl dark:shadow-black/50 mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log in
              </button>
            </div>
            <div class="flex items-center justify-center">
              <span
                :class="{ dark: isDark }"
                class="dark:text-white text-sm mr-2"
                >Don't have an account?</span
              >
              <router-link to="/register" class="text-blue-500 hover:underline"
                >Create now</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="px-8">
      <label for="check">
        <input class="" id="check" type="checkbox" v-model="isDark" />
      </label>
    </div> -->
    <div class="absolute bottom-4 right-4">
      <label for="darkModeToggle" class="flex items-center cursor-pointer">
        <div class="relative">
          <!-- Checkbox caché -->
          <input
            id="darkModeToggle"
            type="checkbox"
            class="hidden"
            v-model="isDark"
          />
          <!-- Barre de commutation -->
          <div
            class="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner"
          ></div>
          <!-- Curseur -->
          <div
            class="absolute left-0 top-0 w-8 h-8 bg-white dark:bg-black border dark:border-gray-600 rounded-full shadow-md transform ease-out transition-transform duration-300"
          ></div>
        </div>
        <!-- Étiquette du mode sombre -->
        <div class="ml-3 text-sm text-gray-700 dark:text-white font-medium">
          Dark Mode
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped></style>
