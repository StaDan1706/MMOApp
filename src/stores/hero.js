import { defineStore } from "pinia";
import { maxStamina, staminaCooldown, rarities, types, itemsPool } from "../data/appConfig";

export const useHeroStore = defineStore("hero", {
    state: () => {
        return {
            totalEarnedMoney: 0,
            totalMobsKilled: 0,
            nickname: '',
            level: 1,
            experience: 0,
            requiredExperience: 2,
            power: 1,
            stamina: maxStamina,
            seconds: staminaCooldown,
            gold: 0,
            staminaIsRestoring: false,
            backpack: [],
            weapon: null,
            armor: null,
            necklace: null
        }
    },
    actions: {
        setNickname(value) {
            this.nickname = value
        },
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
            this.totalEarnedMoney += val
        },
        addPowerScore(val) {
            this.power += val
        },
        addLevel() {
            if (this.experience >= this.requiredExperience) {
                this.experience = 0
                this.level += 1
                this.addPowerScore(1)
                this.requiredExperience = Math.pow((this.level * 1.5), 2)
            }
        },
        win(num) {
            this.experience += num * 1.2
            this.addLevel()
            this.addGold(Math.floor(Math.random() * 3) + 1)
            this.totalMobsKilled++
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


        attack(opponentPower) {
            if (this.consumeStamina(1)) {
                const result = this.calculateChance(opponentPower)
                const draw = Math.floor(Math.random() * 100) + 1
                if (draw <= result) {
                    this.win(opponentPower)
                    return "You Won !"
                } else return "Fight Lost !"
            } else return "Not Enough Stamina !"
        },
        removeFromBackpack(item) {
            const index = this.backpack.indexOf(item)
            if (index > -1) {
                this.backpack.splice(index, 1)
            }
        },

        itemGenerator(enemyValue) {
            const type = types[Math.floor(Math.random() * types.length)]
            const rarity = rarities[Math.floor(Math.random() * rarities.length)]
            const score = 1 + enemyValue + rarities.indexOf(rarity) * 4
            const value = Math.floor(score/2)

            this.backpack.push(
                {
                    itemId: Math.floor(Math.random() * 10000000000),
                    itemType: type,
                    itemImg: itemsPool[type][rarity][Math.floor(Math.random() * itemsPool[type][rarity].length)].img,
                    itemName: itemsPool[type][rarity][Math.floor(Math.random() * itemsPool[type][rarity].length)].name,
                    itemPowerScore: score,
                    itemValue: value,
                    itemRarity: rarity,
                }
            )
        },
        addToBackpack(item) {
            this.backpack.push(item)
        },
        equip(item) {
            this.removeFromBackpack(item)
            if (item.itemType == 'weapon') {
                if (this.weapon) {
                    this.addToBackpack(this.weapon)
                }
                this.weapon = item
            } else if (item.itemType == 'armor') {
                if (this.armor) {
                    this.addToBackpack(this.armor)
                }
                this.armor = item
            } else {
                if (this.necklace) {
                    this.addToBackpack(this.necklace)
                }
                this.necklace = item
            }
        },

        unequip(slot) {
            if (slot == 'weapon') {
                this.addToBackpack(this.weapon)
                this.weapon = null
            } else if (slot == 'armor') {
                this.addToBackpack(this.armor)
                this.armor = null
            } else {
                this.addToBackpack(this.necklace)
                this.necklace = null
            }
        }
    },

    persist: {
        afterRestore: (ctx) => {
            ctx.store.staminaIsRestoring = false;
            ctx.store.tick()
        }
    }
});