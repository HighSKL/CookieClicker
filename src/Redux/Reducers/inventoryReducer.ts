import { IBooster } from "../../Assets/Types/types";

export type InventoryPageInitialStateType = typeof initialState;

let random = () => Math.floor(Math.random()*99999999)

const ADD_BOOSTER = "ADD-BOOSTER";
const USE_BOOSTER = "USE-BOOSTER";

const initialState = {
    products: [
        { id: 90239029, name: "Аскорбинка", cost: 5, img: "https://apteka245.ru/img/drugs/nnt16888.jpg", description: "+2 к нажатию в течении 10 секунд", timing: 10, effect: 2 },
        { id: 90239030, name: "Аскорбинка", cost: 5, img: "https://apteka245.ru/img/drugs/nnt16888.jpg", description: "+2 к нажатию в течении 10 секунд", timing: 10, effect: 2 }
    ] as Array<IBooster>
}

let inventoryReducer = (state: InventoryPageInitialStateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_BOOSTER:
            return { ...state, products: [...state.products, action.booster = {...action.booster, id: random()}] }
        case USE_BOOSTER:
            {
                let sortedArr = state.products.map((booster: IBooster)=>booster.id != action.booster.id?{...booster}:null)
                return {...state, products: [...sortedArr.filter((element:any)=> element !== null)] }
            }
        default:
            return state;
    }
}

export let addBooster = (booster: IBooster) => ({ type: ADD_BOOSTER, booster })
export let activateBooster = (booster: IBooster) => ({ type: USE_BOOSTER, booster })

export default inventoryReducer