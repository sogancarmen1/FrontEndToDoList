<script setup lang="ts">
// Chercher comment afficher tout le texte lorsque la souris passe au dessus de ce dernier.
// J'ai des choses à comprendre ici et c'est important avant de continuer avec le code.
function onSubmit() {}
const data = [
        {column1:"Texte vraiment vraiment vraiment vraimentvraimentvraimentvraiment"}
      ]
function truncateText(text:string, maxLength:number) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}
</script>

<template>
    <div class="flex justify-between mx-28 pt-2 border-b">
        <div class="flex space-x-1 border-b-2 border-blue-500">
            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
            <span class="text-xl">List</span>
        </div>
        <div class="flex space-x-4">
            <div class="flex space-x-1">
                <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <span class="text-xl">Search</span>
            </div>
            <div>
                <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
            </div>
        </div>
    </div>
    <div class="flex justify-between mx-28">
        <span></span>
        <button @click="onSubmit" class="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Ajouter une tâche
        </button>
    </div>
    <table class="table-fixed mx-28">
        <thead>
            <tr>
                <th class="hover:bg-slate-100">Name</th>
                <th class="hover:bg-slate-100 px-28">Date d'échéance</th>
                <th class="hover:bg-slate-100 px-28">Priority</th>
                <th class="hover:bg-slate-100 px-28">Status</th>
                <th class="px-[70px]"></th>
            </tr>
        </thead>
        <tbody>
            <!-- J'ai des choses à comprendre ici et c'est important -->
            <tr v-for="(row, index) in data" :key="index">
                <td class="text-nowrap">{{ truncateText(row.column1, 40) }}</td>
                <td class="text-center">Malcolm Lockyer</td>
                <td>1961</td>
            </tr>
            <tr>
            <td class="text-center">Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            </tr>
            <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>