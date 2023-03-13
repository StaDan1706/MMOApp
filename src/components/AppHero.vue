<script setup>
import HeroLevel from "./HeroLevel.vue";
import Navigation from "./AppNavigation.vue"
import Stamina from "./HeroStamina.vue"
import Level from "./HeroExperience.vue"


</script>

<template>
    <header>
        <Navigation />
        <HeroLevel />
        <div class="hero">
            <Level />
            <Stamina />
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
}

.hero {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 750px) {
    header {
        flex-direction: column;
    }
}
</style>