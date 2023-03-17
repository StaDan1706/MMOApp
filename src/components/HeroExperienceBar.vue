<script setup>
import HeroStats from "./HeroStats.vue";
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { experience, requiredExperience } = storeToRefs(store)
</script>
<template>
    <div>
        <div class="experience-bar">
            <div class="completion" :style="{ width: `${experience * 100 / requiredExperience}%` }"></div>
        </div>
        <HeroStats />
    </div>
</template>
<style scoped>
.experience-bar {
    width: 300px;
    height: 20px;
    border: 2px solid bisque;
    margin: 0 auto 10px;
    border-radius: 10px;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
    border-radius: 10px;
    transition: .5s linear;
}

@media screen and (max-width: 350px) {
    .experience-bar {
        width: 200px;
        height: 10px;
    }
}
</style>