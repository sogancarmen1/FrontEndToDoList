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
    import FormPageConnexion from "./FormPageConnexion.vue";
    import { useDark, useToggle } from "@vueuse/core";
    import SideBar from "./SideBar.vue";
    import TopBar from "./TopBar.vue";
    import axios from "axios";
    import TheLoader from "./TheLoader.vue";
    import { getData, postData, deleteData } from "../utils/utils";
    const isDark = useDark();
    const toggleDark = useToggle(isDark)
    export default {
        data() {
            return {
                // projects: [
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
                // ],
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
                // isEmptyProject: false,
                // showImage: true,
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
            'theloader': TheLoader,
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
            'formpageconnexion': FormPageConnexion,
            'sidebar': SideBar,
            'topbar': TopBar,
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

            async deleteProject(value) {
                this.reveleRemoveProject = !this.reveleRemoveProject;
                await deleteData(`http://localhost:3000/projects/${value}`)
                this.projects = this.projects.filter(project => project.id !== value);
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

            async deleteTask(value, value2) {
                this.reveleRemovePage = !this.reveleRemovePage;
                let valueFor = this.projects.findIndex(project => project.id === value2 );
                let valueFor1 = this.projects.find(project => project.id === value2 );
                if(valueFor != -1){
                    let forValue = this.projects[valueFor].listOfTask.findIndex(task => task.id === value);
                    let forValue1 = this.projects[valueFor].listOfTask.find(task => task.id === value);
                    console.log(forValue1);
                    if(forValue != -1) {
                        //Partie permettant de supprimer une tâche dans un projet donnée
                        await deleteData(`http://localhost:3000/tasks/${value}`);
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
                this.projects.forEach(async (project) => {
                    if (project.id === projectId){
                        const dataReceived = await getData("http://localhost:3000/tasks", projectId);

                        project.listOfTask = dataReceived.map(task => ({
                            id: task.id,
                            name: task.name,
                            nameFormatted: "",
                            dueDate: task.dueDate.slice(0,10),
                            priority: task.priority,
                            status: task.status,
                            inProject: task.projectId
                        }))

                        project.listOfTask.forEach(task => {
                            task.nameFormatted = task.name;
                            if(task.name.length >= 8) {
                                task.nameFormatted = task.nameFormatted.slice(0, 8) + "...";
                            }
                        });
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
                //Insertion d'une tâche dans la base de donnée
                this.projects.forEach(async (project) => {
                    if(this.receivedId.inProject === project.nameOfProject) {
                        await postData("http://localhost:3000/tasks", {
                            name: this.receivedId.name,
                            dueDate: this.receivedId.dueDate,
                            priority: this.receivedId.priority,
                            status: this.receivedId.status,
                            projectId: project.id
                        });
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
                    description: data.description,
                    isSelectedProject: true,
                    reveleTaskList: false,
                    listOfTask: [],
                }
                this.projects.push(this.receiveProject);
            },
        },

        setup(){
            const projects = ref([]);
            const showImage = ref(false);
            const isEmptyProject = ref(false);
            const projectId = ref(1);
            const showLoader = ref(true);
            onMounted(async () => {
                const responseReceived = await getData("http://localhost:3000/projects", projectId.value);

                projects.value = responseReceived.map(project => ({
                    id: project.id,
                    nameOfProject: project.name,
                    listOfTask: [],
                    isSelectedProject: true,
                    reveleTaskList: false,
                }))

                showLoader.value = false
                isEmptyProject.value = true
            });

            return {
                projects,
                showImage,
                isEmptyProject,
                showLoader
            };
        },
    }
</script>

<template>
    <div class="bg-white rounded-lg">
        <!--L'en-tête-->
        <div class="">
            <topbar :reveleProfil="reveleProfil" :toggleProfil="toggleProfil" :isDark="isDark" :valueFixedOther="valueFixedOther" :valueFixed="valueFixed" :moonIsSelected="moonIsSelected" :sunIsSelected="sunIsSelected"></topbar>
        </div>
        <div class="flex">
            <sidebar :toogleProjectToSettings="toogleProjectToSettings" :toogleSettingsToProject="toogleSettingsToProject" :isDark="isDark"></sidebar>
            <div v-if="isProjectSelected" class="justify-center w-5/6 py-4 dark:bg-black/70" :class="{ 'dark': isDark }">
                <!--Le bouton createTask-->
                <div class="px-8">
                    <div class="flex justify-between">
                        <div><h1 class="font-bold px-2 py-4 text-2xl text-black dark:text-white" :class="{ 'data': isDark }">My projects</h1></div>
                        <div class="flex space-x-2">
                            <div v-if="isEmptyProject">
                                <button :class="{ 'dark': isDark }" @click="toggleModale" class="dark:shadow-black/50 shadow-md flex my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                                    <svg class="py-1" xmlns="http://www.w3.org/2000/svg" fill="white" id="Outline" viewBox="0 0 24 24" width="25" height="25"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></svg>
                                    <span>Create task</span>
                                </button>
                            </div>
                            <div>
                                <button :class="{ 'dark': isDark }" @click="toggleReveleCreateProjectForm" class="dark:shadow-black/50 shadow-md flex my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
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
                            <p v-if="showImage" :class="{ 'dark': isDark }" class="w-50 mt-32 flex justify-center dark:text-white font-bold text-2xl">No projects</p>
                            <theloader v-if="showLoader"></theloader>
                            <!-- <img v-if="showImage" class="flex items-center mx-[320px] my-8 w-[330px] rounded-bl-lg rounded-tl-lg" src="../assets/plan.png" alt=""> -->
                            <tbody class="text-xs text-black">
                                <tr v-for="project in projects" :key="project.id" class="">
                                    <div :class="{ 'dark': isDark }" @mouseover="toogleHover(project.id)" @mouseleave="toogleHoverMouseLeave()" class="dark:bg-black/20 flex justify-between border dark:border-black/30 rounded-xl bg-gray-50 my-2">
                                        <div class="px-4 py-1 flex space-x-2">
                                            <div :class="{ 'dark': isDark }" class="dark:text-white py-2">
                                                {{ project.nameOfProject }}
                                            </div>
                                            <div>
                                                <div class="flex space-x-2" v-if="project.isMouseOver">
                                                    <button @click="toogleUpdateProject(project)"
                                                    :class="{ 'dark': isDark }"
                                                    class="rounded-md px-3 mt-1 dark:bg-black/50 dark:border-none dark:shadow-black dark:text-white shadow-md bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
                                                    >
                                                    Modified
                                                    </button>
                                                    <button @click="toogleReveleRemoveProject(project.id)"
                                                    :class="{ 'dark': isDark }"
                                                    class="rounded-md px-3 py-1 mt-1 dark:bg-black/50 dark:border-none dark:shadow-black dark:text-white bg-white border shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
                                                    >
                                                    Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button v-show="project.isSelectedProject" @click="tooglereveleTaskList(project.id)" :class="{ 'dark': isDark }" class="py-1 my-2 mx-4 px-2 rounded-full">
                                                <svg :class="{ 'dark': isDark }" class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="15" height="15"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/></svg>
                                            </button>
                                            <button v-show="project.reveleTaskList" @click="toogleNonReveleTaskList(project.id)" class="absolute right-8 py-1 my-2 mx-4 px-2 rounded-full">
                                                <svg :class="{ 'dark': isDark }" class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="15" height="15"><path d="M18,15.5a1,1,0,0,1-.71-.29l-4.58-4.59a1,1,0,0,0-1.42,0L6.71,15.21a1,1,0,0,1-1.42-1.42L9.88,9.21a3.06,3.06,0,0,1,4.24,0l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,18,15.5Z"/></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <tr v-show="project.reveleTaskList" v-for="task in project.listOfTask" :key="task.id" class="border-b flex space-x-20">
                                        <td class="px-9 pt-2 w-16">
                                            <label for="myCheckbox"></label>
                                            <input type="checkbox" id="myCheckbox" v-model="isChecked">
                                        </td>
                                        <td :class="{ 'dark': isDark }" class="px-4 pt-2 w-20 font-medium dark:text-white text-gray-900" v-if="task.name.length > 8">{{ task.nameFormatted }}</td>
                                        <td :class="{ 'dark': isDark }" class="px-4 pt-2 w-20 font-medium text-gray-900 dark:text-white" v-else>{{ task.name }}</td>
                                        <td :class="{ 'dark': isDark }" class="px-4 pt-2 w-22 font-medium text-gray-900 dark:text-white">{{ task.dueDate }}</td>
                                        <td :class="{ 'dark': isDark }" class="px-4 pt-2 w-16 font-medium text-gray-900 dark:text-white">{{ task.priority }}</td>
                                        <td :class="{ 'dark': isDark }" class="px-4 pt-2 w-24 font-medium text-gray-900 dark:text-white">{{ task.status }}</td>
                                        <td class="pb-2 flex w-16 space-x-2">
                                            <button @click="tooglereveledetail(task.id, project.id)" :class="{ 'dark': isDark }" class="dark:shadow-black/50 shadow-md border dark:hover:bg-black/30 hover:bg-gray-100 border-black/20 p-1 rounded-md">
                                                <svg :class="{ 'dark': isDark }" class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z"/><circle cx="12" cy="6.5" r="1.5"/></svg>
                                            </button>
                                            <button @click="tooglereveleUpdateTask(task)" :class="{ 'dark': isDark }" class="dark:shadow-black/50 shadow-md border dark:hover:bg-black/30 hover:bg-gray-100 p-1 rounded-md border-black/20">
                                                <svg :class="{ 'dark': isDark }" class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="18" height="18"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/></svg>
                                            </button>
                                            <button @click="toogleReveleRemovePage(task.id, project.id)" :class="{ 'dark': isDark }" class="dark:shadow-black/50 shadow-md border dark:hover:bg-black/30 hover:bg-gray-100 p-1 rounded-md border-black/20">
                                                <svg :class="{ 'dark': isDark }" class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
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
    <voirdetail :isDark="isDark" :projects="projects" :reveledetails="reveledetails" :tooglereveledetail="tooglereveledetail"></voirdetail>
    <updatetask :isDark="isDark" @form-submitted-update="formSubmittedUpdate" :reveleUpdateTask="reveleUpdateTask" :projects="projects" :tooglereveleUpdateTask="tooglereveleUpdateTask" :task="selectedTask"></updatetask>
    <addproject :isDark="isDark" :moonIsSelected="moonIsSelected" :sunIsSelected="sunIsSelected" @form-project-submitted="formProjectSubmitted" :showOrNotImage="showOrNotImage" :showCreateTaskButton="showCreateTaskButton" :reveleCreateProjectForm="reveleCreateProjectForm" :toggleReveleCreateProjectForm="toggleReveleCreateProjectForm"></addproject>
    <removetask :isDark="isDark" :deleteTask="deleteTask" :projects="projects" :toogleReveleRemovePage="toogleReveleRemovePage" :reveleRemovePage="reveleRemovePage"></removetask>
    <deleteproject :isDark="isDark" :deleteProject="deleteProject" :toogleReveleRemoveProject="toogleReveleRemoveProject" :reveleRemoveProject="reveleRemoveProject" :projects="projects"></deleteproject>
    <updateproject :isDark="isDark" @edit-project-submitted="editProject" :project="selectedProject" :reveleUpdateProject="reveleUpdateProject" :toogleUpdateProject="toogleUpdateProject" ></updateproject>
    <!-- <formpageconnexion :isDark="isDark"></formpageconnexion> -->
    <!-- <voirdetailparameter class=""></voirdetailparameter> -->
</template>

<style scoped>
</style>