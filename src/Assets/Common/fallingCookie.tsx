import React, { useEffect, useState } from 'react';
import cookie from "../img/cookie_1.png"
import "../styles/fallingCookie_style.scss"
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/store';
import { GameStateInitialStateType, setCookie } from '../../Redux/Reducers/gameStateReducer';

let random = (max: number = 100) => Math.floor(Math.random() * max)

type PropsType = {
    gameState: GameStateInitialStateType
    setCookie: (cookie: number) => void
    destroyFunc: ()=> void
}

const FallingCookie = (props: PropsType) => {


    const [startFallingPos, setStartFallingPos] = useState(random())

    useEffect(()=>{
        const timer = setTimeout(()=>{
            props.destroyFunc();
        },10000)

        return ()=>{
            clearTimeout(timer)
        }
    },[])
    

    return (
        <div className="falling-cookie-block" style={{ marginLeft: startFallingPos + "%", marginTop: 0 + "%" }} onClick={()=>{
            props.setCookie(props.gameState.cookieCount + 20)
            props.destroyFunc()
            // timer(true)
        }}>
            <img src={cookie} alt="" />
        </div>
    );
};


let mapStateToProps = (state: AppStateType) => ({
    gameState: state.gameState
})

export default connect(mapStateToProps, { setCookie })(FallingCookie);