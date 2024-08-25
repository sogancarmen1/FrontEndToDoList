import { defineStore } from "pinia";
import { ref } from "vue";
import { getData } from "@/utils/utils";

export const useUserStore = defineStore("user", {
  state: () => ({
    userData: null,
  }),
  actions: {
    setUserData(data: any) {
      this.userData = data;
    },
  },
});

export const useTaskStore = defineStore("tasks", () => {
  const revele = ref(false);

  function toggleRevele() {
    revele.value = !revele.value;
  }

  return {
    revele,
    toggleRevele,
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
  };
});
