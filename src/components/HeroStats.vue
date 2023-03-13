<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { power, gold } = storeToRefs(store)
</script>
<template>
    <div class="stats">
        <h4 class="power-score">Power score : {{ power }}</h4>
        <h4 class="gold">Gold : {{ gold }}</h4>
    </div>
</template>
<style scoped>
h4 {
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
}

.gold {
    color: goldenrod;
}

.power-score {
    color: rgb(204, 75, 75);
    font-weight: bold
}

@media screen and (max-width: 350px) {
    .power-score,
    .gold {
        font-size: 15px;
    }
}
</style>