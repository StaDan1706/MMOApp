<script setup>
import { defineProps, defineEmits } from 'vue';
import { useBossStore } from "../stores/boss";
import { storeToRefs } from "pinia";
const store = useBossStore()
const { actualDungeonIndex } = storeToRefs(store)

const { gameData } = defineProps(['gameData'])

const emit = defineEmits(["choose"])

const chooseDungeon = (val) => {
    emit("choose", val)
}


</script>


<template>
    <v-sheet class="mx-auto" elevation="8" max-height="400" max-width="700">
        <v-slide-group direction="horizontal" class="pa-5 mobileSlide" center-active show-arrows>
            <v-slide-group-item v-for="option in gameData" :key="option.id">
                <v-card @click="chooseDungeon(option)" class="ma-4" height="175" width="175"
                    :disabled="!(option.id == actualDungeonIndex)" elevation="10"
                    :color="option.id > actualDungeonIndex ? 'red' : option.id < actualDungeonIndex ? 'green' : ''">


                    <v-icon v-if="(option.id > actualDungeonIndex)" icon="mdi-lock"></v-icon>
                    <v-icon v-else-if="(option.id < actualDungeonIndex)" icon="mdi-check-bold"></v-icon>
                    <v-icon v-else icon="mdi-lock-open-variant"></v-icon>

                    <v-img :src="option.img" height="120"></v-img>
                    <v-card-subtitle class="text-center">{{ option.name }}</v-card-subtitle>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<style scoped>
.mobileSlide {
    max-height: 400px;
}
</style>