import { useState } from 'react';
import "./../../Assets/styles/mainPage_style.scss";
import cookie from "./../../Assets/img/cookie_1.png"
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/store';
import { GameStateInitialStateType, setBoosterTiming, setCookie, setPower } from '../../Redux/Reducers/gameStateReducer';
import ActiveBoostersPanel from '../../Assets/Common/activeBoostersPanel';

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

    const grabCookies = (event: any) => {
        setactiveClassName('active')
        setTimeout(() => { setactiveClassName('notActive') }, 400)
        setClientX(event.clientX)
        setClientY(event.clientY)
        props.setCookie(props.gameState.cookieCount + props.gameState.cookiePower.resultPower())
    }

    return (
        <div className="main-page_wrapper">
            <div className="boosters">
                <ActiveBoostersPanel />
            </div>
            <p className={`text ${activeClassName}`} style={{ position: 'absolute', marginLeft: ClientX + 'px', marginTop: (ClientY) + 'px' }}>+{props.gameState.cookiePower.resultPower()}</p>
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