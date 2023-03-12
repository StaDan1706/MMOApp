import { defineStore } from "pinia";

export const useBossStore = defineStore("boss", {
    state: () => {
        return {
            hp: 900,
        }
    },
    actions: {
        attackBoss(val) {
            this.hp -= val
        },
    }
});