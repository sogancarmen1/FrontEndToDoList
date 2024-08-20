import { ref } from "vue";
export const isSelected = ref(true);
export const isNotSelected = ref(false);
export function toggleIsSelected() {
  isSelected.value = false;
  isNotSelected.value = true;
}
export function toggleIsNotSelected() {
  isSelected.value = true;
  isNotSelected.value = false;
}
