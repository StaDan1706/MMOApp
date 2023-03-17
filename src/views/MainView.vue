<script setup>
import { menuOptions } from "../data/appConfig.js"
import { ref } from "vue";
import AppHero from '../components/AppHero.vue';
import AppOption from '../components/AppOption.vue';
import { beforeEnter, enter } from '../utils/animationTransition.js'
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