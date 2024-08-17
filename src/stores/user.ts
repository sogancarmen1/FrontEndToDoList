import { defineStore } from "pinia";

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
