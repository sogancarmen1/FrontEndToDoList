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
      const response = await getData(
        "https://backend-application-v09m.onrender.com/users"
      );
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

export const assignTo = defineStore("tache", {
  state: () => ({
    userAssigned: ref(""),
    userAssignedStore: ref<any[]>([]),
  }),
  actions: {
    setAllMember(data: any) {
      this.userAssigned = data;
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
      assignedTo?: string;
    }>({}),
    descriptionValue: "",
    idTask: 0,
  }),
  actions: {
    async getDetailTask(value: number) {
      this.valueOfDetail = await getDataById(
        `https://backend-application-v09m.onrender.com/tasks/${value}`
      );
      return this.valueOfDetail;
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
    const response = await getData(
      "https://backend-application-v09m.onrender.com/tasks",
      projectId
    );
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

export const useAssignToStore = defineStore("assignStore", () => {
  const revele = ref(false);
  const taskId = ref(0);

  function toggleRevele() {
    revele.value = !revele.value;
  }

  function toggleReveleAndShowTaskId(value: any) {
    taskId.value = value;
    revele.value = !revele.value;
  }

  return {
    revele,
    toggleRevele,
    toggleReveleAndShowTaskId,
    taskId,
  };
});

export const useTaskOnProjectStore = defineStore("tasksOnProject", () => {
  const revele = ref(false);
  const tasks = ref<any[]>([]);

  function toggleRevele() {
    revele.value = !revele.value;
  }

  async function getAllTasksInProject(projectId: any) {
    const response = await getData(
      "https://backend-application-v09m.onrender.com/tasks",
      projectId
    );
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
  const reveleInput = ref(false);
  const reveleText = ref(true);
  const projectName = ref("");

  function toggleModalAddProject() {
    showModalOfAddProject.value = !showModalOfAddProject.value;
  }

  async function getProjectById(value: any) {
    const result = await getData(
      `https://backend-application-v09m.onrender.com/projects/${value}`
    );
    projectName.value = result.data.name;
  }

  async function toggleReveleInput() {
    reveleInput.value = !reveleInput.value;
    reveleText.value = !reveleText.value;
  }

  async function onSubmit(value: any) {
    await updateData(
      `https://backend-application-v09m.onrender.com/projects/${value}`,
      {
        name: projectName.value,
      }
    );
    const project = useProjectsStore();
    project.fetchProjects();
    reveleInput.value = !reveleInput.value;
    reveleText.value = !reveleText.value;
  }

  function resetView() {
    reveleInput.value = false;
    reveleText.value = true;
  }

  return {
    showModalOfAddProject,
    toggleModalAddProject,
    reveleInput,
    reveleText,
    toggleReveleInput,
    resetView,
    projectName,
    onSubmit,
    getProjectById,
  };
});

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref<any[]>([]);
  const countCompletedTasks = ref(0);
  const countOnGoingTasks = ref(0);
  const countPendingTasks = ref(0);
  const countOverdueTasks = ref(0);
  const projectId = ref(0);

  function addTask(value: any, id: Number) {
    projects.value.forEach((project: any) => {
      if (project.id == id) {
        project.listOfTask.push(value);
      }
    });
  }

  function addNewProject(value: any) {
    projects.value.push(value);
  }

  async function fetchProjects() {
    const responseReceived = await getData(
      "https://backend-application-v09m.onrender.com/projects"
    );
    if (responseReceived != null) {
      const projectsWithTasks = await Promise.all(
        responseReceived.data.map(async (project: any) => {
          const tasksResponse = await getData(
            "https://backend-application-v09m.onrender.com/tasks",
            project.id
          );
          return {
            id: project.id,
            nameOfProject: project.name,
            description: project.description,
            listOfTask:
              tasksResponse?.data.map((task: any) => ({
                id: task.id,
                nameFormatted: "",
                name: task.name,
                dueDate: task.dueDate?.slice(0, 10) || null,
                priority: task.priority,
                status: task.status,
                assign: task.assignedTo,
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
    projectId,
  };
});

export const useProjectParameterStore = defineStore(
  "parameter of project",
  () => {
    const revele = ref(false);
    function toggleRevele() {
      revele.value = !revele.value;
    }

    return {
      revele,
      toggleRevele,
    };
  }
);

export const useMemberStore = defineStore("member of project", () => {
  const members = ref([]);

  async function getAllMembersInProject(value: any) {
    const result = await getDataById(
      `https://backend-application-v09m.onrender.com/projects/${value}/members`
    );
    members.value = result;
  }

  return {
    members,
    getAllMembersInProject,
  };
});
