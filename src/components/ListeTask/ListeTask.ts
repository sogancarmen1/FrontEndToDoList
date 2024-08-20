import { ref } from "vue";
export const detailOfTask = ref(false);
export const deleteBackground = ref(false);
export function showDetailOrNot() {
  detailOfTask.value = true;
  deleteBackground.value = true;
}
export function hiddenBackgroundAndDetail() {
  detailOfTask.value = false;
  deleteBackground.value = false;
}
export const nameOfTask = ref("");
export const showInput = ref(true);
export const showValueOfInput = ref(false);
export const showIconAndBorder = ref(false);
export const onSubmit = function () {
  showValueOfInput.value = true;
  showInput.value = false;
};
export const onClick = function () {
  showValueOfInput.value = false;
  showInput.value = true;
};
export const priority = ref("");
export const date = ref("");
export const showChoicePriority = ref(true);
export const High = ref(false);
export const Average = ref(false);
export const Low = ref(false);
export function showOrNotPriorityChoice(priority: string) {
  if (priority == "High") {
    High.value = true;
    showChoicePriority.value = false;
    return true;
  }
  if (priority == "Average") {
    Average.value = true;
    showChoicePriority.value = false;
    return true;
  }
  if (priority == "Low") {
    Low.value = true;
    showChoicePriority.value = false;
    return true;
  }
  return false;
}
export function notShowHigh() {
  if (priority.value == "High") {
    High.value = false;
    showChoicePriority.value = true;
  }
}

export function notShowAverage() {
  if (priority.value == "Average") {
    Average.value = false;
    showChoicePriority.value = true;
  }
}

export function notShowLow() {
  if (priority.value == "Low") {
    Low.value = false;
    showChoicePriority.value = true;
  }
}

export const showCloseIcon = ref(false);

export const status = ref("");
export const showChoiceStatus = ref(true);
export const todo = ref(false);
export const in_progress = ref(false);
export const waiting = ref(false);
export const done = ref(false);
export const canceled = ref(false);
export const showCloseIconInStatus = ref(false);

export function showOrNotStatusChoice(status: string) {
  if (status == "todo") {
    todo.value = true;
    showChoiceStatus.value = false;
    return true;
  }
  if (status == "in_progress") {
    in_progress.value = true;
    showChoiceStatus.value = false;
    return true;
  }
  if (status == "waiting") {
    waiting.value = true;
    showChoiceStatus.value = false;
    return true;
  }
  if (status == "done") {
    done.value = true;
    showChoiceStatus.value = false;
    return true;
  }
  if (status == "canceled") {
    canceled.value = true;
    showChoiceStatus.value = false;
    return true;
  }
  return false;
}

export function notShowTodo() {
  if (status.value == "todo") {
    todo.value = false;
    showChoiceStatus.value = true;
  }
}

export function notShowInProgress() {
  if (status.value == "in_progress") {
    in_progress.value = false;
    showChoiceStatus.value = true;
  }
}

export function notShowWaiting() {
  if (status.value == "waiting") {
    waiting.value = false;
    showChoiceStatus.value = true;
  }
}

export function notShowDone() {
  if (status.value == "done") {
    done.value = false;
    showChoiceStatus.value = true;
  }
}

export function notShowCanceled() {
  if (status.value == "canceled") {
    canceled.value = false;
    showChoiceStatus.value = true;
  }
}
