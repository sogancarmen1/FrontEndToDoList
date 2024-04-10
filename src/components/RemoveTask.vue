<script>
    export default {
        props: ['reveleRemovePage', 'toogleReveleRemovePage', 'projects', 'deleteTask'],
    }
</script>

<template>
    <div v-if="reveleRemovePage" class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0">
        <div @click="toogleReveleRemovePage" class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"></div>
        <div class="space-y-2 border rounded-lg bg-white shadow-2xl fixed">
            <button @click="toogleReveleRemovePage" class="w-5 py-2 absolute right-3">
                <svg 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
            <!-- <div class="flex"> -->
                <div class="px-8 pt-4 flex items-center flex-none">
                    <div>
                        <div>
                            <p v-for="project in projects" :key="project.id">
                                <p v-for="task in project.listOfTask" :key="task.id">
                                    <div v-if="task.isSelected" class="text-sm font-medium">
                                        <p>
                                            <span class="text-2xl font-bold text-gray-800 text-center">Delete task</span>
                                            <p class="py-4"><span class="text-red-900 font-bold text-xl">{{ task.name }}</span> <span >in project</span> <span class="font-bold text-xl text-red-900">{{ project.nameOfProject }}</span> ?</p>
                                        </p>
                                        <div class="py-5 flex justify-between">
                                            <button @click="deleteTask(task.id, project.id)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                                                yes
                                            </button>
                                            <button @click="toogleReveleRemovePage" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                                                no
                                            </button>
                                        </div>
                                    </div>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
</style>