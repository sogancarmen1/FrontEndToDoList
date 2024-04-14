<script>
    import { ref, onMounted } from "vue";
    import AddTaskPage from "./AddTaskPage.vue";
    import VoirProfil from "./VoirProfil.vue";
    import VoirDetailTask from "./VoirDetailTask.vue";
    import UpdateTask from "./UpdateTask.vue";
    import LogoPage from "./LogoPage.vue";
    import AddProjectPage from "./AddProjectPage.vue";
    import SettingsPage from "./SettingsPage.vue";
    import RemoveTask from "./RemoveTask.vue";
    import ParametersProjectPage from "./ParametersProjectPage.vue";
    import VoirDetailParametersProject from "./VoirDetailParametersProject.vue";
    import DeleteProject from "./DeleteProject.vue";
    import UpdateProjectPage from "./UpdateProjectPage.vue";
    import { useDark, useToggle } from "@vueuse/core";
    const isDark = useDark();
    const toggleDark = useToggle(isDark)
    export default {
        data() {
            return {
                projects: [
                    // {
                    //     id: 1,
                    //     nameOfProject: "My_project",
                    //     isSelectedProject: true,
                    //     reveleTaskList: false,
                    //     listOfTask: [
                    //         // {id: 1, isSelected:false, nameFormatted:"", name: "Sogan", dueDate: "2020-2-05", priority: "High", status: "in_progress", inProject:"My_project"},
                    //         // {id: 2, isSelected:false, nameFormatted:"", name: "SoganSenami", dueDate: "2020-2-05", priority: "Average", status: "done", inProject:"My_project"}
                    //     ]
                    // },
                ],
                revele: false,
                receivedId: {},
                receivedId1: {},
                receiveProject: {},
                reveleProfil: false,
                reveledetails: false,
                reveleUpdateTask: false,
                name: "",
                dueDate: "",
                priority: "",
                status: "",
                inProject: "",
                nameUpdate: "",
                inProjectUpdate: "",
                count: 1,
                count2: 1,
                isChecked: false,
                reveleButtonUpDown: false,
                reveleButtonDropDown: true,
                reveleCreateProjectForm: false,
                isEmptyProject: false,
                showImage: true,
                isProjectSelected: true,
                isSettingsSeleted: false,
                reveleRemovePage: false,
                isHovered: false,
                isParameterProjectSelected: false,
                isMouseOver: false,
                valueSend: false,
                reveleRemoveProject: false,
                reveleUpdateProject: false,
                selectedTask: {},
                selectedProject: {},
                moonIsSelected: true,
                sunIsSelected: false,
                valueFixed: false,
                valueFixedOther: true,
                isChecked: false,
                isDark,
                toggleDark,
            }
        },

        components: {
            'addtask': AddTaskPage,
            'voirprofil': VoirProfil,
            'voirdetail': VoirDetailTask,
            'updatetask': UpdateTask,
            'logopage': LogoPage,
            'addproject' : AddProjectPage,
            'settingpage': SettingsPage,
            'removetask': RemoveTask,
            'parameterproject': ParametersProjectPage,
            'voirdetailparameter': VoirDetailParametersProject,
            'deleteproject': DeleteProject,
            'updateproject': UpdateProjectPage,
        },

        methods: {
            tooglesunIsSelected() {
                this.moonIsSelected = false;
                toggleDark();
            },

            tooglemoonIsSelected() {
                this.sunIsSelected = true;
                this.toggleDark();
            },

            toogleUpdateProject(value) {
                this.reveleUpdateProject = !this.reveleUpdateProject;
                this.selectedProject = {...value};
            },

            editProject(data) {
                let value1 = this.projects.findIndex(project => project.id === data.id);
                console.log("Une valeur dinge : ", data.id);
                if(value1 >=0) {
                    this.projects[value1] = {...data, isSelectedProject: false, reveleTaskList: true};
                    console.log("liste de tache : ", this.projects[value1].listOfTask.length);
                }
            },

            toogleReveleRemoveProject(value) {
                this.reveleRemoveProject = !this.reveleRemoveProject;
                this.projects.forEach(project => {
                    if(project.id === value) {
                        project.isProjectSelected = true;
                    }
                    else {
                        project.isProjectSelected = false;
                    }
                });
            },

            deleteProject(value) {
                this.reveleRemoveProject = !this.reveleRemoveProject;
                // && project.isSelectedProject == true
                let valueFor = this.projects.findIndex(project => project.id == value);
                console.log("Le tableau du projet : ", valueFor);
                if(valueFor != -1) {
                    this.projects.splice(valueFor, 1);
                }
                if(this.projects.length == 0) {
                    this.showImage = true;
                    this.isEmptyProject = false;
                }
            },

            toogleHover(value2) {
                this.projects.forEach(project => {
                    project.isMouseOver = project.id === value2;
                });
                this.isHovered = true;
            },

            toogleHoverMouseLeave() {
                this.projects.forEach(project => project.isMouseOver = false);
                this.isHovered = false;
            },

            toogleReveleRemovePage(value, value2) {
                this.reveleRemovePage = !this.reveleRemovePage;
                this.projects.forEach(project => {
                    project.listOfTask.forEach(task => {
                        task.isSelected = false;
                    })
                });
                let valueFor = this.projects.findIndex(project => project.id === value2 );
                if(valueFor != -1){
                    let forValue = this.projects[valueFor].listOfTask.findIndex(task => task.id === value);
                    if(forValue != -1) {
                        this.projects[valueFor].listOfTask[forValue].isSelected = true;
                    }
                }
            },

            deleteTask(value, value2) {
                this.reveleRemovePage = !this.reveleRemovePage;
                let valueFor = this.projects.findIndex(project => project.id === value2 );
                if(valueFor != -1){
                    let forValue = this.projects[valueFor].listOfTask.findIndex(task => task.id === value);
                    if(forValue != -1) {
                        this.projects[valueFor].listOfTask.splice(forValue, 1);
                        if(this.projects[valueFor].listOfTask.length == 0) {
                            this.projects[valueFor].isSelectedProject = true;
                            this.projects[valueFor].reveleTaskList = false;
                        }
                    }
                }
            },

            toogleSettingsToProject() {
                this.isProjectSelected = false;
                this.isSettingsSeleted = true;
            },

            toogleProjectToSettings() {
                this.isProjectSelected = true;
                this.isSettingsSeleted = false;
            },

            showOrNotImage() {
                this.showImage = false;
            },
            showCreateTaskButton() {
                this.isEmptyProject = true;
            },

            toggleReveleCreateProjectForm() {
                this.reveleCreateProjectForm = !this.reveleCreateProjectForm;
            },
            //Chercher à comprendre cette partie dans ce code, c'est important
            tooglereveleTaskList(projectId) {
                this.projects.forEach(project => {
                    project.listOfTask.forEach(task => {
                        task.nameFormatted = task.name;
                        if(task.name.length >= 8) {
                            task.nameFormatted = task.nameFormatted.slice(0, 8) + "...";
                        }
                    });
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

            tooglereveledetail(value, value2) {
                this.reveledetails = !this.reveledetails;
                this.projects.forEach(project => {
                    project.listOfTask.forEach(task => {
                        task.isSelected = false;
                    })
                });
                let valueFor = this.projects.findIndex(project => project.id === value2 );
                if(valueFor != -1){
                    let forValue = this.projects[valueFor].listOfTask.findIndex(task => task.id === value);
                    if(forValue != -1) {
                        this.projects[valueFor].listOfTask[forValue].isSelected = true;
                    }
                }
            },

            toggleProfil() {
                this.reveleProfil = !this.reveleProfil;
            },

            toggleModale() {
                this.revele = !this.revele;
            },

            // Chercher à faire des réglages ici et regarder dans la console
            tooglereveleUpdateTask(value) {
                this.reveleUpdateTask = !this.reveleUpdateTask;
                this.selectedTask = {...value};
            },

            // Chercher à faire des réglages ici et regarder dans la console
            formSubmittedUpdate(data) {
                let value1 = this.projects.findIndex(project => project.name === data.inProject);
                let value2 = this.projects[value1].listOfTask.findIndex(task => task.id === data.id);
                if(value2 >=0)
                this.projects[value1].listOfTask[value2] = {...data, isSelected: false};
            },

            handleFormSubmitted(data) {
                this.receivedId = {
                    id: this.count++,
                    nameFormatted: data.nameFormatted,
                    name: data.name,
                    dueDate: data.dueDate,
                    priority: data.priority,
                    status: data.status,
                    inProject: data.inProject,
                    isSelected: false,
                };
                // console.log("Une autre valeur que je cherche : ", this.receivedId.inProject);
                //Continuer le code en même temps
                this.projects.forEach(project => {
                    if(this.receivedId.inProject === project.nameOfProject) {
                        project.listOfTask.push(this.receivedId);
                        project.reveleTaskList = true;
                        project.isSelectedProject = false;
                    }
                });
            },

            formProjectSubmitted(data) {
                this.receiveProject = {
                    id: this.count++,
                    nameOfProject: data.nameOfProject,
                    isSelectedProject: true,
                    reveleTaskList: false,
                    listOfTask: [],
                }
                this.projects.push(this.receiveProject);
            },
        },
    }
</script>

<template>
    <div class="bg-white rounded-lg">
        <!--L'en-tête-->
        <div class="">
            <!--  dark:bg-black/80 dark:border-b-black border-b-black  -->
            <div :class="{ 'dark': isDark }" class="flex px-8 justify-between bg-white dark:bg-black/80 shadow-xl py-1">
                <logopage :isDark="isDark" :valueFixedOther="valueFixedOther" :valueFixed="valueFixed" :moonIsSelected="moonIsSelected" :sunIsSelected="sunIsSelected" ></logopage>
                <div class="flex space-x-8">
                    <input type="checkbox" v-model="isDark"/>
                    <button @click="toggleProfil" class="py-1">
                        <svg :class="{ 'dark': isDark }" class="dark:fill-white border rounded-full px-2" mlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="40" height="40"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                    </button>
                    <voirprofil :toggleProfil="toggleProfil" :reveleProfil="reveleProfil"></voirprofil>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="shadow-2xl border-black/30 h-screen w-1/6 bg-white/50  dark:bg-black/80">
                <div class="my-8 flex flex-col space-y-2">
                    <button @click="toogleProjectToSettings" class="flex mx-8 px-4 py-2 hover:rounded-xl hover:bg-gray-300/50">
                        <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'dark': isDark }" class="dark:fill-white py-2" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="40"><path d="m23.596,11.827c-.391-.525-.993-.827-1.652-.827h-.943v-3.5c0-2.481-2.019-4.5-4.5-4.5h-6.056c-.232,0-.464-.055-.671-.158l-3.155-1.578c-.345-.172-.731-.264-1.118-.264h-2C1.57,1,0,2.57,0,4.5v14c0,2.481,2.019,4.5,4.5,4.5h13.558c2.003,0,3.735-1.289,4.317-3.229l1.537-6.138c.188-.626.072-1.285-.316-1.807ZM1,18.5V4.5c0-1.378,1.121-2.5,2.5-2.5h2c.232,0,.464.055.671.158l3.155,1.578c.345.172.731.264,1.118.264h6.056c1.93,0,3.5,1.57,3.5,3.5v3.5h-11.885c-1.49,0-2.818.938-3.311,2.354l-2.433,7.924c-.834-.64-1.372-1.647-1.372-2.777Zm21.948-5.132l-1.537,6.138c-.448,1.492-1.796,2.494-3.354,2.494H4.5c-.435,0-.851-.08-1.234-.225l2.489-8.111c.347-.996,1.295-1.665,2.36-1.665h13.828c.34,0,.649.154.851.424.198.266.257.603.154.944Z"/></svg>
                        <span class="font-bold text-black  dark:text-white py-2">Project</span>
                    </button>
                    <button @click="toogleSettingsToProject" class="flex mx-8 px-6 py-2 space-x-2 hover:rounded-xl hover:bg-gray-300/50">
                        <svg  class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" :class="{ 'dark': isDark }" id="Outline" viewBox="0 0 24 24" width="25" height="25"><path d="M1,4.75H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2ZM7.333,2a1.75,1.75,0,1,1-1.75,1.75A1.752,1.752,0,0,1,7.333,2Z"/><path d="M23,11H20.264a3.727,3.727,0,0,0-7.194,0H1a1,1,0,0,0,0,2H13.07a3.727,3.727,0,0,0,7.194,0H23a1,1,0,0,0,0-2Zm-6.333,2.75A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z"/><path d="M23,19.25H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2ZM7.333,22a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z"/></svg>
                        <span class="font-bold text-black dark:text-white">Settings</span>
                    </button>
                </div>
            </div>
            <settingpage class="flex justify-center items-center mx-96" :isSettingsSeleted="isSettingsSeleted"></settingpage>
            <div v-if="isProjectSelected" class="justify-center w-5/6 py-4 dark:bg-black/70" :class="{ 'dark': isDark }">
                <!--Le bouton createTask-->
                <div class="px-8">
                    <div class="flex justify-between">
                        <div><h1 class="font-bold px-2 py-4 text-2xl text-black dark:text-white" :class="{ 'data': isDark }">My projects</h1></div>
                        <div class="flex space-x-2">
                            <div v-if="isEmptyProject">
                                <button @click="toggleModale" class="shadow-md flex my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                                    <svg class="py-1" xmlns="http://www.w3.org/2000/svg" fill="white" id="Outline" viewBox="0 0 24 24" width="25" height="25"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>
                                    <span>Create task</span>
                                </button>
                            </div>
                            <div>
                                <button @click="toggleReveleCreateProjectForm" class="shadow-md flex my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                                    <svg class="py-1" xmlns="http://www.w3.org/2000/svg" fill="white" id="Outline" viewBox="0 0 24 24" width="25" height="25"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>
                                    <span class="">Create project</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--L'affichage des listes de taches elles même-->
                <div class="px-8 my-2">
                    <table class="w-full text-sm text-left text-gray-500">
                        <thead class="text-xs text-black bg-gray-100 dark:bg-black/20" :class="{ 'dark': isDark }">
                            <tr class="">
                                <th class="px-2 py-3 w-40 dark:text-white text-black" :class="{ 'dark': isDark }" >Project Name</th>
                                <th class="px-2 w-40 py-3 dark:text-white text-black" :class="{ 'dark': isDark }" >Task Name</th>
                                <th class="px-2 w-40 py-3 dark:text-white text-black" :class="{ 'dark': isDark }" >Due Date</th>
                                <th class="px-2 w-40 py-3 dark:text-white text-black" :class="{ 'dark': isDark }" >Priority</th>
                                <th class="py-3 dark:text-white text-black" :class="{ 'dark': isDark }" >Status</th>
                            </tr>
                        </thead>
                    </table>

                    <div class="h-[399px] overflow-auto">
                        <table class="w-full text-sm text-left text-gray-500">
                            <img v-if="showImage" class="flex items-center mx-[320px] my-8 w-[330px] rounded-bl-lg rounded-tl-lg" src="../assets/plan.png" alt="">
                            <tbody class="text-xs text-black">
                                <tr v-for="project in projects" :key="project.id" class="">
                                    <div @mouseover="toogleHover(project.id)" @mouseleave="toogleHoverMouseLeave()" class="flex justify-between border rounded-xl bg-gray-50 my-2">
                                        <div class="px-4 py-1 flex space-x-2">
                                            <div class="py-2">
                                                {{ project.nameOfProject }}
                                            </div>
                                            <div>
                                                <div class="flex space-x-2" v-if="project.isMouseOver">
                                                    <button @click="toogleUpdateProject(project)"
                                                    class="rounded-md px-3 mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
                                                    >
                                                    Modified
                                                    </button>
                                                    <button @click="toogleReveleRemoveProject(project.id)"
                                                    class="rounded-md px-3 py-1 mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
                                                    >
                                                    Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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
                                        <td class="px-4 pt-2 w-20 font-medium text-gray-900" v-if="task.name.length > 8">{{ task.nameFormatted }}</td>
                                        <td class="px-4 pt-2 w-20 font-medium text-gray-900" v-else>{{ task.name }}</td>
                                        <td class="px-4 pt-2 w-22 font-medium text-gray-900">{{ task.dueDate }}</td>
                                        <td class="px-4 pt-2 w-16 font-medium text-gray-900">{{ task.priority }}</td>
                                        <td class="px-4 pt-2 w-24 font-medium text-gray-900">{{ task.status }}</td>
                                        <td class="pb-2 flex w-16 space-x-2">
                                            <button @click="tooglereveledetail(task.id, project.id)" class="border hover:bg-gray-100 border-black/20 p-1 rounded-md">
                                                <svg class="w-5"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                                            </button>
                                            <button @click="tooglereveleUpdateTask(task)" class="border hover:bg-gray-100 p-1 rounded-md border-black/20">
                                                <svg class="w-4"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
                                            </button>
                                            <!-- @click="deleteTask(task.id, project.id)" -->
                                            <button @click="toogleReveleRemovePage(task.id, project.id)" class="border hover:bg-gray-100 p-1 rounded-md border-black/20">
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
    </div>
    <addtask :isDark="isDark" @form-submitted="handleFormSubmitted" :revele="revele" :toggleModale="toggleModale" :projects="projects"></addtask>
    <voirdetail :projects="projects" :reveledetails="reveledetails" :tooglereveledetail="tooglereveledetail"></voirdetail>
    <updatetask @form-submitted-update="formSubmittedUpdate" :reveleUpdateTask="reveleUpdateTask" :projects="projects" :tooglereveleUpdateTask="tooglereveleUpdateTask" :task="selectedTask"></updatetask>
    <addproject :isDark="isDark" :moonIsSelected="moonIsSelected" :sunIsSelected="sunIsSelected" @form-project-submitted="formProjectSubmitted" :showOrNotImage="showOrNotImage" :showCreateTaskButton="showCreateTaskButton" :reveleCreateProjectForm="reveleCreateProjectForm" :toggleReveleCreateProjectForm="toggleReveleCreateProjectForm"></addproject>
    <removetask :deleteTask="deleteTask" :projects="projects" :toogleReveleRemovePage="toogleReveleRemovePage" :reveleRemovePage="reveleRemovePage"></removetask>
    <deleteproject :deleteProject="deleteProject" :toogleReveleRemoveProject="toogleReveleRemoveProject" :reveleRemoveProject="reveleRemoveProject" :projects="projects"></deleteproject>
    <updateproject @edit-project-submitted="editProject" :project="selectedProject" :reveleUpdateProject="reveleUpdateProject" :toogleUpdateProject="toogleUpdateProject" ></updateproject>
    <!-- <voirdetailparameter class=""></voirdetailparameter> -->
</template>

<style scoped>
</style>