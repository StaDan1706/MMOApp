<script setup>
import { defineEmits, defineProps } from "vue";
import { useHeroStore } from "../stores/hero";
import { useBossStore } from "../stores/boss";
import { storeToRefs } from "pinia";
import { useSnackbarStore } from "../stores/snackbar"

const emit = defineEmits(["quit"])

const quitFromDungeon = () => {
    emit("quit")
}

const { selectedDungeon } = defineProps(['selectedDungeon'])

const { activateSnackbar } = useSnackbarStore()
const { power, consumeStamina } = useHeroStore()
const { attackBoss } = useBossStore()
const bossStore = useBossStore()
const { hp } = storeToRefs(bossStore)

const attack = (attackPower, cost) => {
    if (consumeStamina(cost)) {
       if(attackBoss(attackPower)) {
        quitFromDungeon()
       }
    } else {
        activateSnackbar(true, "Not Enough Stamina")
    }
}

</script>

<template>
    <v-card class="mx-auto background pa-3" width="300">
        <v-card-item class="text-center">
            <div>
                <v-progress-linear class="ma-2" color="red-accent-3" :model-value="hp * 100 / selectedDungeon.hp"
                    :height="25">
                    <template v-slot:default="{ value }">
                        <strong>{{ hp }}/{{ selectedDungeon.hp }}HP</strong>
                    </template>
                </v-progress-linear>

                <v-img height="150" :src="selectedDungeon.img"></v-img>
            </div>
        </v-card-item>

        <v-card-actions class="d-flex flex-column align-center justify-flex">
            <v-btn @click="attack(power, 10)" prepend-icon="mdi-sword" class="ma-2" width="175" append-icon="mdi-flask"
                variant="outlined">
                Attack - 10
            </v-btn>
            <v-btn @click="quitFromDungeon" prepend-icon="mdi-run-fast" class="ma-0" width="175" variant="outlined">
                RUn Away
            </v-btn>
        </v-card-actions>

        <v-card-item>
            <div class="text-h5 mb-1 d-flex flex-column align-center">
                <v-icon>mdi-treasure-chest</v-icon>

                <div class="text-caption">Gold : + {{ selectedDungeon.rewards.gold }}</div>
            </div>
        </v-card-item>
    </v-card>
</template>

