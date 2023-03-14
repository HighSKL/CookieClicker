import redux, { combineReducers, createStore } from 'redux';
import shopReducer from './Reducers/shopReducer';

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const reducers = combineReducers({
    shopWindow: shopReducer
})

export let store = createStore(reducers);