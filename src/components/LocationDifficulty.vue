<script setup>
import { useHeroStore } from "../stores/hero";
import { defineEmits, defineProps } from 'vue';
import { useRoute } from "vue-router";
import { difficulties } from "../data/appConfig";

const route = useRoute()
const routeId = route.params.id - 1

const { calculateChance } = useHeroStore()
const { options } = defineProps(['options'])


const emit = defineEmits(["difficulty"])
const emitSelectedOption = (option) => {
  emit("difficulty", option)
}
</script>

<template>
  <v-card max-width="300" class="mt-15 bg-grey-darken-4 pa-5" elevation="20">
    <v-list density="compact" class="bg-grey-darken-4">

      <v-list-subheader class="d-flex justify-center align-center text-white text-h5">DIFFICULTY</v-list-subheader>

      <v-list-item v-for="difficulty in difficulties" @click="emitSelectedOption(difficulty.option)" :value="difficulty"
        active-color="primary" class="px-10 my-5">

        <template v-slot:prepend>
          <v-icon :icon="difficulty.icon"></v-icon>
        </template>

        <v-list-item-title v-text="difficulty.option" class="text-uppercase"></v-list-item-title>
        <v-list-item-subtitle v-text="`Chance: ${calculateChance(String(options[routeId].difficulty[difficulty.option].power))}%`" class="text-uppercase"></v-list-item-subtitle>

      </v-list-item>

    </v-list>
  </v-card>
</template>