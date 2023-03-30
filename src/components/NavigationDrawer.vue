<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['drawer'])
const emit = defineEmits(['close'])

const handleClose = () => {
    emit('close')
}


</script>

<template>
    <v-navigation-drawer class="bg-grey-darken-4" v-model="props.drawer" temporary>

        <v-divider></v-divider>

        <v-list @click="handleClose()" density="compact" nav>
            <v-list-item prepend-icon="mdi-account" title="Hero" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-sword" title="Adventure" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-skull" title="Boss" value="boss"></v-list-item>
            <v-list-item prepend-icon="mdi-flask" title="Shop" value="shop"></v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>
