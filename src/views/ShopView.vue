<script setup>
import AppHero from '../components/AppHero.vue';
import gsap from "gsap"

import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { gold, stamina } = storeToRefs(store)

const options = [1, 10, 100]

const buyStamina = (value) => {
    if (gold.value >= value * 10) {
        stamina.value += value
        gold.value -= value * 10
    }
}


const beforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.transform = "translateX(-60px)";
}
const enter = (el) => {
    gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: el.dataset.index * 0.1
    })
}
</script>

<template>
    <div class="shop">
        <AppHero />
        <div class="shop-options">
            <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
                <button @click="buyStamina(option)" v-for="option, index in options" :key="option" :data-index="index"> Buy
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