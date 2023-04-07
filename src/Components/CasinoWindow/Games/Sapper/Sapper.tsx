import React, { useReducer, useRef } from 'react';
import { connect } from 'react-redux';
import withGameModalWindow from '../../../../Assets/Common/withGameModalWindow';
import '../../../../Assets/styles/gamesStyles/sapperGame_style.scss'
import { AppStateType } from '../../../../Redux/store';
import { SapperInitialStateType, setCookiePayed, setEarnedCookie, setEndGame, setIsOpen, setStartGame } from '../../../../Redux/Reducers/gamesReducer/sapperReducer';
import { CellType } from '../../../../Assets/Types/types';
import { setCookie } from '../../../../Redux/Reducers/gameStateReducer';
import bombImg from '../../../../Assets/img/bomb.png'

type PropsType = {
    state: SapperInitialStateType
    setIsOpen: (id: number) => void
    setCookiePayed: (cookie: number) => void
    setStartGame: () => void
    setEndGame: () => void
    setCookie: (cookie: number) => void
    setEarnedCookie: (cookie: number) => void
    cookieCount: number
}

const Sapper = (props: PropsType) => {

    const inputRef: any = useRef(null)

    const bonusRender = (cell: CellType) => {
        if (cell.isBombContain)
            return <img src={bombImg} />
        return <p>+{cell.bonus}</p>
    }

    const cellsRender = props.state.cells.map((item: CellType) => (
        <div className={item.isOpen && props.state.isGameStart ? "cell openCell" : "cell closeCell"} onClick={() => { applyCellEffect(item) }}>
            {item.isOpen && props.state.isGameStart ? bonusRender(item) : null}
        </div>
    ))

    const applyCellEffect = (cell: CellType) => {
        if (!cell.isOpen) {
            props.setIsOpen(cell.id)
            if (cell.isBombContain) {

            } else {
                props.setEarnedCookie(cell.bonus)
            }
        }
    }

    const startGame = () => {
        if (inputRef.current.value > 0) {
            props.setCookie(props.cookieCount - inputRef.current.value)
            props.setStartGame()
        }
    }

    const endGame = () => {
        props.setCookie(props.cookieCount + +(props.state.earnedCookie).toFixed(2))
        props.setEndGame()
    }

    return (
        <div className="game-container">
            <div className="game-settings-block">
                <div className="set-cookie-payed-block">
                    <input type="range" ref={inputRef} max={props.cookieCount} value={props.state.cookiePayed} onChange={() => { props.setCookiePayed(inputRef.current == null ? 0 : inputRef.current.value) }} />
                    <p>{props.state.cookiePayed}</p>
                </div>
                {props.state.isGameStart ? <button className="end-game-button" onClick={endGame}>Собрать выигрыш: {props.state.earnedCookie}</button> : <button className="start-game-button" onClick={startGame}>Сделать ставку</button>}
            </div>
            <div className="game-area-container">
                {cellsRender}
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    state: state.sapperState,
    cookieCount: state.gameState.cookieCount
})

export default connect(mapStateToProps, { setIsOpen, setCookiePayed, setStartGame, setCookie, setEndGame, setEarnedCookie })(withGameModalWindow(Sapper));