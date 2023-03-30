<script setup>
import menuOptions from "../data/gameData.json"
import LocationCombat from "../components/LocationCombat.vue";
import { ref } from "vue";

const options = ref(menuOptions)

</script>
<template>
    <div>
        <LocationCombat class="pa-10" :options="options"/>
    </div>
</template>