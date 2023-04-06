<script setup>
import { defineProps, defineEmits } from 'vue';
import { navbarOptions } from '../data/appConfig';
import router from '../router';

const navigateTo = (value) => {
    router.push(`/${value}`)
}

const props = defineProps(['drawer'])
const emit = defineEmits(['close'])

const handleClose = () => {
    emit('close')
}



</script>

<template>
    <v-navigation-drawer class="background" v-model="props.drawer" temporary>

        <v-divider></v-divider>

        <v-list @click="handleClose()" density="compact" nav>
            <v-list-item v-for="option in navbarOptions" :key="option" @click="navigateTo(option.value)" :prepend-icon="option.icon"
                :title="option.title"></v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>
