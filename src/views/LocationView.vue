<script setup>
import q from "../data/gameData.json"
import { ref } from "vue";
import Hero from "../components/AppHero.vue"
import Combat from "../components/LocationCombat.vue";

const options = ref(q)

</script>
<template>
    <div>
        <Hero />
        <Combat :options="options"/>
    </div>
</template>