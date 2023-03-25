import redux, { combineReducers, createStore } from 'redux';
import gameStateReducer from './Reducers/gameStateReducer';
import inventoryReducer from './Reducers/inventoryReducer';
import shopReducer from './Reducers/shopReducer';

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const reducers = combineReducers({
    shopWindow: shopReducer,
    gameState: gameStateReducer,
    inventoryState: inventoryReducer
})

export let store = createStore(reducers);

//@ts-ignore
window.store = store