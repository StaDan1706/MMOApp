<script setup>
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

const navigateTo = () => {
    router.push('/')
}

const navigateBack = () => {
    router.go(-1)
}
</script>


<template>
    <div v-if="route.path != '/'" class="menu">
        <button @click="navigateTo">Home</button>
        <button @click="navigateBack">go back</button>
    </div>
</template>


<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 60px;
    top: 60px;
}

.menu button {
    margin: 10px;
    width: 120px;
    height: 60px;
    border-radius: 6px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    text-transform: uppercase;
    transition: .2s linear;
    cursor: pointer;
}

.menu button:hover {
    background-color: bisque;
    color: black;
    border: 1px solid black;
}

@media screen and (max-width: 750px) {
    .menu {
        width: 100%;
        left: 0;
        top: 0;
        flex-direction: row;
        justify-content: center;
        margin: 30px auto 0px;
        position: relative;
    }
}
</style>