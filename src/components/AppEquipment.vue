<script setup>
import { useHeroStore } from '../stores/hero';
import { storeToRefs } from 'pinia';
import ItemTooltip from "./ItemTooltip.vue"
const store = useHeroStore()
const { equipment } = storeToRefs(store)

</script>
<template>
    <div class="eq-container d-flex align-center justify-center mt-5">
        <v-card v-for="item in equipment" class="cell" elevation="10">
            <div v-if="item">
                <v-img @click="store.unequip(item)" :class="item.itemRarity + ' item'" :src="item.itemImg"></v-img>
                <ItemTooltip :item="item"/>
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