<script setup>
import { shopOptions } from '../data/appConfig';
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";

const store = useHeroStore()
const { gold, stamina } = storeToRefs(store)

const buyStamina = (option) => {
    if (store.canBuyStamina({ gold: gold.value, option })) {
        stamina.value += option
        gold.value -= option * 10
    }
}

</script>

<template>
    <div class="mt-10 d-flex flex-column">
        <v-btn class="mt-8" variant="outlined" size="large" v-for="option, index in shopOptions"
            @click="buyStamina(option)">
            {{ option }} stamina

            <v-tooltip activator="parent" location="right" model-value @update:model-value="true">
                {{ option * 10 }} <v-icon icon="mdi-currency-usd"></v-icon>
            </v-tooltip>

            

        </v-btn>
</div> </template>
