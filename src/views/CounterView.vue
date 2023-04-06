<script setup>

import { useHeroStore } from "../stores/hero";
const { totalEarnedMoney, totalMobsKilled } = useHeroStore()

</script>

<template>
    <v-container class="ma-10">
        <v-row justify="space-around">
            <v-card width="400">

                <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">
                        Counter
                    </div>

                    <v-timeline density="compact" align="start">
                        <v-timeline-item size="x-small">
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                    <strong>Total Kills</strong>
                                </div>
                                <div>{{ totalMobsKilled }}</div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item size="x-small">
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                    <strong>Total Earned Money</strong>
                                </div>
                                <div>{{ totalEarnedMoney }}</div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template >
