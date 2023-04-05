import { IBooster, ProductType } from "../../Assets/Types/types"

export type StoreInitialStateType = typeof initialState

const initialState = {
    products: [
        {id: 90239025, name: "Барбариска", cost: 70, img: "https://cdn.metro-cc.ru/ru/ru_pim_25993001002_01.png", description: "+0.5 к нажатию", effect: .5 },
        {id: 90239024, name: "Сырный читос", cost: 250, img: "https://avatars.mds.yandex.net/get-mpic/5330487/img_id1981251420403652347.jpeg/orig", description: "+1 к нажатию", effect: 1},
        {id: 90239023, name: "Протеин", cost: 700, img: "https://www.profitness.fr/wp-content/uploads/2014/08/303-thickbox_default-complete-protein.jpg", description: "+2 к нажатию", effect: 2},
    ] as Array<ProductType>,
    tempImproveProducts: [
        {id: 90239026, name: "Аскорбинка", cost: 200, img: "https://apteka245.ru/img/drugs/nnt16888.jpg", description: "+2 к нажатию в течении 10 секунд", timing: 10, effect: 2},
    ] as Array<IBooster>
}

let shopReducer = (state: StoreInitialStateType = initialState, action: any) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer;