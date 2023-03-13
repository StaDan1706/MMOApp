<script setup>
import { defineProps } from 'vue';
import { useRouter } from "vue-router"

const router = useRouter()
const { option, isMenu } = defineProps(['option', 'isMenu'])

const navigateTo = () => {
    if (!isMenu) {
        router.push(`/location/${option.id}`)
    } else {
        router.push(`/${option.id}`)
    }
}
</script>

<template>
    <div class="location" @click="navigateTo">
        <img :src="option.img" alt="">
        <div class="location-text">
            <h2>{{ option.name }}</h2>
            <p>{{ option.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.location {
    width: 250px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}

.location img {
    width: 100%;
    height: 150px;
    margin: 0;
    transition: .5s ease-in;
}

.location img:hover {
    transform: scale(1.1);
}

.location .location-text {
    padding: 0 5px;
}

.location .location-text h2 {
    font-weight: bold;
}

@media screen and (max-width: 350px) {

    h2 {
        font-size: 20px;
    }

    p {
        font-size: 14px;
    }

    .location img {
        height: 125px;
    }

}
</style>