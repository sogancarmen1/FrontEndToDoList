<script>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
export default {
  data() {
    return {
      nameValue: "",
      emailValue: "",
      password: "",
      confirmPassword: "",
      isEqual: false,
      isNotCorrectEmail: false,
      emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      isEmpty: false,
      isDark,
    }
  },

  methods: {
    onSubmit() {
        if(this.password != this.confirmPassword) {
            this.isEqual = true;
        }
        else {
            this.isEqual = false;
        }
        if(this.emailRegex.test(this.emailValue) == false && this.emailValue != "") {
            this.isNotCorrectEmail = true;
        }
        else {
            this.isNotCorrectEmail = false;
        }
        if(this.nameValue == "" || this.emailValue == "" || this.password == "" || this.confirmPassword == "") {
            this.isEmpty = true;
        }
        else {
            this.isEmpty = false;
        }
        if(this.isEqual == false && this.isNotCorrectEmail ==  false && this.isEmpty == false) {
            this.$router.push("/");
        }
        // console.log("Value of show error : ", this.isCorrectEmail);
    }
  },
}
</script>

<template>
    <!--
        Faire les vues au niveau des password
    -->
    <div :class="{ 'dark': isDark }" class="dark:bg-black/90 flex items-center justify-center h-screen">
        <div :class="{ 'dark': isDark }" class="dark:border-none space-y-2 border rounded-lg bg-white shadow-2xl">
            <div :class="{ 'dark': isDark }" class="dark:shadow-black flex">
                <div class="">
                    <img class="w-80 rounded-bl-lg rounded-tl-lg" src="../assets/pageDeGarde.jpg" alt="">
                </div>
                <div :class="{ 'dark': isDark }" class="px-8 dark:bg-black/80">
                    <h1
                        :class="{ dark: isDark }"
                        class="text-center font-bold py-4 text-2xl dark:text-white text-gray-800"
                    >
                        Let's go
                    </h1>
                    <div>
                        <p :class="{ 'dark': isDark }" class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Name</p>
                        <input @keyup.enter="onSubmit" :class="{ 'dark': isDark }" v-model="nameValue" placeholder="Enter your name" type="text" class="dark:bg-black/40 dark:text-white mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    </div>
                    <div>
                        <p :class="{ 'dark': isDark }" class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</p>
                        <input @keyup.enter="onSubmit" :class="{ 'dark': isDark }" v-model="emailValue" placeholder="Enter your email" type="email" class="dark:bg-black/40 dark:text-white mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                        <div v-if="isNotCorrectEmail" class="text-center text-sm text-red-500">incorrect email</div>
                    </div>
                    <div>
                        <p :class="{ 'dark': isDark }" class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</p>
                        <input @keyup.enter="onSubmit" v-model="password" placeholder="Enter your password" type="password" class="dark:bg-black/40 dark:text-white mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    </div>
                    <div>
                        <p :class="{ 'dark': isDark }" class="dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Confirm Password</p>
                        <input @keyup.enter="onSubmit" v-model="confirmPassword" placeholder="Confirm password" type="password" class="dark:bg-black/40 dark:text-white mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                        <div v-if="isEqual" class="text-center text-red-600 text-sm">password don't match</div>
                        <div v-if="isEmpty" class="text-center text-red-600">the fiels shouldn't empty</div>
                    </div>
                    <div class="flex items-center mb-4 py-3">
                        <input @keyup.enter="onSubmit" id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I accept <a href="#" class="underline text-blue-500">terms and conditions</a></label>
                    </div>
                    <div class="flex items-center justify-center">
                        <span :class="{ 'dark': isDark }"  class="dark:text-white text-sm mr-2">You have an account?</span>
                        <router-link to="/" class="text-blue-500 hover:underline"
                            >Login</router-link
                        >
                    </div>
                    <div class="py-5">
                        <button :class="{ 'dark': isDark }" @click="onSubmit()" class="dark:shadow-black shadow-2xl mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
                    class="absolute left-0 top-0 w-8 h-8 bg-white dark:bg-black border dark:border-gray-600 rounded-full shadow-md transform transition-transform duration-300"
                ></div>
                </div>
                <!-- Étiquette du mode sombre -->
                <div
                class="ml-3 text-sm text-gray-700 dark:text-white font-medium"
                >
                Dark Mode
                </div>
            </label>
        </div>
        <!-- <div class="px-8">
            <input type="checkbox" v-model="isDark"/>
        </div> -->
    </div>
</template>

<style scoped>
</style>