const SET_COOKIE_PER_CLICK = "SET-COOKIE-PER-CLICK";
const SET_COOKIE_COUNT = "SET-COOKIE-COUNT";

export type GameStateInitialStateType = typeof initialState

const initialState = {
    cookiePerClick: 1 as number,
    cookieCount: 0 as number
}

let gameStateReducer = (state: GameStateInitialStateType = initialState, action:any) => {
    switch(action.type){
        case SET_COOKIE_PER_CLICK:
            return {...state, cookiePerClick: action.cookiePerClick}
        case SET_COOKIE_COUNT:
            return {...state, cookieCount: action.cookie}
        default:
            return state
    }
}

export let setPower = (cookiePerClick: number) => ({type: SET_COOKIE_PER_CLICK, cookiePerClick})
export let setCookie = (cookie: number) => ({type: SET_COOKIE_COUNT, cookie})

export default gameStateReducer;