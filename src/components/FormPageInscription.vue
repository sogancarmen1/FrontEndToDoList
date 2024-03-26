<script setup lang="ts">
const nameValue = "";
const emailValue = "";
const password = "";
const confirmPassword = "";
function onSubmit() {}
</script>

<template>
    <RouterView></RouterView>
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
                <div class="px-8  pt-16">
                    <div>
                        <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Name</p>
                        <input v-model="nameValue" placeholder="Enter your name" type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    </div>
                    <div>
                        <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</p>
                        <input v-model="emailValue" placeholder="Enter your email" type="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    </div>
                    <div>
                        <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</p>
                        <input v-model="password" placeholder="Enter your password" type="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    </div>
                    <div>
                        <p class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Confirm Password</p>
                        <input v-model="confirmPassword" placeholder="Confirm password" type="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
                    </div>
                    <div class="space-x-20">
                        <!-- <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-center px-14" href="#">
                            you have account?
                        </a> -->
                    </div>
                    <div class="flex items-center mb-4 py-3">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I accept <a href="#" class="underline text-blue-500">terms and conditions</a></label>
                    </div>
                    <div class="py-5">
                        <button @click="onSubmit" class="mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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