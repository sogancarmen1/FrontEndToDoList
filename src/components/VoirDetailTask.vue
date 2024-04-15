<script>
    export default {
        props: ['isDark', 'reveledetails', 'tooglereveledetail', 'projects'],
    }
</script>

<template>
    <div v-if="reveledetails" class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0">
        <div @click="tooglereveledetail" class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"></div>
        <div :class="{ 'dark': isDark }" class="dark:bg-black/90 space-y-2 border dark:border-none rounded-lg bg-white shadow-2xl fixed">
            <button @click="tooglereveledetail" class="w-5 py-4 absolute right-5">
                <svg :class="{ 'dark': isDark }" class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="20" height="20">
                    <g>
                        <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
                    </g>
                </svg>
            </button>
            <!-- <div class="flex"> -->
                <div class="px-8 pt-4 flex items-center flex-none">
                    <div>
                        <div>
                            <p class="text-md text-green-700 underline">Détails de la tâche</p>
                            <p v-for="project in projects" :key="project.id">
                                <p v-for="task in project.listOfTask" :key="task.id">
                                    <div v-if="task.isSelected" class="text-sm font-medium">
                                        <p :class="{ 'dark': isDark }" class="text-md dark:text-white"><span class="text-red-700">In project</span> : {{ project.nameOfProject }}</p>
                                        <p :class="{ 'dark': isDark }" class="text-md dark:text-white"><span class="text-slate-700">Name</span> : {{ task.name }}</p>
                                        <p :class="{ 'dark': isDark }" class="text-md dark:text-white"><span class="text-red-700">Due Date</span> : {{ task.dueDate }}</p>
                                        <p :class="{ 'dark': isDark }" class="text-md dark:text-white"><span class="text-red-700">Priority</span> : {{ task.priority }}</p>
                                        <p :class="{ 'dark': isDark }" class="text-md dark:text-white"><span class="text-red-700">Status</span> : {{ task.status }}</p>
                                    </div>
                                </p>
                            </p>
                        </div>
                        <div class="py-5">
                            <button @click="tooglereveledetail" class="mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
</style>