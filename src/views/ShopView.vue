<script setup>
import { ref } from 'vue';
import { shopOptions } from '../data/appConfig';
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
import { useSnackbarStore } from "../stores/snackbar"

const { activateSnackbar } = useSnackbarStore()

const store = useHeroStore()
const { gold, stamina } = storeToRefs(store)


const buyStamina = (option) => {
    if (store.canBuyStamina({ gold: gold.value, option })) {
        activateSnackbar(true, "Purchased !")
        stamina.value += option
        gold.value -= option * 10
    } else {
        activateSnackbar(true, "Not enough money!")
    }
}

</script>

<template>
    <div class="mt-10 d-flex flex-column">
        <v-btn prepend-icon="mdi-flask" class="mt-8" variant="outlined" size="large" v-for="option in shopOptions"
            @click="buyStamina(option)">
            {{ option }} stamina

            <v-tooltip activator="parent" location="right" model-value @update:model-value="true">
                {{ option * 10 }} <v-icon icon="mdi-gold"></v-icon>
            </v-tooltip>
        </v-btn>
    </div>
</template>
