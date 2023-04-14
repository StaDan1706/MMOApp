<script setup>

const { item } = defineProps(['item'])
</script>

<template>
    <v-tooltip activator="parent" location="top">
        <div class="font-weight-bold">{{ item.itemName }}</div>
        <div :class="item.itemRarity + ' text-center'">*{{ item.itemRarity }}*</div>
        <div>itemPowerScore : {{ item.itemPowerScore }}</div>
        <div>itemValue : {{ item.itemValue }}</div>
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
    border-color: grey;
    color: gray;
    font-weight: bold;
}
</style>