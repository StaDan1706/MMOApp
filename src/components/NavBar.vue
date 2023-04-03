<script setup >
import { ref } from 'vue';
import NavigationDrawer from './NavigationDrawer.vue';
import { useTheme } from 'vuetify'
import HeroStats from './HeroStats.vue';
import HeroInfo from './HeroInfo.vue';


const theme = useTheme()
const drawer = ref(false)

const handleClose = () => {
    drawer.value = false
}

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomDarkTheme'
}

</script>

<template>
    <v-app-bar class="background" :elevation="10" height="130">

        <v-btn @click.stop="drawer = !drawer" prepend-icon="mdi-menu">
            Menu
        </v-btn>

        <v-container class="d-flex justify-center align-center mx-auto self-align-center">
            <HeroInfo />
            <HeroStats />
        </v-container>

        <template v-slot:append>
            <v-btn @click="toggleTheme" icon="mdi-theme-light-dark"></v-btn>
            <v-btn icon="mdi-help"></v-btn>
        </template>
    </v-app-bar>

    <NavigationDrawer :drawer="drawer" v-on:close="handleClose" />
</template>

