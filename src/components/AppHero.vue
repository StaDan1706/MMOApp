<script setup>
import HeroLevel from "./HeroLevel.vue";
import HeroStamina from "./HeroStamina.vue"
import HeroExperienceBar from "./HeroExperienceBar.vue"


</script>

<template>
    <header>
        <div class="hero">
            <HeroLevel />
            <HeroExperienceBar />
            <HeroStamina />
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