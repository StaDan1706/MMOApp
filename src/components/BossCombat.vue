<script setup>
import BossDefeated from "./BossDefeated.vue"
import q from "../data/bossData.json"
import { ref, watch } from "vue";

import { useHeroStore } from "../stores/hero";
import { useBossStore } from "../stores/boss";
import { storeToRefs } from "pinia";
const { heroStore, power, addPowerScore, addGold, useStamina } = useHeroStore()
const { attackBoss } = useBossStore()
const bossStore = useBossStore()
const options = ref(q[0])
const { hp } = storeToRefs(bossStore)

watch(hp, () => {
    if (hp.value <= 0) {
        addPowerScore(10)
        addGold(1500)
    }
})

const attack = (attackPower, cost) => {
    if (useStamina(cost)) {
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
        <button @click="attack(power, 10)">ATTACK
            <p>( 10 stamina )</p>
        </button>
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

button {
    padding: 15px 40px;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s;
    border: 2px solid bisque;
    background-color: bisque;

}

button:hover {
    background-color: black;
    color: white;
}

@media screen and (max-width: 350px) {
    .boss-hp {
        font-size: 20px;
        width: 150px;
    }
}
</style>