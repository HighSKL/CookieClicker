import { useReducer } from 'react';
import withModalWindow from '../../Assets/Common/withModalWindow';
import '../../Assets/styles/casinoWindow_style.scss'
import { GamesType } from '../../Assets/Types/types';
import Sapper from './Games/Sapper/Sapper';
import { random } from '../../Assets/functions';
import casinoReducer, { ActionTypesGames } from '../../Redux/Reducers/casinoReducer';
import sapperGameCover from '../../Assets/img/sapperGameCover.png'

type PropsType = {
    closeWindow: () => void
}
const initialState = {
    games:[
        {id: random(), name: "Сапёр", img: sapperGameCover, windowOpened: false}
    ] as Array<GamesType>
}
export type CasinoWindowInitialState = typeof initialState


const CasinoWindow = (props: PropsType) => {

    const [state, dispatch] = useReducer(casinoReducer, initialState)

    const checkOpenWindow = (gameName:string) => {
        let checker = false;
        state.games.forEach(element => (element?.name == gameName)&&(element.windowOpened)? checker = true:null);
        return checker;
    }

    let gameBlockRender = state.games.map((element:GamesType)=>(
        <div className="game-block">
            <div className="game-img-block">
                <img src={element.img} alt="" />
            </div>
            <p className="game-name">{element.name}</p>
            <button onClick={()=>{dispatch({type: ActionTypesGames.CHANGE_WINDOW_OPEN, id: element.id})}}>Играть</button>
        </div>
    ))

    return (
        <>
        {checkOpenWindow("Сапёр")&&<Sapper closeWindow={()=>dispatch({type: ActionTypesGames.CLOSE_GAME_WINDOW})}/>}
        <div>
            <p className="casino-header">Казино</p>
            <div className="game-list">
                {gameBlockRender}
            </div>
        </div>
        </>
    );
};

export default withModalWindow(CasinoWindow);