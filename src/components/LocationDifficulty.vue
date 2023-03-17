<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
import { defineEmits, defineProps } from 'vue';
import { useRoute } from "vue-router";
import { beforeEnter, enter } from '../utils/animationTransition.js'

const route = useRoute()
const routeId = route.params.id - 1

const difficulties = ["easy", "normal", "hard"]

const { calculateChance } = useHeroStore()
const { options } = defineProps(['options'])

const emit = defineEmits(["difficulty"])
const emitSelectedOption = (option) => {
  emit("difficulty", option)
}
</script>

<template>
  <div class="choice">
    <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
      <h3 v-for="option, index in difficulties" :key="index" :data-index="index" @click="emitSelectedOption(option)"
        class="option">{{ option }}
        <p>chance :{{ calculateChance(String(options[routeId].difficulty[option].power)) }}%</p>
      </h3>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.choice {

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 16px;
  max-width: 300px;
  margin: 50px auto;
  height: 300px;
}

.option {
  text-transform: uppercase;
  padding: 10px;
  margin: 10px;
  width: 150px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 22px;
  transition: .2s linear;
}

.option:hover {
  color: rgb(170, 67, 67);
}

p {
  font-size: 15px;
}

@media screen and (max-width: 350px) {
  .choice {
    max-width: 220px;
  }
}
</style>