<script>
    export default {
        props: ['isDark', 'reveleRemoveProject', 'toogleReveleRemoveProject', 'projects', 'deleteProject', 'deleteTask'],
    }
</script>

<template>
    <div v-if="reveleRemoveProject" class="flex items-center justify-center h-screen fixed top-0 bottom-0 right-0 left-0">
        <div @click="toogleReveleRemoveProject" class="bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 right-0 left-0"></div>
        <div :class="{ dark: isDark }" class="dark:bg-black/90 space-y-2 rounded-lg bg-white shadow-2xl fixed">
            <button @click="toogleReveleRemoveProject" class="w-5 py-4 absolute right-4">
                <svg
                    :class="{ dark: isDark }"
                    class="dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.021 512.021"
                    style="enable-background: new 0 0 512.021 512.021"
                    xml:space="preserve"
                    width="20"
                    height="20"
                    >
                    <g>
                        <path
                        d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"
                        />
                    </g>
                    </svg>
            </button>
            <!-- <div class="flex"> -->
                <div class="px-8 pt-4 flex items-center flex-none">
                    <p class="" v-for="project in projects" :key="project.id">
                        <div v-if="project.isProjectSelected" class="text-sm font-medium">
                            <p>
                                <span :class="{ 'dark': isDark }" class="text-2xl font-bold dark:text-white text-gray-800 text-center">Delete <span class="font-bold text-xl text-red-700">{{ project.nameOfProject }}</span> ?</span>
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