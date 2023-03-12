<script setup>
import HeroStats from "./HeroStats.vue";
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { experience, level, requiredExperience } = storeToRefs(store)
</script>
<template>
    <div>
        <h1>Damon Salvatore - {{ level }} lvl</h1>
        <div class="experience-bar">
            <div class="completion" :style="{ width: `${experience * 100 / requiredExperience}%` }"></div>
        </div>
        <HeroStats />
    </div>
</template>
<style scoped>
h1 {
    font-weight: bold;
}

.experience-bar {
    width: 300px;
    height: 20px;
    border: 2px solid bisque;
    margin: 10px auto;
    border-radius: 10px;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
    border-radius: 10px;
    transition: .5s linear;
}

</style>