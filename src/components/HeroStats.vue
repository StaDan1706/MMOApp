<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { stamina, seconds, gold, power } = storeToRefs(store)
</script>

<template>
    <v-card class="d-flex flex-column align-center justify-center background">

        <v-btn prepend-icon="mdi-sword">
            {{ power }}
            <v-tooltip activator="parent" location="right">Power</v-tooltip>
        </v-btn>

        <v-btn prepend-icon="mdi-gold">
            {{ gold }}
            <v-tooltip activator="parent" location="right">Gold</v-tooltip>
        </v-btn>

        <v-btn prepend-icon="mdi-flask">
            <div v-if="stamina < 20"> +1 in {{ seconds }}</div>
            <div v-else> MAX</div>

            <v-tooltip activator="parent" location="right">Stamina regeneration</v-tooltip>
        </v-btn>

    </v-card>
</template>
 
