<script setup>
import SnackBar from "../src/components/SnackBar.vue"
import NavBar from "./components/NavBar.vue"
</script>

<template>
  <v-app class="background">
    <NavBar />
    <v-main class="w-75 d-flex align-self-center justify-center">
      <router-view />
    </v-main>
    <SnackBar />
  </v-app>
</template>