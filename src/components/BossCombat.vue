<script setup>
import BossDefeated from "./BossDefeated.vue"
import { bossData } from "../data/appConfig.js"
import { ref, watch } from "vue";
import { useHeroStore } from "../stores/hero";
import { useBossStore } from "../stores/boss";
import { storeToRefs } from "pinia";

const { power, addPowerScore, addGold, consumeStamina } = useHeroStore()
const { attackBoss } = useBossStore()
const bossStore = useBossStore()
const options = ref(bossData)
const { hp } = storeToRefs(bossStore)

watch(hp, () => {
    if (hp.value <= 0) {
        addPowerScore(10)
        addGold(1500)
    }
})

const attack = (attackPower, cost) => {
    if (consumeStamina(cost)) {
        attackBoss(attackPower)
    }
}
</script>

<template>
    <div v-if="hp > 0" class="boss">
        <div class="boss-hp">{{ hp }}/{{ options.maxHp }}HP
            <div class="completion" :style="{ width: `${hp * 100 / options.maxHp}%` }"></div>
        </div>
        <img :src="options.img" alt="">
        <v-btn variant="outlined" @click="attack(power, 10)">
            ATTACK
            ( 10 stamina )
        </v-btn>
        <div class="boss-rewards">Rewards:
            <p class="gold">Gold : + {{ options.rewards.gold }}</p>
            <p class="power">Power score : + {{ options.rewards.power }}</p>
        </div>
    </div>
    <BossDefeated v-else />
</template>

<style scoped>
.boss {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 450px;
    margin: 0 auto;
    width: 100%;
}

img {
    transform: scale(1.5);
    margin: 40px 0;
}

.boss-hp {
    position: relative;
    font-size: 25px;
    font-weight: bold;
    padding: 5px 20px;
    border-radius: 16px;
    width: 300px;
    text-align: center;
    color: white;
    border: 1px solid white;
    z-index: 1000;
}

.completion {
    height: 100%;
    border-radius: 16px;
    transition: .5s linear;
    background-color: rgb(158, 45, 45);
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 16px;
    z-index: -1000
}

.boss-rewards {
    border: 2px solid bisque;
    border-radius: 16px;
    padding: 5px 10px;
    background-color: transparent;
    margin-top: 20px;
    text-transform: uppercase;
}

.gold {
    color: goldenrod;
}

.power {
    color: rgb(88, 255, 5);
}

@media screen and (max-width: 350px) {
    .boss-hp {
        font-size: 20px;
        width: 150px;
    }
}
</style>