<script setup>
import NavigationDrawer from './NavigationDrawer.vue';
import HeroStats from './HeroStats.vue';
import HeroInfo from './HeroInfo.vue';
import { ref } from 'vue';

const drawer = ref(false)

const handleClose = () => {
    drawer.value = false
}

</script>

<template>
    <v-app-bar class="bg-grey-darken-4" :elevation="10" height="130">

        <v-btn @click.stop="drawer = !drawer" prepend-icon="mdi-menu-right-outline">
            Menu
        </v-btn>

        <v-container class="d-flex justify-center align-center mx-auto self-align-center">
            <HeroInfo />
            <HeroStats />
        </v-container>

        <template v-slot:append>
            <v-btn icon="mdi-theme-light-dark"></v-btn>
            <v-btn icon="mdi-help"></v-btn>
        </template>
    </v-app-bar>

    <NavigationDrawer :drawer="drawer" v-on:close="handleClose" />
</template>

