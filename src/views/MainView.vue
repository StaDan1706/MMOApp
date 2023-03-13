<script setup>
import q from "../data/menuOptions.json"
import { ref } from "vue";
import gsap from "gsap"
import Hero from '../components/AppHero.vue';
import Location from '../components/AppOption.vue';


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
const options = ref(q)
</script>

<template>
    <div class="menu">
        <header>
            <Hero />
        </header>
        <div class="options-container">
            <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
                <Location v-for="option, index in options" :key="option" :option="option" :isMenu="true"
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