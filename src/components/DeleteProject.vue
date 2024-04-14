<script>
    export default {
        props: ['reveleRemoveProject', 'toogleReveleRemoveProject', 'projects', 'deleteProject', 'deleteTask'],
    }
</script>

<template>
    <div v-if="reveleRemoveProject" class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0">
        <div @click="toogleReveleRemoveProject" class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"></div>
        <div class="bg-black/90 space-y-2 rounded-lg dark:bg-white shadow-2xl fixed">
            <button @click="toogleReveleRemoveProject" class="w-5 py-2 absolute right-3">
                <svg 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
            <!-- <div class="flex"> -->
                <div class="px-8 pt-4 flex items-center flex-none">
                    <p class="" v-for="project in projects" :key="project.id">
                        <div v-if="project.isProjectSelected" class="text-sm font-medium">
                            <p>
                                <span class="text-2xl font-bold text-white dark:text-gray-800 text-center">Delete <span class="font-bold text-xl dark:text-red-700 text-white">{{ project.nameOfProject }}</span>?</span>
                                <p class="py-4 text-red-800">All tasks will be removed in project.</p>
                            </p>
                            <div class="py-5 flex space-x-4">
                                <button @click="deleteProject(project.id)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                                    yes
                                </button>
                                <button @click="toogleReveleRemoveProject" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                                    no
                                </button>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
</template>

<style>
</style>