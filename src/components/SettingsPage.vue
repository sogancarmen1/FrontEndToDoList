<script>
    import SideBar from "./SideBar.vue";
    import TopBar from "./TopBar.vue";
    import VoirProfil from "./VoirProfil.vue";
    export default {
        props: [
            'isSettingsSeleted',
            "toogleProjectToSettings",
            "isSettingsSeleted",
            "reveleProfil",
            "toggleProfil",
            "isDark",
            "valueFixedOther",
            "valueFixed",
            "moonIsSelected",
            "sunIsSelected",
        ],

        data() {
            return {
                reveleProfil: false,
            }
        },

        methods: {
            toggleProfil() {
                this.reveleProfil = !this.reveleProfil;
            },
        },

        components: {
            'sidebar': SideBar,
            'topbar': TopBar,
            'voirprofil': VoirProfil,
        }
    }
</script>

<template>
    <div class="">
        <topbar :reveleProfil="reveleProfil" :toggleProfil="toggleProfil" :isDark="isDark" :valueFixedOther="valueFixedOther" :valueFixed="valueFixed" :moonIsSelected="moonIsSelected" :sunIsSelected="sunIsSelected"></topbar>
    </div>
    <div class="flex">
        <sidebar :toogleProjectToSettings="toogleProjectToSettings" :toogleSettingsToProject="toogleSettingsToProject" :isDark="isDark"></sidebar>
        <div class="flex justify-center h-screen items-center px-[400px]">
            <h1>Settings page</h1>
        </div>
   </div>
</template>

<style>
</style>