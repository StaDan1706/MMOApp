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
            equipment: {
                weapon: null,
                armor: null,
                necklace: null
            }
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
                this.experience = this.experience - this.requiredExperience
                this.level += 1
                this.addPowerScore(1)
                this.requiredExperience = Math.pow((this.level * 1.5), 2)
            }
        },

        win(num) {
            this.experience += num * 1.2
            this.addLevel()
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
        calculateRarity() {
            const rarity = Math.random() * 1000
            if (rarity < 2) {
                return 'legendary'
            } else if (rarity < 20) {
                return 'heroic'
            } else if (rarity < 100) {
                return 'unique'
            } else {
                return 'common'
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


        itemGenerator(enemyValue) {
            const type = types[Math.floor(Math.random() * types.length)]
            const rarity = this.calculateRarity()
            const score = Math.floor(enemyValue + Math.pow(rarities.indexOf(rarity), 2))
            const value = Math.pow(rarities.indexOf(rarity) + 1, 2)

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
        removeFromBackpack(item) {
            const index = this.backpack.indexOf(item)
            if (index > -1) {
                this.backpack.splice(index, 1)
            }
        },
        addToBackpack(item) {
            this.backpack.push(item)
        },
        equipItem(item) {
            this.removeFromBackpack(item)
            if (item.itemType == 'weapon') {
                if (this.equipment.weapon) {
                    this.addToBackpack(this.equipment.weapon)
                }
                this.equipment.weapon = item
            } else if (item.itemType == 'armor') {
                if (this.equipment.armor) {
                    this.addToBackpack(this.equipment.armor)
                }
                this.equipment.armor = item
            } else {
                if (this.equipment.necklace) {
                    this.addToBackpack(this.equipment.necklace)
                }
                this.equipment.necklace = item
            }
        },
        sellItem(item, event) {
            event.preventDefault()
            this.addGold(item.itemValue)
            this.removeFromBackpack(item)
        },
        unequip(slot) {
            if (slot.itemType == 'weapon') {
                this.addToBackpack(this.equipment.weapon)
                this.equipment.weapon = null
            } else if (slot.itemType == 'armor') {
                this.addToBackpack(this.equipment.armor)
                this.equipment.armor = null
            } else {
                this.addToBackpack(this.equipment.necklace)
                this.equipment.necklace = null
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