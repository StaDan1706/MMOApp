<script setup>
import NavBar from "./components/NavBar.vue"
</script>

<template>
  <v-app class="background" >
    <NavBar />
    <v-main class="w-75 d-flex align-self-center justify-center" >
      <router-view />
    </v-main>
  </v-app>
</template>


<style scoped>
</style>