<template>
  <div
    v-if="projectStore.showModalOfAddProject"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <AddProject></AddProject>
  </div>
  <!-- Travailler sur les transitions après -->
  <!-- Travailler sur le truc de la mise à jour -->
  <div @click="" class="bg-black/85 h-screen w-16 sm:w-52 pt-4">
    <div @click="toggleModalOfProjetAndPlusInSideBar">
      <ul v-for="store in stores" :key="store.nameIcon" class="cursor-pointer">
        <router-link class="" :to="store.nameRoute">
          <li
            class="flex hover:bg-white/30 px-3 sm:px-2 sm:mx-4 rounded-2xl"
            :title="store.title"
          >
            <IconView
              :icon-prop="store.nameIcon"
              class-prop="text-white flex gap-3 px-2 py-2"
            />
            <span
              class="pt-[2px] text-white font-zen text-base hidden transition ease-in-out duration-500 sm:inline"
              >{{ store.textWithIcon }}</span
            >
          </li>
        </router-link>
      </ul>
    </div>
    <hr class="border-white/20 my-4" />
    <div class="flex flex-col justify-between space-x-4">
      <div
        class="h-[360px] overflow-y-auto scrollbar-thumb-white/30 scrollbar-thin scrollbar-track-transparent"
      >
        <ul
          v-for="projectAndEquipe in projectsAndEquipe"
          :key="projectAndEquipe.id"
          @mouseover="projectAndEquipe.isSelect = true"
          @mouseleave="projectAndEquipe.isSelect = false"
          class="cursor-pointer"
        >
          <li class="" :title="projectAndEquipe.title">
            <div class="flex hover:bg-white/30 mx-1 py-2 rounded-md relative">
              <IconView
                v-show="projectAndEquipe.isSelect"
                :icon-prop="
                  projectAndEquipe.showValue
                    ? projectAndEquipe.firstNameIcon
                    : projectAndEquipe.secondeFormFirstNameIcon
                "
                class-prop="text-white hidden sm:inline absolute px-2 pb-1 rounded-md w-2 mx-1 hover:bg-black/25"
                @click="
                  projectAndEquipe.showValue = !projectAndEquipe.showValue
                "
              ></IconView>
              <IconView
                :icon-prop="projectAndEquipe.fourNameIcon"
                class-prop="text-white flex px-4 sm:pl-8"
              ></IconView>
              <span class="font-zen text-white text-base hidden sm:inline">{{
                projectAndEquipe.title
              }}</span>
              <IconView
                @click="toggleAndHiddenOther"
                v-show="projectAndEquipe.isSelect"
                :icon-prop="projectAndEquipe.secondNameIcon"
                class-prop="text-white text-sm w-3 px-1 ml-1 mt-[2px] hidden sm:inline px-1 pb-1 h-2 rounded-md hover:bg-black/25 absolute left-32"
              ></IconView>
              <IconView
                @click="toggleAndHidden"
                :icon-prop="projectAndEquipe.thirdNameIcon"
                class-prop="hidden sm:inline text-white sm:px-1 sm:ml-8 sm:pb-1 sm:mt-1 sm:rounded-md sm:w-3 sm:h-3 sm:pt-1 sm:absolute sm:inset-y-2 sm:left-32 hover:bg-black/25"
              ></IconView>
            </div>
            <div v-if="projectAndEquipe.showValue" class="">
              <ul
                v-if="Number(projectAndEquipe.listOfProject?.length) > 0"
                class="hidden sm:inline"
              >
                <li
                  v-for="project in projectAndEquipe.listOfProject"
                  :key="project.id"
                  class="text-white text-base px-5 mt-2 mx-2 rounded-md hover:bg-black/25"
                >
                  <RouterLink :to="path(Number(project.id))">
                    <div @click="see(project.id)">
                      <span
                        v-if="project.disable"
                        class="px-2 font-zen rounded bg-blue-500 my-8 mr-1"
                      ></span>
                      {{
                        project.nameOfProject.length > 10
                          ? project.nameOfProject.slice(0, 10) + "..."
                          : project.nameOfProject
                      }}
                    </div>
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div
              v-if="projectAndEquipe.showValue"
              class="relative cursor-pointer invisible sm:visible mx-2"
            >
              <!-- <span
                class="text-white text-xs hover:bg-black/25 mx-2 py-2 absolute pl-2 pr-6 rounded-md"
                >{{ projectAndEquipe.myEspace }}
                <IconView
                  :icon-prop="projectAndEquipe.thirdNameIcons"
                  class-prop="text-white w-2 pb-1 px-1 h-2 ml-1 absolute top-[2px] rounded-full hover:bg-black/50"
                ></IconView>
              </span> -->
            </div>
          </li>
        </ul>
      </div>
      <div class="fixed bottom-4">
        <hr
          class="border-opacity-10 border-white sm:border-opacity-10 sm:border-white pb-2"
        />
        <div @click="onSubmit" class="absolute bottom-16">
          <ModalsideBar :icon-and-text-prop="iconAndTextLogout"></ModalsideBar>
        </div>
      </div>
    </div>
    <div
      v-if="showModalProject"
      @click="projectStore.toggleModalAddProject"
      class="absolute left-14 top-[191px] text-white"
    >
      <ModalsideBar :icon-and-text-prop="iconAndText"></ModalsideBar>
    </div>
    <div
      @click="projectStore.toggleModalAddProject"
      v-if="showModalProjectPlus"
      class="absolute left-40 top-[185px] text-white"
    >
      <ModalsideBar :icon-and-text-prop="iconAndTextPlus"></ModalsideBar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { postData } from "@/utils/utils";
import { useRouter } from "vue-router";
import { useProjectStore } from "@/stores/user";
const projectStore = useProjectStore();
const router = useRouter();
async function onSubmit() {
  await postData("http://localhost:3000/auth/logout");
  router.push("/");
}
const iconAndTextLogout = [
  {
    icon: "fa-right-from-bracket",
    text: "Logout",
  },
];
import {
  iconAndText,
  showModalProject,
  iconAndTextPlus,
  showModalProjectPlus,
  toggleAndHidden,
  toggleAndHiddenOther,
  path,
} from "./sideBar";
import ModalsideBar from "../ModalsideBar/ModalsideBar.vue";
import { stores, projectsAndEquipe } from "./sideBar";
import IconView from "../IconView.vue";
import { RouterLink } from "vue-router";
import { toggleModalOfProjetAndPlusInSideBar } from "../layouts/topSideBar";
import { onMounted } from "vue";
import { getData } from "@/utils/utils";
import AddProject from "../AddProject.vue";
import { useTaskStore } from "@/stores/user";
async function see(id: any) {
  const taskStore = useTaskStore();
  console.log(await taskStore.getAllTasksInProject(id));
  // console.log(taskStore.tasks);
}
onMounted(async () => {
  const responseReceived = await getData("http://localhost:3000/projects");
  if (responseReceived != null) {
    projectsAndEquipe.value[0].listOfProject = responseReceived.data.map(
      (project: any) => ({
        id: project.id,
        nameOfProject: project.name,
        listOfTask: [],
        isSelectedProject: true,
        reveleTaskList: false,
        disable: true,
      })
    );
  }
});
</script>
