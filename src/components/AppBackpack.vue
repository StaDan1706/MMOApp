<script setup>
import { useHeroStore } from '../stores/hero';
import { storeToRefs } from 'pinia';
import ItemTooltip from './ItemTooltip.vue';
const store = useHeroStore()
const { backpack } = storeToRefs(store)

const pol = (e) => {
    e.preventDefault();
    console.log(e)
}

</script>

<template>
    <button @click="store.itemGenerator(1)">Dodaj</button>

    <div class="bp-container d-flex flex-wrap justify-center">

        <v-card v-for="n in 21" :key="n" class="cell" elevation="10">

            <div v-if="backpack[n - 1]">
                <v-img @click="store.equipItem(backpack[n - 1])" @click.right="store.sellItem(backpack[n - 1], $event)"
                    :class="backpack[n - 1].itemRarity + ' item'" :src="backpack[n - 1].itemImg"></v-img>

                <ItemTooltip :item="backpack[n - 1]" />
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