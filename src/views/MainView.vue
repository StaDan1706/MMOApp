<script setup>
import menuOptions from "../data/menuOptions.json"
import { ref } from "vue";
import gsap from "gsap"
import AppHero from '../components/AppHero.vue';
import AppOption from '../components/AppOption.vue';


const beforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(60px)";
}
const enter = (el) => {
    gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        delay: el.dataset.index * 0.1
    })
}
const options = ref(menuOptions)
</script>

<template>
    <div class="menu">
        <header>
            <AppHero />
        </header>
        <div class="options-container">
            <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
                <AppOption v-for="option, index in options" :key="option" :option="option" :isMenu="true"
                    :data-index="index" />
            </TransitionGroup>
        </div>
    </div>
</template>

<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.options-container {
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>