const bossData =
{
    "id": "summoner",
    "img": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/przyz_demon_sekta.gif",
    "maxHp": 900,
    "rewards": {
        "gold": 1500,
        "power": 10
    }
}


const menuOptions = [
    {
        "id": "locations",
        "img": "https://images.g2a.com/1024x768/1x1x0/roki-pc-steam-key-global-i10000206473001/5f1939fb46177c2f19191753",
        "name": "Adventure",
        "description": "gaining experience"
    },
    {
        "id": "boss",
        "img": "https://art.pixilart.com/37482df17ee5beb.png",
        "name": "Boss",
        "description": "It will not be easy"
    },
    {
        "id": "shop",
        "img": "https://pbs.twimg.com/media/Ei3AOYtVkAA7hS4.png",
        "name": "Shop",
        "description": "Not enough stamina? No problem"
    }
]

const shopOptions = [1, 10, 100]
const maxStamina = 20
const staminaCooldown = 5
const difficulties = [
    {
        option: "easy",
        icon: "mdi-rabbit"
    },
    {
        option: "normal",
        icon: "mdi-snake"
    },
    {
        option: "hard",
        icon: "mdi-skull-outline"
    }
]



export { bossData, menuOptions, shopOptions, maxStamina, staminaCooldown, difficulties }