export interface Task {
  id: number;
  nameFormatted: string;
  name: string;
  dueDate: string;
  priority: string;
  status: string;
  isSelected: boolean;
  inProject: string;
  showInput: boolean;
  showValueOfInput: boolean;
  showValueOfInputOfDate: boolean;
  showInputOfDate: boolean;
  showChoicePriority: boolean;
  showValueOfInputOfPriority: boolean;
  showCloseIcon: boolean;
  showCloseIconStatus: boolean;
  showChoiceStatus: boolean;
  showValueOfInputOfStatus: boolean;
}

export interface Project {
  id: number;
  nameOfProject: string;
  listOfTask: Task[];
  disable: boolean;
  isSelectedProject: boolean;
  reveleTaskList: boolean;
}
