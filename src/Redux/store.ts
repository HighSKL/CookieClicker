import redux, { combineReducers, createStore } from 'redux';
import gameStateReducer from './Reducers/gameStateReducer';
import shopReducer from './Reducers/shopReducer';

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const reducers = combineReducers({
    shopWindow: shopReducer,
    gameState: gameStateReducer
})

export let store = createStore(reducers);

//@ts-ignore
window.store = store