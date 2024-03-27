<script>
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
      isEmpty: false
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
        // console.log("Value of show error : ", this.isCorrectEmail);
    }
  },
}
</script>

<template>
    <!--
        Faire les vues au niveau des password
    -->
    <div class="flex items-center justify-center h-screen">
        <div class="space-y-2 border rounded-lg bg-white shadow-2xl">
            <div class="flex">
                <div class="">
                    <img class="w-80 rounded-bl-lg rounded-tl-lg" src="../assets/pageDeGarde.jpg" alt="">
                </div>
                <div class="px-8  pt-16">
                    <div>
                        <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Name</p>
                        <input v-model="nameValue" placeholder="Enter your name" type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    </div>
                    <div>
                        <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</p>
                        <input v-model="emailValue" placeholder="Enter your email" type="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                        <div v-if="isNotCorrectEmail" class="text-center text-sm text-red-500">incorrect email</div>
                    </div>
                    <div>
                        <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</p>
                        <input v-model="password" placeholder="Enter your password" type="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    </div>
                    <div>
                        <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Confirm Password</p>
                        <input v-model="confirmPassword" placeholder="Confirm password" type="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                        <div v-if="isEqual" class="text-center text-red-600 text-sm">password don't match</div>
                        <div v-if="isEmpty" class="text-center text-red-600">the fiels shouldn't empty</div>
                    </div>
                    <div class="flex items-center mb-4 py-3">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I accept <a href="#" class="underline text-blue-500">terms and conditions</a></label>
                    </div>
                    <div class="py-5">
                        <button @click="onSubmit()" class="mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>