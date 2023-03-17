<script setup>
import menuOptions from "../data/gameData.json"
import AppHero from "../components/AppHero.vue"
import LocationCombat from "../components/LocationCombat.vue";
import { ref } from "vue";

const options = ref(menuOptions)

</script>
<template>
    <div>
        <AppHero />
        <LocationCombat :options="options"/>
    </div>
</template>