<script setup>
import NavigationDrawer from './NavigationDrawer.vue';
import { ref } from 'vue';

const drawer = ref(false)

const handleClose = () => {
    drawer.value = false
}

</script>

<template>
    <v-app-bar class="bg-grey-darken-4" :elevation="10">
        <v-btn @click.stop="drawer = !drawer" prepend-icon="mdi-menu-right-outline">
            Menu
        </v-btn>

        <template v-slot:append>

            <v-btn icon="mdi-account"></v-btn>

            <v-btn icon="mdi-theme-light-dark"></v-btn>

            <v-btn icon="mdi-help"></v-btn>
            
        </template>
    </v-app-bar>

    <NavigationDrawer :drawer="drawer" v-on:close="handleClose" />
</template>

<style scoped></style>