<script setup>
import { useHeroStore } from '../stores/hero';
import { storeToRefs } from 'pinia';
const store = useHeroStore()
const { backpack } = storeToRefs(store)


</script>

<template>
    <button @click="store.itemGenerator(1)">Dodaj</button>

    <div class="bp-container d-flex flex-wrap justify-center">

        <v-card v-for="n in 21" :key="n" class="cell" elevation="10">

            <div v-if="backpack[n - 1]">
                <v-img @click="store.equip(backpack[n-1])" :class="backpack[n - 1].itemRarity + ' item'" :src="backpack[n - 1].itemImg"></v-img>

                <v-tooltip activator="parent" location="top">
                    <div class="font-weight-bold">{{ backpack[n - 1].itemName }}</div>
                    <div :class="backpack[n - 1].itemRarity + ' text-center'">*{{ backpack[n - 1].itemRarity }}*</div>
                    <div>Score : {{ backpack[n - 1].itemPowerScore }}</div>
                    <div>Value : {{ backpack[n - 1].itemValue }}</div>
                </v-tooltip>
            </div>
        </v-card>
    </div>
</template>

<style scoped>
.cell {
    width: 35px;
    height: 35px;
    margin: 8px;
}

.bp-container {
    max-width: 400px;
    max-height: 200px;
}

.item {
    border: 3px solid;
}

.legendary {
    border-color: red;
    color: red;
    font-weight: bold;
}

.heroic {
    border-color: blue;
    color: blue;
    font-weight: bold;
}

.unique {
    border-color: yellow;
    color: yellow;
    font-weight: bold;
}

.common {
    border-color: grey;
    color: gray;
    font-weight: bold;
}
</style>