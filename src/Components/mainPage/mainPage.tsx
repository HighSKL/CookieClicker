import React, { FC, useState, useEffect } from 'react';
import "./../../Assets/styles/mainPage_style.scss";
import cookie from "./../../Assets/img/cookie_1.png"
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/store';
import { GameStateInitialStateType, setBoosterTiming, setCookie, setPower } from '../../Redux/Reducers/gameStateReducer';
import { IBooster } from '../../Assets/Types/types';

type PropsType = {
    gameState: GameStateInitialStateType
    setCookie: (cookie: number) => void
    setBoosterTiming: () => void
    setPower: (cookiePerClick: number) => void
}

const MainPage = (props: PropsType) => {

    const [activeClassName, setactiveClassName] = useState('notActive');
    const [ClientX, setClientX] = useState('notActive');
    const [ClientY, setClientY] = useState('notActive');

    useEffect(()=>{
        if(props.gameState.activeBoosters.length > 0){
            setTimeout(()=>{
                props.setBoosterTiming()
            }, 1000)
        }
    })

    const grabCookies = (event: any) => {
        setactiveClassName('active')
        setTimeout(() => { setactiveClassName('notActive') }, 400)
        setClientX(event.clientX)
        setClientY(event.clientY)
        props.setCookie(props.gameState.cookieCount + props.gameState.cookiePerClick)
    }

    const renderActiveBoosters = props.gameState.activeBoosters.map((booster: IBooster) => {
        return (
            <div className="active-booster">
                <div className="booster-image-container">
                    <img className="booster-image" src={`${booster.img}`} alt="" />
                </div>
                <div className="booster-name">{booster.name}</div>
                <div className="timer-block">
                    <p>{booster.timing}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="mainPage_wrapper">
            <div className="boosters-container">
                {renderActiveBoosters}
            </div>
            <p className={`text ${activeClassName}`} style={{ position: 'absolute', marginLeft: ClientX + 'px', marginTop: (ClientY) + 'px' }}>+{props.gameState.cookiePerClick}</p>
            <div className="gameArea_menu">
                <h1 className="cookiesCount">{props.gameState.cookieCount}</h1>
                <div className="cookie_block" >
                    <img className="cookie-img" src={cookie} onClick={(event) => { grabCookies(event) }} />
                </div>
            </div>

        </div>
    );
};

let mapStateToProps = (state: AppStateType) => ({
    gameState: state.gameState
})

export default connect(mapStateToProps, { setCookie, setBoosterTiming, setPower })(MainPage);