import { useReducer, useState } from 'react';
import { connect } from 'react-redux';
import withModalWindow from '../../Assets/Common/withModalWindow';
import { AppStateType } from '../../Redux/store';
import '../../Assets/styles/casinoWindow_style.scss'
import { GamesType } from '../../Assets/Types/types';
import Sapper from './Games/Sapper/Sapper';
import { random } from '../../Assets/functions';
import casinoReducer, { ActionTypesGames } from '../../Redux/Reducers/casinoReducer';

type PropsType = {
    closeWindow: () => void
}
const initialState = {
    games:[
        {id: random(), name: "Минер", img: "none", windowOpened: false},
        {id: random(), name: "Сапер", img: "none", windowOpened: false}
    ] as Array<GamesType>
}
export type CasinoWindowInitialState = typeof initialState


const CasinoWindow = (props: PropsType) => {

    const [state, dispatch] = useReducer(casinoReducer, initialState)

    let gameBlockRender = state.games.map((element:GamesType)=>(
        <div className="game-block">
            <div className="game-img-block">
                <img src="" alt="" />
            </div>
            <p className="game-name">{element.name}</p>
            <button onClick={()=>{dispatch({type: ActionTypesGames.CHANGE_WINDOW_OPEN, id: element.id})}}>Играть</button>
        </div>
    ))
    const checkOpenWindow = (gameName:string) => {
        let checker = false;
        state.games.forEach(element => (element?.name == gameName)&&(element.windowOpened)? checker = true:null);
        return checker;
    }

    return (
        <>
        {checkOpenWindow("Минер")&&<Sapper />}
        <div>
            <p className="casino-header">Казино</p>
            <div className="game-list">
                {gameBlockRender}
            </div>
        </div>
        </>
    );
};

let mapStateToProps = (state: AppStateType) => ({})

export default connect(mapStateToProps, {})(withModalWindow(CasinoWindow));