import { ref } from "vue";
export const detailOfTask = ref(false);
export const deleteBackground = ref(false);
export const hoveredTaskId = ref<number | null>(null);
// export const projects = ref<Project[]>([
//   {
//     id: 1,
//     nameOfProject: "My_project",
//     isSelectedProject: true,
//     reveleTaskList: false,
//     disable: true,
//     listOfTask: [
//       {
//         id: 1,
//         isSelected: false,
//         nameFormatted: "",
//         name: "Sogan",
//         dueDate: "2020-2-05",
//         priority: "High",
//         status: "in_progress",
//         inProject: "My_project",
//         showInput: false,
//         showValueOfInput: true,
//         showValueOfInputOfDate: true,
//         showInputOfDate: false,
//         showChoicePriority: false,
//         showValueOfInputOfPriority: true,
//         showCloseIcon: false,
//         showCloseIconStatus: false,
//         showChoiceStatus: false,
//         showValueOfInputOfStatus: true,
//       },
//       {
//         id: 2,
//         isSelected: false,
//         nameFormatted: "",
//         name: "SoganSenami",
//         dueDate: "2020-2-05",
//         priority: "Average",
//         status: "done",
//         inProject: "My_project",
//         showInput: false,
//         showValueOfInput: true,
//         showValueOfInputOfDate: true,
//         showInputOfDate: false,
//         showChoicePriority: false,
//         showValueOfInputOfPriority: true,
//         showCloseIcon: false,
//         showCloseIconStatus: false,
//         showChoiceStatus: false,
//         showValueOfInputOfStatus: true,
//       },
//     ],
//   },
// ]);
export async function showDetailOrNot() {
  detailOfTask.value = true;
  deleteBackground.value = true;
}
export function hiddenBackgroundAndDetail() {
  detailOfTask.value = false;
  deleteBackground.value = false;
}
export const showIconAndBorder = ref(false);
import { updateData } from "@/utils/utils";
export const onSubmit = async function (task: any, taskId: any, newData: any) {
  task.showValueOfInput = true;
  try {
    await updateData(
      `https://backend-application-v09m.onrender.com/tasks/${taskId}`,
      {
        name: newData,
      }
    );
  } catch (error) {}
  task.showInput = false;
};
export const onClick = function (task: any) {
  task.showValueOfInput = false;
  task.showInput = true;
};
export const onClickDate = function (task: any) {
  task.showValueOfInputOfDate = false;
  task.showInputOfDate = true;
};
export const onSubmitDate = async function (
  task: any,
  taskId: any,
  newData: any
) {
  task.showValueOfInputOfDate = true;
  try {
    await updateData(
      `https://backend-application-v09m.onrender.com/tasks/${taskId}`,
      {
        dueDate: newData,
      }
    );
  } catch (error) {}
  task.showInputOfDate = false;
};
// export const showInputOfPriority = ref(false);
// export const showValueOfInputOfStatus = ref(true);
export async function showOrNotPriorityChoice(
  task: any,
  taskId: any,
  newData: any
) {
  if (task.priority) {
    task.showValueOfInputOfPriority = true;
    try {
      await updateData(
        `https://backend-application-v09m.onrender.com/tasks/${taskId}`,
        {
          priority: newData,
        }
      );
    } catch (error) {}
    task.showChoicePriority = false;
  } else {
    task.showValueOfInputOfPriority = false;
    task.showCloseIcon = false;
  }
}
export async function resetPriority(task: any, taskId: any) {
  try {
    await updateData(
      `https://backend-application-v09m.onrender.com/tasks/${taskId}`,
      {
        priority: null,
      }
    );
  } catch (error) {}
  task.priority = null;
}

export async function showOrNotStatusChoice(
  task: any,
  taskId: any,
  newData: any
) {
  task.showValueOfInputOfStatus = true;
  try {
    await updateData(
      `https://backend-application-v09m.onrender.com/tasks/${taskId}`,
      {
        status: newData,
      }
    );
  } catch (error) {}
  task.showChoiceStatus = false;
}

export async function resetTodo(task: any, taskId: any) {
  try {
    await updateData(
      `https://backend-application-v09m.onrender.com/tasks/${taskId}`,
      {
        status: null,
      }
    );
  } catch (error) {}
  task.status = null;
}
