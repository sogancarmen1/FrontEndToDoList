<script>
    import { ref, onMounted } from "vue";
    import AddTaskPage from "./AddTaskPage.vue";
    import VoirProfil from "./VoirProfil.vue";
    import VoirDetailTask from "./VoirDetailTask.vue";
    import UpdateTask from "./UpdateTask.vue";
    export default {
        data() {
            return {
                tasks: [
                    {id: 1, isSelected:false, name: "djbfrej", dueDate: "2020-2-05", priority: "High", status: "in_progress"},
                    {id: 2, isSelected:false, name: "hezfvyuer", dueDate: "2020-2-05", priority: "High", status: "done"}
                ],
                revele: false,
                receivedId: {},
                reveleProfil: false,
                reveledetails: false,
                reveleUpdateTask: false,
                nameUpdate: "",
                dueDateUpdate: "",
                priorityUpdate: "",
                statusUpdate: "",
                count: 3,
            }
        },

        components: {
            'addtask': AddTaskPage,
            'voirprofil': VoirProfil,
            'voirdetail': VoirDetailTask,
            'updatetask': UpdateTask,
        },

        methods: {
            tooglereveledetail(value) {
                this.reveledetails = !this.reveledetails;
                this.tasks.forEach(task => {
                    task.isSelected = false;
                });
                const selectedTask = this.tasks.find(task => task.id === value);
                if (selectedTask) {
                    selectedTask.isSelected = true;
                }
            },

            toggleProfil() {
                this.reveleProfil = !this.reveleProfil;
            },

            toggleModale() {
                this.revele = !this.revele;
            },

            tooglereveleUpdateTask(value) {
                this.reveleUpdateTask = !this.reveleUpdateTask;
                this.tasks.forEach(task => {
                    task.isSelected = false;
                });
                let selectedTaskIndex = this.tasks.findIndex(task => task.id === value);
                if (selectedTaskIndex !== -1) {
                    var selectedTask = this.tasks[selectedTaskIndex];
                    selectedTask.isSelected = true;
                    this.nameUpdate = selectedTask.name;
                    this.dueDateUpdate = selectedTask.dueDate;
                    this.priorityUpdate = selectedTask.priority;
                    this.statusUpdate = selectedTask.status;
                }
                return selectedTask;
            },

            formSubmittedUpdate(data) {
                const selectedTask = this.tasks.find(task => task.id === data);
                console.log("this value : ", selectedTask);
            },


            // formSubmittedUpdate(data) {
            //     let selectedTaskIndex = this.tasks.find(task => task.id === data);
            //     console.log("thos value", selectedTaskIndex);
            // },

            handleFormSubmitted(data) {
                this.receivedId = {
                    id: this.count++,
                    name: data.name,
                    dueDate: data.dueDate,
                    priority: data.priority,
                    status: data.status,
                    isSelected: false,
                };
                const isExist = this.tasks.some(task => {
                    task.name === this.receivedId.name &&
                    task.dueDate === this.receivedId.dueDate &&
                    task.priority === this.receivedId.priority &&
                    task.status === this.receivedId.status
                });
                if(!isExist) {
                    this.tasks.push(this.receivedId);
                }
            },

            deleteTask(value) {
                const selectedTaskIndex = this.tasks.findIndex(task => task.id === value);
                if(selectedTaskIndex != -1) {
                    this.tasks.splice(selectedTaskIndex, 1);
                }
                console.log("Value of selected task : ", selectedTaskIndex);
            },
        },
    }
</script>

<template>
    <div class="bg-white px-8 rounded-lg">
        <div class="flex justify-between py-4">
            <button @click="toggleModale" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Create task
            </button>
            <div>
                <button @click="toggleProfil" class="">
                    <svg class="w-10"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                </button>
                <voirprofil :toggleProfil="toggleProfil" :reveleProfil="reveleProfil"></voirprofil>
            </div>
        </div>
        <div class="border shadow-2xl rounded-md px-4">
            <div class="border-b mt-2 text-sm"><button class="border-b border-blue-800 px-2">List of tasks</button></div>
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
                    <tr v-for="task in tasks" :key="task.id" class="border-b">
                        <td class="px-4 py-3 font-medium text-gray-900">{{ task.name }}</td>
                        <td class="px-4 py-3 font-medium text-gray-900">{{ task.dueDate }}</td>
                        <td class="px-4 py-3 font-medium text-gray-900">{{ task.priority }}</td>
                        <td class="px-4 py-3 font-medium text-gray-900">{{ task.status }}</td>
                        <td class="py-3 flex space-x-2">
                            <button @click="tooglereveledetail(task.id)" class="border hover:bg-gray-100 border-black/20 p-1 rounded-md">
                                <svg class="w-5"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                            </button>
                            <button @click="tooglereveleUpdateTask(task.id)" class="border hover:bg-gray-100 p-1 rounded-md border-black/20">
                                <svg class="w-4"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
                            </button>
                            <button @click="deleteTask(task.id)" class="border hover:bg-gray-100 p-1 rounded-md border-black/20">
                                <svg class="w-4"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <addtask @form-submitted="handleFormSubmitted" :revele="revele" :toggleModale="toggleModale"></addtask>
    <voirdetail :tasks="tasks" :reveledetails="reveledetails" :tooglereveledetail="tooglereveledetail"></voirdetail>
    <updatetask @form-submitted-update="formSubmittedUpdate" :reveleUpdateTask="reveleUpdateTask" :tooglereveleUpdateTask="tooglereveleUpdateTask" :nameUpdate="nameUpdate" :dueDateUpdate="dueDateUpdate" :priorityUpdate="priorityUpdate" :statusUpdate="statusUpdate"></updatetask>
</template>

<style scoped>
</style>