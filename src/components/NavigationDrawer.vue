<script setup>
import { defineProps, defineEmits } from 'vue';
import router from '../router';

const navigateTo = (value) => {
    router.push(`/${value}`)
}

const props = defineProps(['drawer'])
const emit = defineEmits(['close'])

const handleClose = () => {
    emit('close')
}

const items = [
    {
        icon: "mdi-sword",
        title: "Adventure",
        value: "adventure"
    },
    {
        icon: "mdi-skull",
        title: "Boss",
        value: "boss"
    },
    {
        icon: "mdi-flask",
        title: "Shop",
        value: "shop"
    },
]


</script>

<template>
    <v-navigation-drawer class="background" v-model="props.drawer" temporary>

        <v-divider></v-divider>

        <v-list @click="handleClose()" density="compact" nav>
            <v-list-item v-for="item in items" :key="item" @click="navigateTo(item.value)" :prepend-icon="item.icon" :title="item.title" ></v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>
