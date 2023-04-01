<script setup>
import { useRoute } from "vue-router";
import { ref, defineProps, defineEmits } from 'vue';
import { useHeroStore } from "../stores/hero";

const { attack } = useHeroStore()
const { options, chosenDifficulty } = defineProps(['options', 'chosenDifficulty'])
const route = useRoute()
const isWin = ref(false)
const snackbar = ref(false)
const timeout = 2000

const routeId = options[route.params.id - 1]


const emit = defineEmits(["quit"])
const emitQuit = () => {
    emit("quit")
}

const attackOpponent = (val) => {
    isWin.value = attack(val)
    snackbar.value = true;
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

        <v-card-actions class="d-flex flex-column ">

            <v-btn @click="attackOpponent(routeId.difficulty[chosenDifficulty].power)" value="recent" width="200">
                <v-icon>mdi-sword</v-icon>
                Attack
            </v-btn>

            <v-btn append-icon="mdi-run-fast d" @click="emitQuit" color="orange" width="100%">
                Run Away
            </v-btn>

        </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ isWin }}

        <template v-slot:actions>
            <v-btn color="blue" variant="isWin" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
