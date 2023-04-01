<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(["newBoss"])
const emitNewBoss = () => {
    emit("newBoss")
}

</script>
<template>
    <v-card class="mx-auto" width="300" variant="outlined">
        <v-card-item class="text-center">
            <div>

                <div class="text-overline mb-1">
                    Boss defeated!
                </div>

                <div class="text-h5 mb-1">
                    Congratulations!
                </div>

                <div class="text-caption">Want to fight again ?</div>
            </div>
        </v-card-item>

        <v-card-actions class="d-flex justify-center pa-5">
            <v-btn @click="emitNewBoss" variant="outlined">
                Fight again!
            </v-btn>
        </v-card-actions>
    </v-card>
</template>