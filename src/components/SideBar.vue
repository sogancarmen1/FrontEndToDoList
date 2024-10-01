<script>
import { onMounted, ref } from "vue";
import { getData } from "../utils/utils";

export default {
  props: ["toogleProjectToSettings", "toogleSettingsToProject", "isDark"],
  data() {
    return {
      date: new Date(),
      myValue: "...",
    };
  },

  methods: {},

  setup() {
    const firstName = ref("");
    const lastName = ref("");
    onMounted(async () => {
      const userData = await getData("https://backend-application-v09m.onrender.com/users");
      firstName.value = userData.firstName;
      lastName.value = userData.lastName;
    });
    return {
      firstName,
      lastName,
    };
  },
};
</script>

<template>
  <div
    class="shadow-2xl border-black/30 h-screen w-1/6 bg-white/50 dark:bg-black/80"
  >
    <div class="my-8 flex flex-col space-y-96">
      <div>
        <button
          @click="toogleProjectToSettings"
          class="flex mx-8 px-4 py-2 hover:rounded-xl hover:bg-gray-300/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="{ dark: isDark }"
            class="dark:fill-white py-2"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path
              d="m23.596,11.827c-.391-.525-.993-.827-1.652-.827h-.943v-3.5c0-2.481-2.019-4.5-4.5-4.5h-6.056c-.232,0-.464-.055-.671-.158l-3.155-1.578c-.345-.172-.731-.264-1.118-.264h-2C1.57,1,0,2.57,0,4.5v14c0,2.481,2.019,4.5,4.5,4.5h13.558c2.003,0,3.735-1.289,4.317-3.229l1.537-6.138c.188-.626.072-1.285-.316-1.807ZM1,18.5V4.5c0-1.378,1.121-2.5,2.5-2.5h2c.232,0,.464.055.671.158l3.155,1.578c.345.172.731.264,1.118.264h6.056c1.93,0,3.5,1.57,3.5,3.5v3.5h-11.885c-1.49,0-2.818.938-3.311,2.354l-2.433,7.924c-.834-.64-1.372-1.647-1.372-2.777Zm21.948-5.132l-1.537,6.138c-.448,1.492-1.796,2.494-3.354,2.494H4.5c-.435,0-.851-.08-1.234-.225l2.489-8.111c.347-.996,1.295-1.665,2.36-1.665h13.828c.34,0,.649.154.851.424.198.266.257.603.154.944Z"
            />
          </svg>
          <router-link
            to="/home"
            :class="{ dark: isDark }"
            class="font-bold text-black dark:text-white py-2"
            >Project</router-link
          >
        </button>
        <button
          @click="toogleSettingsToProject"
          class="flex mx-8 px-6 py-2 space-x-2 hover:rounded-xl hover:bg-gray-300/50"
        >
          <svg
            class="dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ dark: isDark }"
            id="Outline"
            viewBox="0 0 24 24"
            width="25"
            height="25"
          >
            <path
              d="M1,4.75H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2ZM7.333,2a1.75,1.75,0,1,1-1.75,1.75A1.752,1.752,0,0,1,7.333,2Z"
            />
            <path
              d="M23,11H20.264a3.727,3.727,0,0,0-7.194,0H1a1,1,0,0,0,0,2H13.07a3.727,3.727,0,0,0,7.194,0H23a1,1,0,0,0,0-2Zm-6.333,2.75A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z"
            />
            <path
              d="M23,19.25H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2ZM7.333,22a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z"
            />
          </svg>
          <router-link
            :class="{ dark: isDark }"
            class="font-bold text-black dark:text-white"
            to="/settings"
          >
            Settings
          </router-link>
        </button>
      </div>
      <div class="mx-10 dark:text-white" :class="{ dark: isDark }">
        <p class="text-center">
          {{ date.getHours() > 18 ? "Bonsoir 👋" : "Bonjour 👋" }}
        </p>
        <div class="flex mx-4 space-x-2">
          <p>
            {{
              lastName.length > 6
                ? `${lastName.slice(0, 6) + myValue}`
                : `${lastName}`
            }}
          </p>
          <p>
            {{
              firstName.length > 6
                ? `${firstName.slice(0, 5) + myValue}`
                : `${firstName}`
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
