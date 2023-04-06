<script setup>
import LocationDifficulty from "../components/LocationDifficulty.vue"
import menuOptions from "../data/adventureData.json"
import LocationCombat from "../components/LocationCombat.vue";
import { ref } from "vue";


const chosenDifficulty = ref()
const onOptionSelected = (difficulty) => {
    chosenDifficulty.value = difficulty
}

const options = ref(menuOptions)

</script>
<template>
    <div>

        <LocationDifficulty v-if="!chosenDifficulty" @difficulty="onOptionSelected" :options="options" />
        <LocationCombat v-else :options="options" :chosenDifficulty="chosenDifficulty" v-on:quit="onOptionSelected(null)" />
    </div>
</template>