<script setup>

const { item } = defineProps(['item'])
</script>

<template>
    <v-tooltip activator="parent" location="top" class="text-center">
        <div class="font-weight-bold">{{ item.itemName }}</div>
        <div :class="item.itemRarity">*{{ item.itemRarity }}*</div>
        <div>Power Score : {{ item.itemPowerScore }}</div>
        <div>Value : {{ item.itemValue }}</div>
    </v-tooltip>
</template>

<style scoped>

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
    border-color: black;
    color: black;
    font-weight: bold;
}
</style>