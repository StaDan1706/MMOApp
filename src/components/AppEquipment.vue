<script setup>
import { useHeroStore } from '../stores/hero';
import { storeToRefs } from 'pinia';
const store = useHeroStore()
const { weapon, armor, necklace } = storeToRefs(store)

</script>
<template>
    <div class="eq-container d-flex align-center justify-center mt-5">
        <v-card class="cell" elevation="10">
            <div v-if="weapon">
                <v-img @click="store.unequip('weapon')" :class="weapon.itemRarity + ' item'" :src="weapon.itemImg"></v-img>

                <v-tooltip activator="parent" location="top">
                    <div class="font-weight-bold">{{ weapon.itemName }}</div>
                    <div :class="weapon.itemRarity + ' text-center'">*{{ weapon.itemRarity }}*</div>
                    <div>itemPowerScore : {{ weapon.itemPowerScore }}</div>
                    <div>itemValue : {{ weapon.itemValue }}</div>
                </v-tooltip>
            </div>
        </v-card>

        <v-card class="cell" elevation="10">
            <div v-if="armor">
                <v-img @click="store.unequip('armor')" :class="armor.itemRarity + ' item'" :src="armor.itemImg"></v-img>

                <v-tooltip activator="parent" location="top">
                    <div class="font-weight-bold">{{ armor.itemName }}</div>
                    <div :class="armor.itemRarity + ' text-center'">*{{ armor.itemRarity }}*</div>
                    <div>itemPowerScore : {{ armor.itemPowerScore }}</div>
                    <div>itemValue : {{ armor.itemValue }}</div>
                </v-tooltip>
            </div>
        </v-card>

        <v-card class="cell" elevation="10">
            <div v-if="necklace">
                <v-img @click="store.unequip('necklace')" :class="necklace.itemRarity + ' item'" :src="necklace.itemImg"></v-img>

                <v-tooltip activator="parent" location="top">
                    <div class="font-weight-bold">{{ necklace.itemName }}</div>
                    <div :class="necklace.itemRarity + ' text-center'">*{{ necklace.itemRarity }}*</div>
                    <div>itemPowerScore : {{ necklace.itemPowerScore }}</div>
                    <div>itemValue : {{ necklace.itemValue }}</div>
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