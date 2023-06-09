import { IBooster } from "../../Assets/Types/types";
import { random } from "../../Assets/functions";

export type InventoryPageInitialStateType = typeof initialState;

const ADD_BOOSTER = "ADD-BOOSTER";
const USE_BOOSTER = "USE-BOOSTER";

const initialState = {
    products: [] as Array<IBooster>
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