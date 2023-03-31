<script setup>
import { defineProps } from 'vue';
import { useRouter } from "vue-router"

const router = useRouter()
const { option } = defineProps(['option', 'isMenu'])

const navigateTo = () => {
    router.push(`adventure/location/${option.id}`)
}
</script>

<template>
    
    <v-card @click="navigateTo" class="ma-4 bg-transparent"  :width="225" :height="215">
        
        <v-img :width="225" :height="135" aspect-ratio="16/9" cover :src="option.img"></v-img>

        <v-card-title>
            {{ option.name }}
        </v-card-title>

        <v-card-subtitle>
            {{ option.description }}
        </v-card-subtitle>

    </v-card>
</template>