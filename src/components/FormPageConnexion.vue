<script>
import { useDark, useToggle } from "@vueuse/core";
import { postData } from "../utils/utils";
import axios from "axios";
const isDark = useDark();
const toggleDark = useToggle(isDark);
import Cookies from "js-cookie";
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { onMounted, onUpdated } from "vue";
import { useToast } from "vue-toast-notification";
export default {
  props: [""],
  data() {
    return {
      emailValue: "",
      password: "",
      showError: false,
      isDark,
      showPassword: false,
      showTrueCheckBox: false,
    };
  },

  methods: {
    async onSubmit() {
      try {
        const value = await postData(
          "https://backend-application-v09m.onrender.com/auth/login",
          {
            email: this.emailValue,
            password: this.password,
          }
        );
        if (value.data != null) {
          const userStore = useUserStore();
          const toast = useToast();
          userStore.setUserData(value.data.data);
          toast.success(value.data.message, {
            position: "top-right",
          });
          this.$router.push("/home");
        }
      } catch (error) {
        const toast = useToast();
        toast.error(error.response.data.message, {
          position: "top-right",
        });
      }
    },
    showOrNotPassword() {
      this.showPassword = !this.showPassword;
    },
    showOrNotCheckBox() {
      this.showTrueCheckBox = !this.showTrueCheckBox;
    },
  },
};
</script>

