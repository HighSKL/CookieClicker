import { ProductType } from "../../Assets/Types/types"

export type StoreInitialStateType = typeof initialState

const initialState = {
    products: [
        {name: "Протеин", cost: 100, img: "https://www.profitness.fr/wp-content/uploads/2014/08/303-thickbox_default-complete-protein.jpg", description: "+2 к нажатию", effect: 2},
        {name: "Сырный читос", cost: 60, img: "https://avatars.mds.yandex.net/get-mpic/5330487/img_id1981251420403652347.jpeg/orig", description: "+1 к нажатию", effect: 1},
        {name: "Барбариска", cost: 10, img: "https://cdn.metro-cc.ru/ru/ru_pim_25993001002_01.png", description: "+0.5 к нажатию", effect: .5 }
    ] as Array<ProductType>
}

let shopReducer = (state: StoreInitialStateType = initialState, action: any) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer;