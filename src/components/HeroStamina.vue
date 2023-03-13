<script setup>
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
const store = useHeroStore()
const { stamina, seconds } = storeToRefs(store)
</script>

<template>
    <div class="stamina">
        <h3 class="stamina-info">Stamina : {{ stamina }}
            <h3 v-if="stamina < 20" class="stamina-timer">+ 1 Stamina in {{ seconds }}</h3>
            <h3 v-else>( MAX )</h3>
        </h3>

    </div>
</template>
<style scoped>
.stamina {
    text-align: center;
}

.stamina-info {
    color: aqua;
    padding-bottom: 5px;
    border-bottom: 2px solid bisque;
}


h3 {
    font-size: 20px;
    font-weight: bold;
}

@media screen and (max-width: 350px) {

    h3 {
        font-size: 15px;
    }
}
</style>