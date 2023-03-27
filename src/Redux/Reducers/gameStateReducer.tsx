import { BoosterEffectType, CookiePerClickType, IBooster, MultipliesType, ProductType } from "../../Assets/Types/types";

const SET_COOKIE_PER_CLICK = "SET-COOKIE-PER-CLICK";
const SET_COOKIE_COUNT = "SET-COOKIE-COUNT";
const SET_ACTIVE_BOOSTER = "SET-ACTIVE-BOOSTER";
const SET_BOOSTER_TIMING = "SET-BOOSTER-TIMING";

export type GameStateInitialStateType = typeof initialState

const initialState = {
    cookiePower: {
        basePower: 1,
        effectPower: [],
        resultPower() {
            let effectPowerSumm = 0;
            this.effectPower.forEach((element: BoosterEffectType | null) => element != null?effectPowerSumm += element?.effect:null)
            return effectPowerSumm + this.basePower;
        }
    } as CookiePerClickType,
    tempEffects: 0 as number,
    cookieCount: 0 as number,
    multiplies: [
        { multiplie: 10 },
        { multiplie: 50 },
        { multiplie: 100 }
    ] as Array<MultipliesType>,
    activeBoosters: [] as Array<IBooster>
}

let gameStateReducer = (state: GameStateInitialStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_COOKIE_PER_CLICK:
            return { ...state, cookiePower: { ...state.cookiePower, basePower: action.cookiePerClick } }
        case SET_COOKIE_COUNT:
            return { ...state, cookieCount: action.cookie }
        case SET_ACTIVE_BOOSTER:
            return { ...state, activeBoosters: [...state.activeBoosters, action.booster] }
        case SET_BOOSTER_TIMING:
            {
                let sortedArr = state.activeBoosters.map((element: IBooster) => {
                    let eeffect: BoosterEffectType = { id: element.id, effect: element.effect }
                    element.timing--
                    if (element.timing >= 1) {
                        let isReapetted = false
                        state.cookiePower.effectPower.forEach(item => item?.id == element.id?isReapetted = true:null);
                        if(!isReapetted)
                            state.cookiePower.effectPower.push(eeffect)
                        return { ...element }
                    }
                    state.cookiePower.effectPower.forEach(item => item?.id == element.id?state.cookiePower.effectPower.splice(state.cookiePower.effectPower.map(e => e?.id).indexOf(eeffect.id), 1):null);
                })
                return { ...state, activeBoosters: [...sortedArr.filter((element: any) => element !== undefined)] }
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