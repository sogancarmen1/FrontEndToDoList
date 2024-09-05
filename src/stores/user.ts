import { defineStore } from "pinia";
import { ref } from "vue";
import { getData, getDataById, updateData } from "@/utils/utils";

export const useUserStore = defineStore("user", {
  state: () => ({
    userData: null,
    informations: "",
  }),
  actions: {
    setUserData(data: any) {
      this.userData = data;
    },

    async getUserInformations() {
      const response = await getData("http://localhost:3000/users");
      this.informations = response.email;
    },
  },
});

export const members = defineStore("members", {
  state: () => ({
    member: ref<string[]>([]),
  }),
  actions: {
    setAllMember(data: any) {
      this.member = data;
    },
  },
});

export const useModalDetailStore = defineStore("details", {
  state: () => ({
    valueOfDetail: ref<{
      id?: number;
      name?: string;
      dueDate?: Date;
      priority?: string;
      status?: string;
      taskDescription?: string;
    }>({}),
    descriptionValue: "",
    idTask: 0,
  }),
  actions: {
    async getDetailTask(value: number) {
      this.valueOfDetail = await getDataById(
        `http://localhost:3000/tasks/${value}`
      );
    },
    setId(value: number) {
      this.idTask = value;
    },
    setDescription(value: string) {
      this.descriptionValue = value;
    },
  },
});

export const useTaskStore = defineStore("tasks", () => {
  const revele = ref(false);
  const tasks = ref<any[]>([]);

  function toggleRevele() {
    revele.value = !revele.value;
  }

  async function getAllTasksInProject(projectId: any) {
    const response = await getData("http://localhost:3000/tasks", projectId);
    tasks.value = response.data;
    return response;
  }

  return {
    revele,
    toggleRevele,
    getAllTasksInProject,
    tasks,
  };
});

export const useAddCollaboratorStore = defineStore("add collaborator", () => {
  const revele = ref(false);
  const projectId = ref(0);
  function toggleRevele() {
    revele.value = !revele.value;
  }

  function toggleReveleWithValue(value: any) {
    revele.value = !revele.value;
    projectId.value = value;
  }

  return {
    revele,
    projectId,
    toggleRevele,
    toggleReveleWithValue,
  };
});

export const useProjectStore = defineStore("projectsCreate", () => {
  const showModalOfAddProject = ref(false);

  function toggleModalAddProject() {
    showModalOfAddProject.value = !showModalOfAddProject.value;
  }

  return {
    showModalOfAddProject,
    toggleModalAddProject,
  };
});

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref<any[]>([]);
  const countCompletedTasks = ref(0);
  const countOnGoingTasks = ref(0);
  const countPendingTasks = ref(0);
  const countOverdueTasks = ref(0);

  function addTask(value: any, id: Number) {
    projects.value.forEach((project: any) => {
      if (project.id == id) {
        project.listOfTask.push(value);
      }
    });
    return true;
  }

  function addNewProject(value: any) {
    projects.value.push(value);
  }

  async function fetchProjects() {
    const responseReceived = await getData("http://localhost:3000/projects");
    if (responseReceived != null) {
      const projectsWithTasks = await Promise.all(
        responseReceived.data.map(async (project: any) => {
          const tasksResponse = await getData(
            "http://localhost:3000/tasks",
            project.id
          );
          return {
            id: project.id,
            nameOfProject: project.name,
            listOfTask:
              tasksResponse?.data.map((task: any) => ({
                id: task.id,
                nameFormatted: "",
                name: task.name,
                dueDate: task.dueDate?.slice(0, 10) || null,
                priority: task.priority,
                status: task.status,
                description: task.taskDescription,
                isSelected: false,
                inProject: project.name,
                showInput: false,
                showValueOfInput: true,
                showValueOfInputOfDate: true,
                showInputOfDate: false,
                showChoicePriority: false,
                showValueOfInputOfPriority: true,
                showCloseIcon: false,
                showCloseIconStatus: false,
                showChoiceStatus: false,
                showValueOfInputOfStatus: true,
              })) || [],
            disable: true,
            isSelectedProject: true,
            reveleTaskList: false,
          };
        })
      );
      projects.value = projectsWithTasks;

      const date = new Date();

      countCompletedTasks.value = 0;
      countOnGoingTasks.value = 0;
      countPendingTasks.value = 0;
      countOverdueTasks.value = 0;

      projects.value.forEach((project: any) => {
        project.listOfTask.forEach((task: any) => {
          switch (task.status) {
            case "done":
              countCompletedTasks.value++;
              break;
            case "in_progess":
              countOnGoingTasks.value++;
              break;
            case "waiting":
              countPendingTasks.value++;
              break;
            default:
              break;
          }
          if (date.getDate() > task.dueDate?.split("-")[2]) {
            countOverdueTasks.value++;
          }
        });
      });
    }
  }

  fetchProjects();

  return {
    projects,
    countCompletedTasks,
    countOnGoingTasks,
    countPendingTasks,
    countOverdueTasks,
    addProject: addTask,
    fetchProjects,
    addNewProject,
  };
});
