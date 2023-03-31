<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { experience, requiredExperience } = storeToRefs(store)
</script>
<template>
    
    <v-card class="d-flex flex-column justify-center align-center bg-grey-darken-4 mx-10" width="300">

        <h3 class="text-center">Salvatore Damon</h3>
        
        <v-progress-linear  class="ma-2" color="red-accent-3" :model-value="100" :height="18">
            <template v-slot:default="{ value }">
                <strong>HP : {{ Math.ceil(value) }}%</strong>
            </template>
        </v-progress-linear>

        <v-progress-linear color="orange-lighten-1" :model-value="experience * 100 / requiredExperience + 15" :height="18">
            <template v-slot:default="{ value }">
                <strong> EXP : {{ Math.ceil(value) }}%</strong>
            </template>
        </v-progress-linear>

    </v-card>
</template>