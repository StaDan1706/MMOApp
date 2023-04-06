import { defineStore } from "pinia";
import gameData from "../data/dungeonsData.json"
import { useHeroStore } from "../stores/hero";
import { useSnackbarStore } from "../stores/snackbar"

const { addGold } = useHeroStore()
const { activateSnackbar } = useSnackbarStore()


export const useBossStore = defineStore("boss", {
    state: () => {
        return {
            actualDungeonIndex: 0,
            hp: 1
        }
    },
    actions: {
        setNewDungeon() {
            this.actualDungeonIndex++
            this.hp = gameData[this.actualDungeonIndex].hp
        },
        attackBoss(val) {
            this.hp -= val
            if (this.hp <= 0) {
                addGold(gameData[this.actualDungeonIndex].rewards.gold)
                activateSnackbar(true, `Boss Defeated ! Reward : ${gameData[this.actualDungeonIndex].rewards.gold} gold!`)
                this.setNewDungeon()
                return true
            } else {
                activateSnackbar(true, "Attacked!")
            }
        }
    },
    persist: true,
});