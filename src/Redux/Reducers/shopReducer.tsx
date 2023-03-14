export type InitialStateType = typeof initialState
type ProductType = {
    name: string
    img: string
    cost: number
}

const initialState = {
    products: [
        {name: "Протеин", cost: 1000, img: ""},
        {name: "Сырный читос", cost: 600, img: ""},
        {name: "Барбариска", cost: 10, img: ""}
    ] as Array<ProductType>
}

let shopReducer = (state = initialState, action: any) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer;