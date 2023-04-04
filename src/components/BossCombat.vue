<script setup>
import BossDefeated from "./BossDefeated.vue"
import SnackBar from "./SnackBar.vue"
import { bossData } from "../data/appConfig.js"
import { ref, watch } from "vue";
import { useHeroStore } from "../stores/hero";
import { useBossStore } from "../stores/boss";
import { storeToRefs } from "pinia";
import { useSnackbarStore } from "../stores/snackbar"

const { activateSnackbar } = useSnackbarStore()
const { power, addPowerScore, addGold, consumeStamina } = useHeroStore()
const { attackBoss } = useBossStore()
const bossStore = useBossStore()
const options = ref(bossData)
const { hp } = storeToRefs(bossStore)

watch(hp, () => {
    if (hp.value <= 0) {
        addPowerScore(10)
        addGold(1500)
        activateSnackbar(true, "Boss Defeated ! Rewards added!")
    }
})

const attack = (attackPower, cost) => {
    if (consumeStamina(cost)) {
        attackBoss(attackPower)
        activateSnackbar(true, "Attacked!")

    } else {
        activateSnackbar(true, "Not Enough Stamina")

    }
}

const newBoss = () => {
    hp.value = options.value.maxHp
}
</script>

<template>
    <v-card v-if="hp" class="mx-auto background pa-3" width="300">
        <v-card-item class="text-center">
            <div>
                <v-progress-linear class="ma-2" color="red-accent-3" :model-value="hp * 100 / options.maxHp" :height="25">
                    <template v-slot:default="{ value }">
                        <strong>{{ hp }}/{{ options.maxHp }}HP</strong>
                    </template>
                </v-progress-linear>

                <v-img :src="options.img"></v-img>
            </div>
        </v-card-item>

        <v-card-actions class="d-flex justify-center pa-5">
            <v-btn prepend-icon="mdi-sword" append-icon="mdi-flask" @click="attack(power, 10)" variant="outlined">
                Attack - 10
            </v-btn>
        </v-card-actions>

        <v-card-item>
            <div class="text-h5 mb-1 d-flex flex-column align-center">
                <v-icon>mdi-treasure-chest</v-icon>

                <div class="text-caption">Gold : + {{ options.rewards.gold }}</div>
                <div class="text-caption">Power Score : + {{ options.rewards.power }}</div>
            </div>



        </v-card-item>
    </v-card>
    <BossDefeated v-else />

    <SnackBar />
</template>

