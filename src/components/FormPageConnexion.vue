<script>
export default {
  data() {
    return {
        emailValue: "",
        password: "",
        showError: false
    }
  },

  methods: {
    onSubmit() {
        if(this.emailValue != "admin@gmail.com" || this.password != "admin") {
            this.showError = true;
        }
        else {
            this.showError = false;
        }
    }
  },
}
</script>


<template>
    <!--
        Faire la vérification au niveau de l'email (afficher le message en bas), faire le voir au niveau du password, 
        Vérifier si les données entré au niveau du password respect un certain regex? (Faire le message pour ça)
        Vérifier si les données entré au niveau du password sont correctes? (Faire le message pour ça)
        Faire les vues au niveau des password
    -->
    <div class="flex items-center justify-center h-screen">
        <div class="space-y-2 border rounded-lg bg-white shadow-2xl">
            <div class="flex">
                <div class="">
                    <img class="w-80 rounded-bl-lg rounded-tl-lg" src="../assets/pageDeGarde.jpg" alt="">
                </div>
                <div class="px-8 pt-16 flex items-center flex-none">
                    <div>
                        <div>
                            <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</p>
                            <input v-model="emailValue" placeholder="Enter your email" type="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                        </div>
                        <div>
                            <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</p>
                            <input v-model="password" placeholder="Enter your password" type="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                        </div>
                        <div v-if="showError" class="text-sm text-red-700 text-center py-2">Email or password invalid</div>
                        <router-link v-if="showError" to="/home"></router-link>
                        <div class="py-5">
                            <button @click="onSubmit" class="mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Log in
                            </button>
                        </div>
                        <div class="flex items-center justify-center">
                            <span class="text-sm mr-2">Don't have an account?</span>
                            <router-link to="/register" class="text-blue-500 hover:underline">Create now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>