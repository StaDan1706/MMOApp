<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { stamina, seconds, gold, power } = storeToRefs(store)
</script>

<template>
    <v-card class="d-flex flex-column align-center justify-center bg-grey-darken-4">

        <v-btn prepend-icon="mdi-sword">
            {{ power }}
            <v-tooltip activator="parent" location="right">Power</v-tooltip>
        </v-btn>

        <v-btn prepend-icon="mdi-flask">
            {{ stamina }}
            <v-tooltip v-if="stamina < 20" activator="parent" location="right">+1 stamina in {{ seconds }}</v-tooltip>
            <v-tooltip v-else activator="parent" location="right">STAMINA MAX</v-tooltip>
        </v-btn>

        <v-btn prepend-icon="mdi-gold">
            {{ gold }}
            <v-tooltip activator="parent" location="right">Gold</v-tooltip>
        </v-btn>

    </v-card>
</template>
 
