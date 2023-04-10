export type NavigationMenuInitialStateType = {
    isSwitchedHamburgerMenu: boolean,
    isSwitchedShopWindow: boolean,
    isSwitchedInventotyWindow: boolean,
    isSwitchedGameMenuWindow: boolean
}

export enum ActionsTypes {
    SET_OPEN_HAMBURGER_MENU,
    SET_OPEN_SHOP_WINDOW,
    SET_OPEN_INVENTORY_WINDOW,
    SET_OPEN_GAME_WINDOW
}

export default function navigationMenuReducer<Type>(state: NavigationMenuInitialStateType, action: any){
    switch(action.type){
        case ActionsTypes.SET_OPEN_HAMBURGER_MENU:
            return {...state, isSwitchedHamburgerMenu: state.isSwitchedHamburgerMenu?false:true}
        case ActionsTypes.SET_OPEN_SHOP_WINDOW:
            return {...state, isSwitchedShopWindow: state.isSwitchedShopWindow?false:true}
        case ActionsTypes.SET_OPEN_INVENTORY_WINDOW:
            return {...state, isSwitchedInventotyWindow: state.isSwitchedInventotyWindow?false:true}
        case ActionsTypes.SET_OPEN_GAME_WINDOW:
            return {...state, isSwitchedGameMenuWindow: state.isSwitchedGameMenuWindow?false:true}
        default:
            return state
    }
} 

//@ts-ignore
window.a = navigationMenuReducer