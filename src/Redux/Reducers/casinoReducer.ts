import { GamesType } from "../../Assets/Types/types"
import { CasinoWindowInitialState } from "../../Components/CasinoWindow/CasinoWindow"

export enum ActionTypesGames {
    CHANGE_WINDOW_OPEN,
    CLOSE_GAME_WINDOW
}

let casinoReducer = (state: CasinoWindowInitialState, action: any) => {
    switch(action.type){
        case ActionTypesGames.CHANGE_WINDOW_OPEN:
            return {...state, games: state.games.map((element: GamesType)=>{
                if(action.id == element.id)
                    return {...element, windowOpened: true}
                else
                    return {...element} 
            })}
        case ActionTypesGames.CLOSE_GAME_WINDOW:
            return{...state, games: state.games.map((element: GamesType)=>{return{...element, windowOpened: false}})}
        default:
            return state
    }
}

export default casinoReducer