import { CellType } from "../../../Assets/Types/types"
import { random, setBombs, shuffle } from "../../../Assets/functions"

export type SapperInitialStateType = typeof initialState

enum ActionTypes {
    SET_IS_OPEN,
    SET_COOKIE_PAYED,
    SET_START_GAME,
    SET_END_GAME,
    SET_EARNED_COOKIE
}

const initialState = {
    cookiePayed: 0,
    bombQuality: 3,
    isGameStart: false,
    earnedCookie: 0,
    cells: [
        { id: random(), isOpen: false, isBombContain: false, bonus: 0},
        { id: random(), isOpen: false, isBombContain: true, bonus: 0 },
        { id: random(), isOpen: false, isBombContain: false, bonus: 0 },
        { id: random(), isOpen: false, isBombContain: false, bonus: 0 },
        { id: random(), isOpen: false, isBombContain: true, bonus: 0 },
        { id: random(), isOpen: false, isBombContain: false, bonus: 0 },
        { id: random(), isOpen: false, isBombContain: false, bonus: 0 },
        { id: random(), isOpen: false, isBombContain: true, bonus: 0 },
        { id: random(), isOpen: false, isBombContain: false, bonus: 0 },
    ] as Array<CellType>
}

export default function sapperReducer(state: SapperInitialStateType = initialState, action: any) {
    switch (action.type) {
        case ActionTypes.SET_IS_OPEN:
            return {
                ...state, cells: state.cells.map((item: CellType) => {
                    if (item.id == action.id)
                        return { ...item, isOpen: true }
                    else
                        return { ...item }
                })
            }
        case ActionTypes.SET_COOKIE_PAYED:
            return { ...state, cookiePayed: action.cookie }
        case ActionTypes.SET_START_GAME:
            return {
                ...state, cookiePayed: 0, isGameStart: true,
                cells: shuffle(setBombs(state.cells.map((cell:CellType)=>({...cell, isOpen: false, bonus: cell.isBombContain?0:+(state.bombQuality*0.2*state.cookiePayed).toFixed(2)})), state.bombQuality))}
        case ActionTypes.SET_END_GAME:
            return {...state, cookiePayed: 0, earnedCookie: 0, isGameStart: false,cells: state.cells.map((cell:CellType)=>({...cell, isOpen: false}))}
        case ActionTypes.SET_EARNED_COOKIE:
            return {...state, earnedCookie: +(state.earnedCookie + action.cookie).toFixed(2)}
        default:
            return state
    }
}

export let setIsOpen = (id: number) => ({ type: ActionTypes.SET_IS_OPEN, id })
export let setCookiePayed = (cookie: number) => ({ type: ActionTypes.SET_COOKIE_PAYED, cookie })
export let setStartGame = () => ({type: ActionTypes.SET_START_GAME})
export let setEndGame = () => ({type: ActionTypes.SET_END_GAME})
export let setEarnedCookie = (cookie:number) => ({type: ActionTypes.SET_EARNED_COOKIE, cookie})