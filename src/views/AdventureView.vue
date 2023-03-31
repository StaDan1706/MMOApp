<script setup>
import gameData from "../data/gameData.json"
import { ref } from "vue";

import AdventureOption from "../components/AdventureOption.vue"
import { beforeEnter, enter } from '../utils/animationTransition.js'

const options = ref(gameData)

</script>

<template>
    <div class="locations-container">
      <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
        <AdventureOption v-for="option, index in options" :key="option.id" :option="option" :data-index="index" />
      </TransitionGroup>
    </div>
</template>

<style scoped>
.locations-container {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
  margin-top: 40px;
}
</style>