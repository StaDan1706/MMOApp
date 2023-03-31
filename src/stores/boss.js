import { defineStore } from "pinia";

export const useBossStore = defineStore("boss", {
    state: () => {
        return {
            hp: 100,
        }
    },
    actions: {
        attackBoss(val) {
            this.hp -= val
        },
    },
    persist: true,
});