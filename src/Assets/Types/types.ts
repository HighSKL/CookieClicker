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