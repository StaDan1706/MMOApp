<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
import { ref, defineEmits, defineProps } from 'vue';
import gsap from "gsap"
import { useRoute } from "vue-router";

const route = useRoute()
const routeId = route.params.id - 1

const difficulties = ["easy", "normal", "hard"]

const store = useHeroStore()
const { calculateChance } = useHeroStore()
const { experience, level, power } = storeToRefs(store)
const { options } = defineProps(['options'])

const emit = defineEmits(["difficulty"])
const emitSelectedOption = (option) => {
  emit("difficulty", option)
}

const beforeEnter = (el) => {
  el.style.opacity = 0;
  if (el.dataset.index % 2) {
    el.style.transform = "translateX(60px)";
  } else {
    el.style.transform = "translateX(-60px)";
  }

}
const enter = (el) => {
  gsap.to(el, {
    x: 0,
    opacity: 1,
    duration: 0.2,
    delay: el.dataset.index * 0.1
  })
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