import { IBooster, MultipliesType, ProductType } from "../../Assets/Types/types";

const SET_COOKIE_PER_CLICK = "SET-COOKIE-PER-CLICK";
const SET_COOKIE_COUNT = "SET-COOKIE-COUNT";
const SET_ACTIVE_BOOSTER = "SET-ACTIVE-BOOSTER";
const SET_BOOSTER_TIMING = "SET-BOOSTER-TIMING";

export type GameStateInitialStateType = typeof initialState

const initialState = {
    cookiePerClick: 1 as number,
    tempEffects: 0 as number,
    cookieCount: 0 as number,
    multiplies: [
        { multiplie: 10 },
        { multiplie: 50 },
        { multiplie: 100 }
    ] as Array<MultipliesType>,
    activeBoosters: [
        { id: 90239053, name: "Аскорбинка", cost: 5, img: "https://apteka245.ru/img/drugs/nnt16888.jpg", description: "+2 к нажатию в течении 10 секунд",timing: 4, effect: 2 },
        { id: 90239053, name: "Аскорбинка", cost: 5, img: "https://apteka245.ru/img/drugs/nnt16888.jpg", description: "+2 к нажатию в течении 10 секунд",timing: 10, effect: 2 }
    ] as Array<IBooster>
}

let gameStateReducer = (state: GameStateInitialStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_COOKIE_PER_CLICK:
            return { ...state, cookiePerClick: action.cookiePerClick }
        case SET_COOKIE_COUNT:
            return { ...state, cookieCount: action.cookie }
        case SET_ACTIVE_BOOSTER:
            return { ...state, activeBoosters: [...state.activeBoosters, action.booster] }
        case SET_BOOSTER_TIMING:
            {
                let sortedArr = state.activeBoosters.map((element: IBooster) => {
                        element.timing--
                        if (element.timing >= 1){
                            return { ...element }
                        }
                    })
                let tt = 0;
                state.activeBoosters.forEach((element:IBooster)=>{
                    tt+=element.effect
                })
                if(state.cookiePerClick > tt){
                    tt = state.cookiePerClick - tt
                }
                return {...state, activeBoosters: [...sortedArr.filter((element:any)=> element !== undefined)], cookiePerClick: tt}
            }
        default:
            return state
    }
}

export let setPower = (cookiePerClick: number) => ({ type: SET_COOKIE_PER_CLICK, cookiePerClick })
export let setCookie = (cookie: number) => ({ type: SET_COOKIE_COUNT, cookie })
export let setActiveBooster = (booster: IBooster) => ({ type: SET_ACTIVE_BOOSTER, booster })
export let setBoosterTiming = () => ({ type: SET_BOOSTER_TIMING })

export default gameStateReducer;