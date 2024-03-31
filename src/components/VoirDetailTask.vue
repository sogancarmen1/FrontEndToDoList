<script>
    export default {
        props: ['reveledetails', 'tooglereveledetail', 'tasks'],
    }
</script>

<template>
    <div v-if="reveledetails" class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0">
        <div @click="tooglereveledetail" class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"></div>
        <div class="space-y-2 border rounded-lg bg-white shadow-2xl fixed">
            <button @click="tooglereveledetail" class="w-5 py-2 absolute right-3">
                <svg 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
            <!-- <div class="flex"> -->
                <div class="px-8 pt-4 flex items-center flex-none">
                    <div>
                        <div>
                            <p class="text-md text-green-700 underline">Détails de la tâche</p>
                            <p v-for="task in tasks" :key="task.id">
                                <div v-if="task.isSelected" class="text-sm font-medium">
                                    <p><span class="text-slate-700">Name</span> : {{ task.name }}</p>
                                    <p><span class="text-red-700">Due Date</span> : {{ task.dueDate }}</p>
                                    <p><span class="text-red-700">Priority</span> : {{ task.priority }}</p>
                                    <p><span class="text-red-700">Status</span> : {{ task.status }}</p>
                                </div>
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