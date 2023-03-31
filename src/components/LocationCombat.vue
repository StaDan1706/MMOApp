<script setup>
import { useRoute } from "vue-router";
import { defineProps, defineEmits } from 'vue';
import { useHeroStore } from "../stores/hero";

const { power, attack } = useHeroStore()
const { options, chosenDifficulty } = defineProps(['options', 'chosenDifficulty'])
const route = useRoute()

const routeId = options[route.params.id - 1]


const emit = defineEmits(["quit"])
const emitQuit = () => {
    emit("quit")
}

</script>

<template>
    <v-card class="mt-15" max-width="400">
        <v-img class="align-end text-white" height="300" width="400" :src="routeId.background" cover>
            <v-img class="mx-auto" width="100" :src="routeId.difficulty[chosenDifficulty].img"></v-img>
            <v-card-title class="text-center text-uppercase bg-red-darken-4">{{
                routeId.difficulty[chosenDifficulty].monsterName }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-3">
        </v-card-subtitle>

        <!-- <v-card-text class="text-center">
            <div> Monster Power : {{ routeId.difficulty[chosenDifficulty].power }}</div>

            <div>Your Power : {{ power }}</div>
        </v-card-text> -->

        <v-card-actions class="d-flex flex-column ">

            <v-btn value="recent" width="200">
                <v-icon>mdi-knife-military</v-icon>
                Attack
            </v-btn>

            <v-btn value="favorites" width="200">
                <v-icon>mdi-sword</v-icon>
                Special Attack
            </v-btn>


            <v-btn value="nearby" color="green" width="200">
                <v-icon>mdi-bottle-tonic-plus</v-icon>
                Heal
            </v-btn>

        </v-card-actions>
    </v-card>

    <v-bottom-navigation class="bg-grey-darken-4" :elevation="8" grow>
        <v-btn append-icon="mdi-run-fast d" @click="emitQuit" color="orange" width="100%" >
            Run Away
        </v-btn>
    </v-bottom-navigation>
</template>



<!-- <template>
    <div class="combat-view" :style="{ backgroundImage: `url(' ${routeId.background} ')` }">
        <img :src="routeId.difficulty[chosenDifficulty].img">
        <h3></h3>
    </div>
</template> -->
