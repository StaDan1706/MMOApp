<script setup>
import Difficulty from "./LocationDifficulty.vue"
import { useRoute } from "vue-router";
import { ref, defineProps } from 'vue';
import { useHeroStore } from "../stores/hero";
const { store, attack } = useHeroStore()
const { options } = defineProps(['options'])
const route = useRoute()
const chosenDifficulty = ref()
const routeId = options[route.params.id - 1]
const routeDif = routeId.difficulty

const onOptionSelected = (difficulty) => {
    chosenDifficulty.value = difficulty
}

const quitFromBattle = () => {
    chosenDifficulty.value = null
}

</script>
<template>
    <Difficulty v-if="!chosenDifficulty" @difficulty="onOptionSelected" :options="options" />

    <div v-else class="combat-view" :style="{ backgroundImage: `url(' ${routeId.background} ')` }">
        <img :src="routeDif[chosenDifficulty].img">
        <h3>{{ routeDif[chosenDifficulty].monsterName }}</h3>
        <div class="options-container">
            <button @click="quitFromBattle" class="quit">Quit</button>
            <button @click="attack(routeDif[chosenDifficulty].power, routeDif[chosenDifficulty].rewards.exp)"
                class="fight">Fight</button>
        </div>
    </div>
</template>
<style scoped>
.combat-view {
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    width: 450px;
    height: 400px;
    border: 2px solid bisque;
    border-radius: 16px;
    margin: 10px auto;
    background-color: rgb(110, 72, 72);
    background-size: contain;
    margin-bottom: 70px;
}

img {
    transform: scale(1.5);
}

h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    max-width: 200px;
    text-align: center;
    margin: 15px 0 100px;
    color: aliceblue;
    background-color: black;
    padding: 2px 10px;
}

.options-container {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
}

button {
    flex-grow: 1;
    height: 50px;
    border: none;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: .2s linear;
}

button:hover {
    background-color: black;
    color: white;
}

.quit {
    border-bottom-left-radius: 16px;
}

.fight {
    border-bottom-right-radius: 16px;
}

.allert-container {
    z-index: 9999;
    background-color: rgb(35, 31, 31);
    padding: 5px 60px;
    font-weight: 900;
    font-size: 24px;
    color: green;
    border-radius: 16px;
    position: absolute;
    top: 0;
    border: white 2px solid;
}

p {
    text-transform: uppercase;
}

@media screen and (max-width: 750px) {
    .combat-view {
        width: 250px;
        height: 250px;
    }

    h3 {
        margin-bottom: 60px;
    }
}
</style>