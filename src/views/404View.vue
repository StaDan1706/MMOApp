<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const navigateTo = () => {
    router.push(`/`)
}
</script>

<template>
    <div class="main">
        <img src="https://images-cdn.exchange.art/5HhjNrBur4TAV_fND0ELsnE4yFP18-zukUCjEDzhFR8?ext=fastly&optimize=medium&auto=avifwebp"
            alt="">
        <p>404 Page Not Found</p>
        <button @click="navigateTo"> Take me to a Safe Place</button>
    </div>
</template>


<style scoped>
.main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main img {
    width: 300px;
    height: 300px;
    border-radius: 16px;
}

.main p {
    margin: 20px;
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
}

button {
    background-color: black;
    border: none;
    padding: 10px 30px;
    color: white;
    font-size: 22px;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s linear;
}

button:hover {
    background-color: white;
    color: black;
}
</style>


