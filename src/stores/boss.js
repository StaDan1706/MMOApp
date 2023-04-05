import { defineStore } from "pinia";
import gameData from "../data/dungeonsData.json"


export const useBossStore = defineStore("boss", {
    state: () => {
        return {
            actualDungeonIndex: 0,
            hp: 1
        }
    },
    actions: {
        setNewDungeon() {
            this.hp = gameData[this.actualDungeonIndex].hp
        },
        attackBoss(val) {
            this.hp -= val
            if (this.hp <= 0) {
                this.actualDungeonIndex++
                this.setNewDungeon()
            }
        }
    },
    persist: true,
});