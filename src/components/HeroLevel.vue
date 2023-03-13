<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { level } = storeToRefs(store)
</script>
<template>
    <div>
        <h1>Hero - {{ level }} lvl</h1>
    </div>
</template>
<style scoped>
h1 {
    font-weight: bold;
    margin-top: 20px;
}

@media screen and (max-width: 350px) {
    h1 {
        font-size: 20px;
        text-align: center;
    }
}
</style>