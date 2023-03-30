<script setup>
import { defineProps } from 'vue';
import { useRouter } from "vue-router"

const router = useRouter()
const { option } = defineProps(['option', 'isMenu'])

const navigateTo = () => {
        router.push(`/location/${option.id}`)
}
</script>

<template>
    <div class="ma-4 text-center" @click="navigateTo">
        <v-img :width="200" :height="125" aspect-ratio="16/9" cover :src="option.img"></v-img>
        <div>
            <h3 class="mt-2">{{ option.name }}</h3>
            <p>{{ option.description }}</p>
        </div>
    </div>
</template>