<template>
  <!--
        Faire la vérification au niveau de l'email (afficher le message en bas), faire le voir au niveau du password, 
        Vérifier si les données entré au niveau du password respect un certain regex? (Faire le message pour ça)
        Vérifier si les données entré au niveau du password sont correctes? (Faire le message pour ça)
        Faire les vues au niveau des password
    -->
  <div
    :class="{ dark: isDark }"
    class="md:flex items-center justify-center dark:bg-black/50 h-screen lg:bg-blue-200"
  >
    <!-- Changement -->
    <div
      class="lg:relative lg:w-[70vw] lg:h-[80vh] bg-white lg:rounded-2xl lg:shadow-custom-shadow"
    >
      <div
        class="absolute top-0 left-0 w-full h-full flex items-center justify-around"
      >
        <!-- Changement -->
        <div
          class="invisible md:visible relative md:w-1/2 h-full flex flex-col items-center"
        >
          <img
            class="w-full h-full object-cover lg:rounded-l-2xl"
            src="../assets/bg-left.png"
            alt=""
          />
          <div class="absolute">
            <div class="mt-[60px]">
              <div class="flex space-x-2">
                <svg
                  class="w-[40px] h-[40px]"
                  fill="currentColor"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30 0c16.569 0 30 13.431 30 30v30H30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0Z"
                    fill="#918EF4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.68 30.585v-.392c2.418-.245 3.6-1.479 3.6-3.849v-4.323c0-2.632.938-3.7 3.257-3.7h.657V16h-.9c-3.882 0-5.71 1.826-5.71 5.658v3.666c0 2.632-.9 3.5-3.584 3.5v3.125c2.68 0 3.584.871 3.584 3.5v3.666c0 3.832 1.826 5.658 5.706 5.658h.9v-2.315h-.657c-2.319 0-3.257-1.068-3.257-3.7v-4.324c.005-2.368-1.176-3.602-3.596-3.849ZM44 30.193v.392c-2.418.248-3.6 1.482-3.6 3.849v4.325c0 2.632-.938 3.7-3.257 3.7h-.657v2.319h.9c3.88 0 5.706-1.826 5.706-5.658v-3.667c0-2.632.9-3.5 3.584-3.5v-3.127c-2.68 0-3.584-.871-3.584-3.5v-3.668C43.093 17.826 41.264 16 37.387 16h-.9v2.319h.657c2.32 0 3.257 1.068 3.257 3.7v4.325c0 2.367 1.183 3.6 3.6 3.849ZM30.5 27a3.5 3.5 0 0 1 3.5 3.5V34h-3.5a3.5 3.5 0 1 1 0-7Z"
                    fill="#fff"
                  />
                </svg>
                <span class="text-white font-bold my-2">ProAt</span>
              </div>
            </div>
          </div>
          <div class="absolute mt-[120px]">
            <!-- changement -->
            <svg
              class="w-[280px] h-[350px] lg:w-[250px] lg:h-[250px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 424 357"
            >
              <circle cx="215.94" cy="178.324" r="178.324" fill="#F1F0FF" />
              <path fill="#fff" d="M205.561 100.581h109.347v169.327H205.561z" />
              <path
                d="M183.645 203.931h112.116M183.645 215.004h112.116M183.645 226.076h112.116M183.645 237.149h112.116"
                stroke="#000"
              />
              <circle cx="260.234" cy="149.949" fill="#F2F2F2" r="28.606" />
              <path
                opacity=".7"
                fill="#98B9F2"
                d="M295.76 160.792h45.215v41.986H295.76z"
              />
              <path
                d="m307.499 181.95 6.279-2.46v.967l-5.135 1.939 5.135 1.944v.967l-6.279-2.465v-.892Zm11.838-4.635h.816l-2.503 7.89h-.816l2.503-7.89Zm10.049 5.538-6.279 2.454v-.967l5.13-1.944-5.13-1.939v-.967l6.279 2.46v.903Z"
                fill="#fff"
              />
              <path
                stroke="#000"
                d="M16.624 17.302h244.071v160.561H16.624zM16.624 25.838h244.071"
              />
              <path
                stroke="#000"
                d="M34.387 40.14h73.36v73.36h-73.36zM121.819 46.6h112.116M121.819 57.673h112.116M121.819 68.746h112.116M121.819 79.818h112.116"
              />
              <path
                opacity=".44"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m71.067 59.518-19.978 34.6h39.956l-19.978-34.6Z"
                fill="#918EF4"
              />
              <circle cx="21.93" cy="21.684" fill="#AB8DE5" r="2.076" />
              <circle cx="29.081" cy="21.684" r="2.076" fill="#73E5E2" />
              <circle cx="36.232" cy="21.684" r="2.076" fill="#50B89D" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m124.125 148.218 6.921-6.113h-7.059l.138 6.113Z"
                fill="#AB8DE5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M117.205 131.032c0-3.249 1.149-6.022 3.446-8.32 2.297-2.297 5.07-3.445 8.319-3.445h29.99c3.249 0 6.022 1.148 8.319 3.445 2.297 2.298 3.446 5.071 3.446 8.32 0 3.248-1.149 6.021-3.446 8.319-2.297 2.297-5.07 3.446-8.319 3.446h-29.99c-3.249 0-6.022-1.149-8.319-3.446-2.297-2.298-3.446-5.071-3.446-8.319Z"
                fill="#AB8DE5"
              />
              <circle cx="136.814" cy="131.032" r="2.076" fill="#fff" />
              <circle cx="143.965" cy="131.032" fill="#fff" r="2.076" />
              <circle cx="151.116" cy="131.032" fill="#fff" r="2.076" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m343.282 79.01-6.921-6.113h7.059l-.138 6.113Z"
                fill="#98B9F2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M350.203 61.825c0 3.248-1.149 6.021-3.446 8.319-2.298 2.297-5.071 3.446-8.319 3.446h-29.99c-3.249 0-6.022-1.15-8.319-3.446-2.298-2.298-3.446-5.07-3.446-8.32 0-3.248 1.148-6.021 3.446-8.319 2.297-2.297 5.07-3.445 8.319-3.445h29.99c3.248 0 6.021 1.148 8.319 3.445 2.297 2.298 3.446 5.07 3.446 8.32Z"
                fill="#98B9F2"
              />
              <circle cx="330.595" cy="61.825" fill="#fff" r="2.076" />
              <circle cx="323.442" cy="61.825" fill="#fff" r="2.076" />
              <circle cx="316.291" cy="61.825" fill="#fff" r="2.076" />
              <circle cx="339.591" cy="19.609" fill="#918EF4" r="2.076" />
              <circle cx="343.974" cy="28.144" fill="#918EF4" r="2.076" />
              <circle cx="296.221" cy="112.347" fill="#918EF4" r="3.23" />
              <circle cx="315.138" cy="123.419" fill="#918EF4" r="3.23" />
              <circle cx="24.468" cy="127.111" fill="#F98B67" r="3.23" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M303.695 274.638v-.461l-1.107-1.384-2.561-3.11-2.722-3.294s-2.621-1.813-3.294-2.127a17.942 17.942 0 0 0-7.76-2c-1.776 0-8.416.268-8.429 1.384 0 1.656 9.3 7.927 16.116 10.972 2.993.02 9.757.02 9.757.02Z"
                fill="#1F161E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M302.288 274.638c-9.463-7.281-28.781-46.992-23.826-61.71 10.547 5.375 22.119 23.909 27.577 39.559.293 1.019.529 2.054.706 3.1l2.215 10.15.535 8.919-7.207-.018Z"
                fill="#6F9CEB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M308.748 274.638c-3.193-2.593-4.212-10.27-4.24-13.135-.051-5.347.77-9.288 5.343-15.17s3.354-15.641 9.426-22.225c6.072-6.585 10.095-8.42 17.3-8.42s9.5 11.682 9.458 14.621c-.083 11.856-7.553 13.536-12.111 19.192-3.308 4.106-3.566 7.465-4.568 9.386-5.37 10.344-9.735 14.234-12.965 15.752"
                fill="#918EF4"
              />
              <path
                d="M310.51 273.779c.092-20.222 21.4-50.6 25.957-55.149"
                stroke="#fff"
                stroke-width=".4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M311.658 264.589c-2.358-2.57-4.5-9.855-4.18-11.747M305.62 272.893c-3.341-5.92-19.19-34.784-25.099-56.044"
                stroke="#fff"
                stroke-width=".4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M316.411 274.637h9.929l-8.3 30.913h-22.211l-8.171-30.913h28.753"
                fill="#B37361"
              />
              <path
                d="M281.069 264.27c4.84.332 10.93.554 15.226 3.483"
                stroke="#fff"
                stroke-width=".4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M357.791 148.104c-1.167 5.569-9.647 74.647-6.875 91.146 2.772 16.499 47.984 51.07 49.963 51.674 2.307-1.692 5.7-7.243 5.7-7.243s-33.15-38.428-33.782-39.969c-.632-1.541 7.262-90.532 7.262-90.532l-22.268-5.076Z"
                fill="#7472C1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m411.779 160.676-33.825 137.958h-11.391l11.544-143.919 33.672 5.961Z"
                fill="#AB8DE5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M387.758 81.688c4.669 0 29.026.788 33.427 9.36 4.401 8.573.254 48.201-2.482 49.733-1.476.826-1.878.022-2.307 1.699-.429 1.677-4.614 18.193-4.614 18.193-2.658.074-41.4-5.763-53.982-12.586.074-1.9.683-6.828.683-7.207-1.67.682-3.691.825-4.245 0-4.909-7.434 2.408-46.184 7.659-53.983 2.231-3.34 18.361-5.187 25.861-5.21Z"
                fill="#6F9CEB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M403.793 141.852c1.144 0 10.995 6.921 10.15 10.321.692-2.731 2.87-11.17 2.87-11.17-.936.18-12.18.863-13.02.849Z"
                fill="#1F161E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M393.785 86.21c0 1.5-11.862 1.5-11.862 0V70.984h11.862V86.21Z"
                fill="#F8CDBA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M386.979 74.587c.923 0 6.805 2.6 6.805 4.051v-7.654c-1.466 0-6.805 3.603-6.805 3.603Z"
                fill="#1F161E"
              />
              <circle cx="385.355" cy="64.16" r="11.539" fill="#F8CDBA" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M381.453 47.292c-5.924 0-9.615 3.719-9.615 8.485 0 3.963.96 6.206 2.09 6.773.715-3.848 2.27-5.629 3.557-6.395 1 .766 2.713 2.621 5 3.193 2.287.572 8.245.461 13.057 3.959 1.573-1.43 3.142-3.29 3.142-5.481s-.969-4.941-6.667-6.529c-3.763-1.048-4.289-4.005-10.564-4.005Z"
                fill="#1F161E"
              />
              <ellipse
                cx="374.574"
                cy="66.536"
                rx="2.021"
                ry="1.052"
                fill="#FA9E9F"
              />
              <ellipse
                cx="387.285"
                cy="66.536"
                rx="2.021"
                ry="1.052"
                fill="#FA9E9F"
              />
              <path
                d="M379.511 64.353c-.378.54-2.307 2.806-.272 3.72M383.312 70.716a3.432 3.432 0 0 0 2.039-1.435"
                stroke="#1F161E"
                stroke-linecap="round"
              />
              <circle cx="396.022" cy="65.489" r="2.667" fill="#F8CDBA" />
              <path
                d="M404.059 104.393c-.208 2.547-1.02 15.133-.715 16.79-3.871 1.347-39.314 18.155-45.446 20M362.896 100.42c-.817 2.851-3.566 15.793-1.633 21.8"
                stroke="#1F161E"
                stroke-linecap="round"
              />
              <path
                d="M371.944 135.296c1.846 1.3 19.535 9.126 43.993 6.173"
                stroke="#1F161E"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M370.252 122.225c1.186.189-2.681-2.9-4.872-1.749-2.191 1.151-5.144 6.349-4.54 7.553a1.558 1.558 0 0 0 2.307.766c.594-.383 5.037-6.903 7.105-6.57Z"
                fill="#F8CDBA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M406.201 284.248c.632.461 6.238 4.254 6.284 6.644.046 2.39-5.223 10.312-6.284 10.538-1.061.226-1.818-.669-1.818-2.27s2-4.406 1.735-5.652c-.265-1.246-2.856-3.525-4.185-3.566M376.871 298.634c0 1.1.637 7.991-.637 8.632s-15.327 1.02-15.964.383c-.637-.637-1.024-1.979-.461-2.362s6-1.472 6.736-1.979a6.149 6.149 0 0 0 1.384-4.674"
                fill="#EBEBEB"
                fill-opacity=".251"
              />
              <path fill="#B37361" d="M12.001 247.457h89.222v45.257H12.001z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M145.179 226.246c.388 2.307 6.967 55.047 8.033 55.919 1.066.872 12.383 2.805 13.352 1.356.194-2.307.461-39.088 1.061-42.378"
                fill="#1F161E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.884 215.242c-4.564-2.247 4.95 42.295 29.99 42.295 25.038 0 67.185-38.142 74.009-38.142 15.065 0 50.724 29.575 53.521 29.575 2.141-2.141 6.422-5.887 6.422-7.382s-34.142-57.673-59.69-57.673c-9.904.013-93.95 36.416-104.252 31.327Z"
                fill="#7472C1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.975 216.002c5.006-1.135 11.235-4.074 16.748-7.078-15 4.9-27.291 8.074-30.84 6.321-2.417-1.19-.885 10.732 4.8 22.216-1.03-2.222-2.497-18.767 9.292-21.459Z"
                fill="#1F161E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.01 137.86c3.945.106 24.48-.5 30.11 4.863 4.175 3.977 17.159 38.179 19.16 50.189-8.72 4.434-71.62 34.548-91.08 21.307-.43-10.289 1.569-51.19 14.3-72.64 4.654-3.101 23.718-3.816 27.51-3.719Z"
                fill="#fff"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.01 128.073h-12v12.891c0 3.23 12 3.2 12 0v-12.891Z"
                fill="#F8CDBA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.015 135.856c0-1.43 3.963-5.024 6.413-4.9.06-1.592-5.6-3.88-5.6-3.88l-.817 2.2.004 6.58Z"
                fill="#1F161E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M63.574 128.074c.27-1.249.405-2.523.406-3.8 0-9.514-7.433-17.228-16.61-17.228s-16.61 7.714-16.61 17.228c0 1.273.135 2.546.405 3.795l32.409.005Z"
                fill="#1F161E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59.196 116.461c-2.035-.309-4.066-1.91-5.481-2.957-8.075 5.915-13.247 5.99-13.806 5.99-.559 0-2.832 3.267-3.88 3.636l-.092-.055a12.6 12.6 0 1 0 24.21-6.612 3.871 3.871 0 0 1-.95 0l-.002-.002Z"
                fill="#F8CDBA"
              />
              <circle cx="38.374" cy="104.295" r="4.9" fill="#1F161E" />
              <path
                d="M40.555 119.233a2.063 2.063 0 0 0 0 4.12M56.262 119.496c.6.807 2.159 2.224 0 3.723M49.714 124.3a2.467 2.467 0 0 0 1.555 2.422"
                stroke="#1F161E"
                stroke-linecap="round"
              />
              <ellipse
                cx="45.696"
                cy="123.456"
                rx="1.901"
                ry=".987"
                fill="#FA9E9F"
              />
              <ellipse
                cx="59.828"
                cy="123.456"
                rx="1.901"
                ry=".987"
                fill="#FA9E9F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m72.686 173.511 12.822-3.3c1.233 2.095 7.23 22.677 7.23 22.677l-19.791 8.343c.257-3.899 1.035-21.754-.26-27.72Z"
                fill="#F8CDBA"
              />
              <path
                d="M27.73 170.285a70.343 70.343 0 0 1-2.077 10.22M72.686 173.511c-.309-2.441-2.118-16.194-5.2-23.434"
                stroke="#1F161E"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m72.686 173.511 12.822-3.3c1.233 2.095 7.23 22.677 7.23 22.677l-19.791 8.343c.257-3.899 1.035-21.754-.26-27.72Z"
                fill="#F8CDBA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M175.786 247.88c.286.461 4.106 5.149 5.458 5.2 1.352.051 9.56-5.509 9.2-6.7-.36-1.191-5.509-.415-6.395-.835a9.767 9.767 0 0 1-3.188-3.271M155.6 282.655c-.1.512-.618 6.552.318 7.53.936.978 10.7 2.676 11.272 1.564.572-1.112-3.691-4.125-4.019-5.038a9.7 9.7 0 0 1 0-4.558"
                fill="#1F161E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M140.288 194.181H96.84l10.344-27.411h43.448l-10.344 27.411Z"
                fill="#969696"
              />
              <path fill="#969696" d="M60.636 193.147h43.448v1.033H60.636z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.654 180.509c-.835 3.119-4.891 16.5-3.24 18.806 1.653 2.306 43.02-2.921 54.089-6.367 2.819-.923 4.909-3.34 6.159-3.654a6.6 6.6 0 0 1 7.456 4.715c-4.416 2.141-68.238 34.724-88.916 20.223-3.908-2.8 2.948-36.943 3.262-38.664 3.49.42 21.19 4.941 21.19 4.941Z"
                fill="#F8CDBA"
              />
              <path
                d="M73.277 193.78c1.246-.3 2.335-.586 3.23-.863 2.82-.923 4.91-3.34 6.16-3.654a6.6 6.6 0 0 1 7.455 4.715"
                stroke="#1F161E"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <!-- changement -->
          <div class="absolute mt-[450px] lg:mt-[360px]">
            <h1 class="text-white font-medium">Project and task</h1>
          </div>
          <div class="absolute mt-[470px] lg:mt-[380px] flex flex-col">
            <span class="font-medium text-white text-sm"
              >management application</span
            >
          </div>
          <div class="absolute mt-[520px] lg:mt-[410px] flex flex-col">
            <span class="font-light text-white text-sm"
              >Keep control of your tasks, deadlines, and teams,</span
            >
          </div>
          <div class="absolute mt-[540px] lg:mt-[425px] flex flex-col">
            <span class="font-light text-white text-sm">all in one place.</span>
          </div>
        </div>
        <!-- changement -->
        <div
          :class="{ dark: isDark }"
          class="md:w-1/2 items-center dark:lg:bg-black/80 justify-center w-full md:h-full md:relative flex"
        >
          <div class="md:flex md:flex-col md:gap-2 mt-[80px] mx-36">
            <div class="flex flex-col mx-6">
              <span
                :class="{ dark: isDark }"
                class="dark:text-white font-extrabold text-2xl mx-24"
                >Welcome</span
              >
              <span
                :class="{ dark: isDark }"
                class="dark:text-white font-extrabold text-2xl mx-[68px]"
                >back to ProAt</span
              >
            </div>
            <div class="flex space-x-2">
              <!-- Changement -->
              <a
                :class="{ dark: isDark }"
                href="#"
                class="dark:bg-black/30 bg-gray-50 cursor-pointer dark:hover:bg-black/60 hover:bg-gray-200 flex gap-2 text-gray-800 font-light text-sm py-4 px-2 border border-gray-200 rounded-full"
              >
                <svg
                  class=""
                  width="19"
                  height="19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="a"
                    style="mask-type: luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="19"
                    height="19"
                  >
                    <path fill="#fff" d="M.625.7h18v18h-18z" />
                  </mask>
                  <g mask="url(#a)" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                      d="M16.98 8.231h-.605v-.03h-6.75v3h4.239a4.498 4.498 0 0 1-8.739-1.5 4.5 4.5 0 0 1 4.5-4.5c1.147 0 2.19.432 2.985 1.139l2.122-2.122A7.465 7.465 0 0 0 9.625 2.2a7.5 7.5 0 1 0 7.354 6.031Z"
                      fill="#FFC107"
                    />
                    <path
                      d="m2.99 6.21 2.464 1.806A4.498 4.498 0 0 1 9.625 5.2c1.148 0 2.191.433 2.986 1.14l2.121-2.122A7.465 7.465 0 0 0 9.625 2.2 7.496 7.496 0 0 0 2.99 6.21Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M9.625 17.2a7.465 7.465 0 0 0 5.028-1.946l-2.32-1.965a4.466 4.466 0 0 1-2.708.912 4.498 4.498 0 0 1-4.231-2.98l-2.446 1.884a7.494 7.494 0 0 0 6.677 4.096Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M16.98 8.231h-.605v-.03h-6.75v3h4.239a4.515 4.515 0 0 1-1.533 2.088h.001l2.321 1.964c-.164.15 2.472-1.803 2.472-5.553 0-.503-.052-.994-.146-1.469Z"
                      fill="#1976D2"
                    />
                  </g>
                </svg>
                <span :class="{ dark: isDark }" class="dark:text-white"
                  >Log In with Google</span
                >
              </a>
              <!-- changement -->
              <a
                :class="{ dark: isDark }"
                href="#"
                class="dark:bg-black/30 bg-gray-50 cursor-pointer dark:hover:bg-black/60 hover:bg-gray-200 flex gap-2 text-gray-800 font-light text-sm py-4 px-2 border border-gray-200 rounded-full"
              >
                <svg
                  width="20"
                  height="19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.8 14.694c0 .074-.086.134-.194.134-.123.011-.208-.048-.208-.134 0-.075.085-.134.193-.134.112-.011.209.048.209.134Zm-1.158-.168c-.026.075.049.16.16.183.097.037.209 0 .231-.075.022-.074-.048-.16-.16-.193-.097-.026-.205.01-.23.085Zm1.645-.063c-.108.026-.182.097-.17.182.01.075.107.123.219.097.108-.026.182-.097.171-.171-.011-.071-.112-.12-.22-.108ZM9.737.2C4.574.2.625 4.12.625 9.282c0 4.128 2.598 7.66 6.309 8.903.476.086.644-.208.644-.45 0-.231-.011-1.504-.011-2.286 0 0-2.606.559-3.153-1.109 0 0-.424-1.083-1.035-1.362 0 0-.852-.584.06-.573 0 0 .927.074 1.437.96.815 1.437 2.18 1.024 2.713.778.086-.596.327-1.009.595-1.254-2.08-.231-4.18-.533-4.18-4.113 0-1.024.283-1.537.879-2.193-.097-.241-.413-1.239.097-2.527.778-.242 2.568 1.005 2.568 1.005a8.745 8.745 0 0 1 2.337-.316c.793 0 1.593.108 2.338.316 0 0 1.79-1.25 2.568-1.005.51 1.292.194 2.286.097 2.527.595.66.96 1.173.96 2.193 0 3.591-2.192 3.878-4.273 4.113.343.294.633.852.633 1.727 0 1.254-.011 2.806-.011 3.111 0 .242.171.536.644.45 3.722-1.235 6.245-4.767 6.245-8.895C19.086 4.119 14.9.2 9.736.2ZM4.243 13.037c-.049.038-.037.123.026.194.06.06.145.086.193.037.049-.037.038-.123-.026-.193-.06-.06-.145-.086-.193-.038Zm-.402-.301c-.026.048.011.108.085.145.06.037.134.026.16-.026.027-.048-.01-.108-.085-.145-.075-.022-.134-.011-.16.026Zm1.206 1.325c-.06.048-.037.16.048.23.086.086.194.098.242.038.048-.048.026-.16-.048-.23-.082-.086-.194-.098-.242-.038Zm-.425-.547c-.06.037-.06.134 0 .22.06.085.16.122.209.085.06-.048.06-.145 0-.23-.052-.086-.149-.123-.209-.075Z"
                    fill="#000"
                  />
                </svg>
                <span :class="{ dark: isDark }" class="dark:text-white"
                  >Log In with Github</span
                >
              </a>
            </div>
            <div class="py-2">
              <form class="w-full max-w-sm">
                <span
                  :class="{ dark: isDark }"
                  class="dark:text-white text-other text-xs"
                  >Email</span
                >
                <div class="flex items-center border-b border-bordercolor py-2">
                  <input
                    :class="{ dark: isDark }"
                    class="dark:text-white dark:bg-transparent dark:appearence-none appearance-none bg-transparent border-none w-full text-emailColor mr-3 py-1 px-2 leading-tight focus:border-black focus:outline-none"
                    @keyup.enter="onSubmit"
                    v-model="emailValue"
                    type="text"
                    placeholder="Enter your email"
                    aria-label="Email"
                  />
                </div>
                <span
                  :class="{ dark: isDark }"
                  class="dark:text-white text-other text-xs"
                  >Password</span
                >
                <div class="flex items-center border-b border-bordercolor py-2">
                  <input
                    :class="{ dark: isDark }"
                    class="dark:text-white dark:bg-transparent dark:appearence-none appearance-none bg-transparent border-none w-full text-password mr-3 py-1 px-2 leading-tight focus:outline-none"
                    :type="showPassword ? 'text' : 'password'"
                    @keyup.enter="onSubmit"
                    v-model="password"
                    placeholder="Enter your password"
                    aria-label="Password"
                  />
                  <!-- Oeil -->
                  <a @click="showOrNotPassword" class="cursor-pointer px-2">
                    <svg
                      width="17"
                      height="17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="a"
                        style="mask-type: luminance"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="17"
                        height="17"
                      >
                        <path fill="#fff" d="M.125.569h16v16h-16z" />
                      </mask>
                      <g
                        mask="url(#a)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="#BEBEBE"
                      >
                        <path
                          d="M16.125 8.57s-3-5.5-8-5.5-8 5.5-8 5.5 3 5.5 8 5.5 8-5.5 8-5.5Zm-14.827 0c.484.734 1.04 1.419 1.66 2.042 1.287 1.29 3.047 2.457 5.167 2.457 2.12 0 3.879-1.168 5.168-2.457a13.128 13.128 0 0 0 1.66-2.043 13.13 13.13 0 0 0-1.66-2.043C12.004 5.237 10.244 4.07 8.125 4.07c-2.12 0-3.879 1.168-5.168 2.457a13.132 13.132 0 0 0-1.66 2.043h.001Z"
                        />
                        <path
                          d="M8.125 6.07a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-3.5 2.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <!-- changement -->
                <div class="py-4 flex gap-[115px]">
                  <div>
                    <label class="py-4 flex block text-gray-500 font-light">
                      <div>
                        <input
                          class="mr-2 leading-tight hidden"
                          type="checkbox"
                          @click="showOrNotCheckBox"
                        />
                        <svg
                          class="cursor-pointer relative"
                          width="23"
                          height="23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x=".125"
                            y=".17"
                            width="21.524"
                            height="22"
                            rx="2"
                            fill="#7B76F1"
                            fill-opacity=".098"
                            stroke="#7B76F1"
                            stroke-opacity=".251"
                          />
                          <path
                            :class="showTrueCheckBox ? 'block' : 'hidden'"
                            d="M3 8 L8 14 L17 4"
                            stroke="#7B76F1"
                            stroke-width="1.5"
                          />
                        </svg>
                      </div>
                      <span
                        :class="{ dark: isDark }"
                        class="dark:text-white mx-1 text-xs py-1"
                      >
                        Remember me</span
                      >
                    </label>
                  </div>
                  <div>
                    <button
                      @click="onSubmit"
                      class="bg-logInColor shadow-2xl hover:bg-violet-600 text-white font-bold text-xs py-4 px-10 rounded-full"
                      type="button"
                    >
                      LOG IN
                    </button>
                  </div>
                </div>
              </form>
              <!-- changement -->
              <div
                :class="{ dark: isDark }"
                class="px-24 py-4 text-xs text-password dark:text-white"
              >
                <span>No Account yet?</span>
                <router-link to="/register" class="font-bold underline"
                  >SIGN UP</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-4 right-4">
      <label for="darkModeToggle" class="flex items-center cursor-pointer">
        <div class="relative">
          <input
            id="darkModeToggle"
            type="checkbox"
            class="hidden"
            v-model="isDark"
          />
          <svg
            :class="{ dark: isDark }"
            class="w-6 h-6 hidden dark:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
            />
          </svg>
          <svg
            :class="{ dark: isDark }"
            class="w-6 h-6 dark:hidden"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
            />
          </svg>
        </div>
        <div class="ml-3 text-sm text-gray-700 dark:text-white font-medium">
          Dark Mode
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped></style>
