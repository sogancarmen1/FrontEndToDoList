<script>
    import { ref, onMounted } from "vue";
    import AddTaskPage from "./AddTaskPage.vue";
    import VoirProfil from "./VoirProfil.vue";
    import VoirDetailTask from "./VoirDetailTask.vue";
    import UpdateTask from "./UpdateTask.vue";
    import LogoPage from "./LogoPage.vue";
    export default {
        data() {
            return {
                tasks: [
                    {id: 1, isSelected:false, name: "djbfrej", dueDate: "2020-2-05", priority: "High", status: "in_progress"},
                    {id: 2, isSelected:false, name: "hezfvyuer", dueDate: "2020-2-05", priority: "High", status: "done"}
                ],
                projects: [
                    {
                        id: 1,
                        nameOfProject: "My_project",
                        isSelectedProject: true,
                        reveleTaskList: false,
                        listOfTask: [
                            {id: 1, isSelected:false, valueFormat:"", name: "SoganCarmengdvgezdbnzvfze", dueDate: "2020-2-05", priority: "High", status: "in_progress"},
                            {id: 2, isSelected:false, valueFormat:"", name: "SoganSenami", dueDate: "2020-2-05", priority: "Average", status: "done"}
                        ]
                    },
                    {
                        id: 2,
                        nameOfProject: "My_project2",
                        isSelectedProject: true,
                        reveleTaskList: false,
                        listOfTask: [
                            {id: 1, isSelected:false, valueFormat:"", name: "Carmen", dueDate: "2020-2-05", priority: "Low", status: "todo"}
                        ]
                    },
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
                isChecked: false,
                reveleButtonUpDown: false,
                reveleButtonDropDown: true,
            }
        },

        components: {
            'addtask': AddTaskPage,
            'voirprofil': VoirProfil,
            'voirdetail': VoirDetailTask,
            'updatetask': UpdateTask,
            'logopage': LogoPage,
        },

        methods: {
            //Chercher comment formatter le code
            formateTaskName() {
                this.projects.forEach(project => {
                    project.listOfTask.forEach(task => {
                        if (task.name.length > 12) {
                            task.formattedName = task.name.slice(0, 12) + "...";
                        } else {
                            task.formattedName = task.name;
                        }
                    });
                });
            },

            //Chercher à comprendre cette partie dans ce code, c'est important
            tooglereveleTaskList(projectId) {
                this.projects.forEach(project => {
                    if (project.id === projectId) {
                        project.reveleTaskList = true;
                        project.isSelectedProject = false;
                    }
                });
            },

            toogleNonReveleTaskList(projectId) {
                this.projects.forEach(project => {
                    if (project.id === projectId) {
                        project.reveleTaskList = false;
                        project.isSelectedProject = true;
                    }
                });
            },

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
            },

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
            },
        },

        mounted() {
            this.formateTaskName();
        },
    }
</script>

<template>
    <div class="bg-white rounded-lg">
        <!--L'en-tête-->
        <div class="flex px-8 justify-between border-b shadow-xl py-1">
            <logopage></logopage>
            <div>
                <button @click="toggleProfil" class="py-1">
                    <svg class="w-10"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                </button>
                <voirprofil :toggleProfil="toggleProfil" :reveleProfil="reveleProfil"></voirprofil>
            </div>
        </div>
        <div class="flex">
            <div class="shadow-2xl border-black/30 h-screen w-1/6">
                <div class="my-8 flex flex-col space-y-2">
                    <button class="flex mx-8 px-4 py-2 space-x-4 hover:rounded-xl hover:bg-gray-300/50">
                        <svg class="w-8"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"/></svg>
                        <span class="font-bold">Project</span>
                    </button>
                    <button class="flex mx-8 px-4 py-2 space-x-2 hover:rounded-xl hover:bg-gray-300/50">
                        <svg class="w-8 "
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        <span class="font-bold">Settings</span>
                    </button>
                </div>
            </div>
            <div class="justify-center w-5/6 py-4">
                <!--Le bouton createTask-->
                <div class="px-8">
                    <div class="flex justify-between">
                        <div><h1 class="font-bold px-2 py-4">My projects</h1></div>
                        <div class="flex space-x-2">
                            <div>
                                <button @click="" class="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Create project
                                </button>
                            </div>
                            <div>
                                <button @click="toggleModale" class="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Create task
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--L'affichage des listes de taches elles même-->
                <div class="px-8 my-2">
                    <table class="w-full text-sm text-left text-gray-500">
                        <thead class="text-xs text-black bg-gray-50">
                            <tr class="">
                                <th class="px-2 py-3 w-40">Project Name</th>
                                <th class="px-2 w-40 py-3">Task Name</th>
                                <th class="px-2 w-40 py-3">Due Date</th>
                                <th class="px-2 w-40 py-3">Priority</th>
                                <th class="py-3">Status</th>
                            </tr>
                        </thead>
                    </table>

                    <table class="w-full text-sm text-left text-gray-500">
                        <tbody class="text-xs text-black">
                            <tr v-for="project in projects" :key="project.id">
                                <div class="flex justify-between border rounded-xl bg-gray-50 my-2">
                                    <div class="px-4 py-3">{{ project.nameOfProject }}</div>
                                    <div>
                                        <button v-show="project.isSelectedProject" @click="tooglereveleTaskList(project.id)" class="py-1 my-2 mx-4 px-2 border rounded-full">
                                            <svg class="w-3"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                        </button>
                                        <button v-show="project.reveleTaskList" @click="toogleNonReveleTaskList(project.id)" class="absolute right-8 py-1 my-2 mx-4 px-2 border rounded-full">
                                            <svg class="w-3"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>
                                        </button>
                                    </div>
                                </div>
                                <tr v-show="project.reveleTaskList" v-for="task in project.listOfTask" :key="task.id" class="border-b flex space-x-20">
                                    <td class="px-9 pt-2 w-16">
                                        <label for="myCheckbox"></label>
                                        <input type="checkbox" id="myCheckbox" v-model="isChecked">
                                    </td>
                                    <td class="px-4 pt-2 w-20 font-medium text-gray-900">{{ task.name }}</td>
                                    <td class="px-4 pt-2 w-22 font-medium text-gray-900">{{ task.dueDate }}</td>
                                    <td class="px-4 pt-2 w-16 font-medium text-gray-900">{{ task.priority }}</td>
                                    <td class="px-4 pt-2 w-24 font-medium text-gray-900">{{ task.status }}</td>
                                    <td class="pb-2 flex w-16 space-x-2">
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <addtask @form-submitted="handleFormSubmitted" :revele="revele" :toggleModale="toggleModale"></addtask>
    <voirdetail :tasks="tasks" :reveledetails="reveledetails" :tooglereveledetail="tooglereveledetail"></voirdetail>
    <updatetask @form-submitted-update="formSubmittedUpdate" :reveleUpdateTask="reveleUpdateTask" :tooglereveleUpdateTask="tooglereveleUpdateTask" :nameUpdate="nameUpdate" :dueDateUpdate="dueDateUpdate" :priorityUpdate="priorityUpdate" :statusUpdate="statusUpdate"></updatetask>
</template>

<style scoped>
</style>