import { Project } from "@/Interfaces/interface";
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
export function showDetailOrNot() {
  detailOfTask.value = true;
  deleteBackground.value = true;
}
export function hiddenBackgroundAndDetail() {
  detailOfTask.value = false;
  deleteBackground.value = false;
}
export const showIconAndBorder = ref(false);
export const onSubmit = function (task: any) {
  task.showValueOfInput = true;
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
export const onSubmitDate = function (task: any) {
  task.showValueOfInputOfDate = true;
  task.showInputOfDate = false;
};
// export const showInputOfPriority = ref(false);
// export const showValueOfInputOfStatus = ref(true);
export function showOrNotPriorityChoice(task: any) {
  if (task.priority) {
    task.showValueOfInputOfPriority = true;
    task.showChoicePriority = false;
  } else {
    task.showValueOfInputOfPriority = false;
    task.showCloseIcon = false;
  }
}
export function resetPriority(task: any) {
  task.priority = null;
  // task.showChoicePriority = true;
  // task.showValueOfInputOfPriority = false;
  // task.showCloseIcon = false;
}

// export const showCloseIconStatus = ref(false);

// export const status = ref("DONE");
// export const showChoiceStatus = ref(false);

export function showOrNotStatusChoice(task: any) {
  task.showChoiceStatus = false;
  task.showValueOfInputOfStatus = true;
}

export function resetTodo(task: any) {
  task.status = null;
}
