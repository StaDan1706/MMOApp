<script setup>
import { ref } from "vue";
import gameData from "../data/dungeonsData.json"
import DungeonSliderVue from "../components/DungeonSlider.vue";
import DungeonCombat from "../components/DungeonCombat.vue";

const selectedDungeon = ref(null)

const displayCombat = (val) => {
    selectedDungeon.value = val
}

</script>

<template>
    <div class="mt-15">
        <DungeonSliderVue v-if="!selectedDungeon" :gameData="gameData" @choose="displayCombat"/>
        <DungeonCombat v-else :selectedDungeon="selectedDungeon" @quit="selectedDungeon=null"/>
    </div>
</template>

