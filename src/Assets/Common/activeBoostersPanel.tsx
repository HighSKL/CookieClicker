import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GameStateInitialStateType, setBoosterTiming } from '../../Redux/Reducers/gameStateReducer';
import { AppStateType } from '../../Redux/store';
import { IBooster } from '../Types/types';

type PropsType = {
    gameState: GameStateInitialStateType
    setBoosterTiming: () => void
}

const ActiveBoostersPanel = (props:PropsType) => {

    useEffect(()=>{
        console.log("useeffectcalled")
        let timeout: any;
        if(props.gameState.activeBoosters.length > 0)
            timeout = setTimeout(()=>props.setBoosterTiming(), 1000)
        return () => clearTimeout(timeout)
    }, [props.gameState.activeBoosters])

    const renderActiveBoosters = props.gameState.activeBoosters.map((booster: IBooster) => (
        <div className="active-booster">
            <div className="booster-image-container">
                <img className="booster-image" src={`${booster.img}`} alt="" />
            </div>
            <div className="booster-name">{booster.name}</div>
            <div className="timer-block">
                <p>{booster.timing}</p>
            </div>
        </div>
    ))

    return (
        <div>
            { renderActiveBoosters }
        </div>
    );
};

let mapStateToProps = (state: AppStateType) => ({
    gameState: state.gameState
})

export default connect(mapStateToProps, { setBoosterTiming } )(ActiveBoostersPanel);