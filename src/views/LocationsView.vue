<script setup>
import q from "../data/gameData.json"
import { ref } from "vue";
import gsap from "gsap"
import Hero from "../components/AppHero.vue"
import Location from "../components/AppOption.vue"

const options = ref(q)


const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(-60px)";
}
const enter = (el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.4,
    delay: el.dataset.index * 0.1
  })
}

</script>

<template>
  <div>
    <header>
      <Hero />
    </header>
    <div class="locations-container">
      <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
        <Location v-for="option, index in options" :key="option.id" :option="option" :data-index="index" />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.locations-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
  margin-top: 40px;
}
</style>