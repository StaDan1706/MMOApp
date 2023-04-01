<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { experience, requiredExperience, level, stamina } = storeToRefs(store)
</script>
<template>
    <v-card class="d-flex flex-column justify-center align-center bg-grey-darken-4 mx-10" width="300">

        <h3 class="text-center">Salvatore Damon - {{ level }} lvl</h3>

        
        <v-progress-linear color="orange-lighten-1" :model-value="experience * 100 / requiredExperience" :height="18">
            <template v-slot:default="{ value }">
                <strong> EXP : {{ Math.ceil(experience * 100 / requiredExperience) }}%</strong>
            </template>
        </v-progress-linear>

        <v-progress-linear striped class="ma-2" color="blue-accent-3" :model-value="stamina*5" :height="18">
            <template v-slot:default="{ value }">
                <strong>
                    <v-icon>mdi-flask</v-icon>{{ stamina }} / 20</strong>
            </template>
        </v-progress-linear>

    </v-card>
</template>