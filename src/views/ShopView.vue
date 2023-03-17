<script setup>
import AppHero from '../components/AppHero.vue';
import { shopOptions } from '../data/appConfig';
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
import { beforeEnter, enter } from '../utils/animationTransition.js'
const { canBuyStamina } = useHeroStore()
const store = useHeroStore()
const { gold, stamina } = storeToRefs(store)

const buyStamina = (option) => {
    if (canBuyStamina({ gold: gold.value, option })) {
        stamina.value += option
        gold.value -= option * 10
    }
}
</script>

<template>
    <div class="shop">
        <AppHero />
        <div class="shop-options">
            <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
                <button @click="buyStamina(option)" v-for="option, index in shopOptions" :key="option" :data-index="index">
                    Buy
                    {{ option }}
                    stamina <p>({{ option * 10 }} gold)</p></button>
            </TransitionGroup>
        </div>
    </div>
</template>
<style scoped>
.shop {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.shop-options {
    margin-top: 20px;
    display: inherit;
    flex-direction: column;
}

button {
    text-transform: uppercase;
    border: 1px solid bisque;
    border-radius: 16px;
    padding: 10px 60px;
    margin: 10px;
    font-size: 15px;
    cursor: pointer;
    transition-property: color, background-color;
    transition-duration: .3s;
    background-color: bisque;
}

button:hover {
    color: white;
    background-color: rgb(33, 29, 29);
}
</style>