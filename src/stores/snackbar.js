import { defineStore } from "pinia";

export const useSnackbarStore = defineStore("snackbar", {
    state: () => {
        return {
            isSnackbarActive: false,
            snackbarText: '',
            snackBarDelay: 2000
        }
    },
    actions: {
        activateSnackbar(bool, text) {
            this.isSnackbarActive = bool
            this.snackbarText = text
        },
    },
    persist: true,
});