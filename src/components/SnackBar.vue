<script setup>
import { useSnackbarStore } from "../stores/snackbar"
import { storeToRefs } from "pinia";

const snackbarStore = useSnackbarStore()
const { isSnackbarActive, snackbarText, snackBarDelay } = storeToRefs(snackbarStore)


const timeout = 1500

</script>

<template>
    <v-snackbar v-model="isSnackbarActive" :model-value="isSnackbarActive" :timeout="snackBarDelay">
        {{ snackbarText }}

        <template v-slot:actions>
            <v-btn color="blue" @click="isSnackbarActive = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>