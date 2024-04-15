<script>
    import LogoPage from "./LogoPage.vue";
    import VoirProfil from "./VoirProfil.vue";
    import { useDark, useToggle } from "@vueuse/core";
    const isDark = useDark();
    export default {
        props: [
            "isDark",
            "valueFixedOther",
            "valueFixed",
            "moonIsSelected",
            "sunIsSelected",
            "toggleProfil",
            "reveleProfil",
        ],
        
        data() {
            return {
                isDark,
            }
        },

        components: {
            'logopage': LogoPage,
            'voirprofil': VoirProfil,
        },

        methods: {

        }
    }
</script>

<template>
    <div :class="{ 'dark': isDark }" class="flex px-8 justify-between bg-white dark:bg-black/80 shadow-xl py-1">
                <logopage :isDark="isDark" :valueFixedOther="valueFixedOther" :valueFixed="valueFixed" :moonIsSelected="moonIsSelected" :sunIsSelected="sunIsSelected" ></logopage>
                <div class="flex space-x-8">
                    <label for="darkModeToggle" class="flex items-center cursor-pointer">
                        <div class="relative">
                        <!-- Checkbox caché -->
                        <input
                            id="darkModeToggle"
                            type="checkbox"
                            class="hidden"
                            v-model="isDark"
                        />
                        <!-- Barre de commutation -->
                        <div
                            class="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner"
                        ></div>
                        <!-- Curseur -->
                        <div
                            class="absolute left-0 top-0 w-8 h-8 bg-white dark:bg-black border dark:border-gray-600 rounded-full shadow-md transform transition-transform duration-300"
                        ></div>
                        </div>
                        <!-- Étiquette du mode sombre -->
                        <div
                        class="ml-3 text-sm text-gray-700 dark:text-white font-medium"
                        >
                        Dark Mode
                        </div>
                    </label>
                    <!-- <input type="checkbox" v-model="isDark"/> -->
                    <button @click="toggleProfil" class="py-1">
                        <svg :class="{ 'dark': isDark }" class="dark:fill-white border rounded-full px-2" mlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="40" height="40"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                    </button>
                    <voirprofil :toggleProfil="toggleProfil" :reveleProfil="reveleProfil"></voirprofil>
                </div>
            </div>
</template>

<script>
</script>