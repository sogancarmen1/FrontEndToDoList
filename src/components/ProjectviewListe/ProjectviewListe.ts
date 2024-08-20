import { ref } from "vue";

export function createLink(value: String, secondValue: String) {
  return `/project/${value}/${secondValue}`;
}

export const value = ref("list");
export const value1 = ref("files");
