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

const staminaCooldown = 10

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

const navbarOptions = [
    {
        icon: "mdi-bag-personal",
        title: "Backpack",
        value: "backpack"
    },
    {
        icon: "mdi-sword",
        title: "Adventure",
        value: ""
    },
    {
        icon: "mdi-skull",
        title: "Dungeons",
        value: "dungeon"
    },
    {
        icon: "mdi-flask",
        title: "Shop",
        value: "shop"
    },
    {
        icon: "mdi-counter",
        title: "Counter",
        value: "counter"
    }
]

const rarities = ['common', 'unique', 'heroic', 'legendary']
const types = ['weapon', 'armor', 'necklace']

const itemsPool = {
    'weapon': {
        'common':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/miecz61.gif"
                },
                {
                    name: "Dagger",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/kh-sztylet2.gif"
                },
                {
                    name: "Wooden Axe",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/que/siekiera.gif"
                },
            ],
        'unique':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/drz/tasak2.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/miecz222.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/miecz222.gif"
                }
            ],
        'heroic':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/eve/wev12.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/miecz257.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/miecz70.gif"
                }
            ],
        'legendary':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/miecz468.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/shj-sword05.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//mie/miecz483.gif"
                }
            ]
    },
    'armor': {
        'common':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//kaf/zbroja03.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/zbr/gob_zbr1.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//zbr/zbroja647.gif"
                }
            ],
        'unique':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//zbr/patryk_zbroja3.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/zbr/zbroja422.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//zbr/shj-zbr05.gif"
                }
            ],
        'heroic':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//zbr/zbrojakosc.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//zbr/tuz436.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//zbr/mol_zbroja01.gif"
                }
            ],
        'legendary':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//zbr/zbroja365.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//zbr/shj-zbr06.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/zbr/leg11zbr5a.gif"
                }
            ]
    },
    'necklace': {
        'common':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//nas/naszyjnik110.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/nas/naswilka2.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/nas/naszyjnik115.gif"
                }
            ],
        'unique':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//nas/naszyjnik323.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/nas/kos-nasz01.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy/eve/ev-lapka.gif"
                }
            ],
        'heroic':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//nas/kupa_nasz1.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//nas/naszyjnik101.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//nas/naszyjnik842.gif"
                }
            ],
        'legendary':
            [
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//nas/tuz205.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//nas/naszyjnik639.gif"
                },
                {
                    name: "Rusted Sword",
                    img: "https://micc.garmory-cdn.cloud/obrazki/itemy//eve/mik-broda.gif"
                }
            ]
    }
}




export { menuOptions, shopOptions, maxStamina, staminaCooldown, difficulties, navbarOptions, rarities, types, itemsPool }