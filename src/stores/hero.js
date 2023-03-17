import { defineStore } from "pinia";
import { maxStamina, staminaCooldown } from "../data/appConfig";

export const useHeroStore = defineStore("hero", {
    state: () => {
        return {
            level: 1,
            experience: 0,
            requiredExperience: 300,
            power: 1,
            stamina: maxStamina,
            seconds: staminaCooldown,
            gold: 0,
            staminaIsRestoring: false,
        }
    },
    actions: {
        tick() {
            this.staminaIsRestoring = true
            if (this.stamina < maxStamina) {
                if (this.seconds > 0) {
                    setTimeout(this.tick, 1000)
                    this.seconds--
                } else {
                    this.seconds = staminaCooldown
                    this.stamina++
                    this.tick()
                }
            } else {
                this.staminaIsRestoring = false
            }

        },
        canBuyStamina({ gold, option }) {
            return gold >= option * 10;
        },
        consumeStamina(val) {
            if (this.stamina >= val) {
                this.stamina -= val
                this.restoreStamina()
                return true
            } else {
                return false
            }
        },
        restoreStamina() {
            if (!this.staminaIsRestoring) {
                this.tick()
            }
        },
        addGold(val) {
            this.gold += val
        },
        addPowerScore(val) {
            this.power += val
        },
        addLevel() {
            if (this.experience >= this.requiredExperience) {
                this.experience = 0
                this.level += 1
                this.addPowerScore(1)
                this.requiredExperience += this.requiredExperience * 2 / 10
            }
        },
        calculateChance(val) {
            if (this.power >= val) {
                return 100
            } else if (this.power >= val - 2) {
                return 50
            } else if (this.power >= val - 4) {
                return 10
            } else {
                return 0
            }
        },
        win(num) {
            this.experience += num
            this.addLevel()
            this.addGold(Math.floor(Math.random() * 3) + 1)
        },
        attack(opponentPower, possibleExp) {
            if (this.consumeStamina(1)) {
                const result = this.calculateChance(opponentPower)
                const draw = Math.floor(Math.random() * 100) + 1
                if (draw <= result) {
                    this.win(possibleExp)
                }
            }
        },
    },
    persist: {
        afterRestore: (ctx) => {
            ctx.store.staminaIsRestoring = false;
            ctx.store.tick()
        }
    }
});