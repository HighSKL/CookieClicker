export type ProductType = {
    id: number
    name: string
    img: string
    cost: number
    description: string
    effect: number
}

export interface IBooster extends ProductType {
    timing: number
}

export type MultipliesType = {
    multiplie: number
}

export type BoosterEffectType = {
    id: number
    effect: number
}

export type CookiePerClickType = {
    basePower: number
    effectPower: Array<BoosterEffectType|null>
    resultPower: () => number
}

export type GamesType = {
    id: number
    img: string
    name: string
    windowOpened: boolean
}

export type CellType = {
    id: number
    isOpen: boolean
    isBombContain: boolean
    bonus: number
}