<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    tasks: {
        type: Object,
        // required: true
    }
});
</script>

<template>
    <!-- <routerView></routerView> -->
    <div class="bg-white relative border rounded-lg">
        <!-- Tables des tâches -->
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Due Date</th>
                    <th class="px-4 py-3">Priority</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in props.tasks" :key="task.id" class="border-b">
                    <td class="px-4 py-3 font-medium text-gray-900">{{ task.name }}</td>
                    <td class="px-4 py-3 font-medium text-gray-900">{{ task.dueDate }}</td>
                    <td class="px-4 py-3 font-medium text-gray-900">{{ task.priority }}</td>
                    <td class="px-4 py-3 font-medium text-gray-900">{{ task.status }}</td>
                    <td class="px-4 py-3">
                        <a href="#" class="text-indigo-500 hover:underline">Details</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>