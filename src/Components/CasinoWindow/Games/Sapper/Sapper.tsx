import { useRef } from 'react';
import { connect } from 'react-redux';
import withGameModalWindow from '../../../../Assets/Common/withGameModalWindow';
import '../../../../Assets/styles/gamesStyles/sapperGame_style.scss'
import { AppStateType } from '../../../../Redux/store';
import { SapperInitialStateType, setCookiePayed, setEarnedCookie, setEndGame, setIsOpen, setLoseGameStatus, setStartGame, setBombsQuality } from '../../../../Redux/Reducers/gamesReducer/sapperReducer';
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
    setLoseGameStatus: () => void
    setBombsQuality: (bombsQual: number) => void
    cookieCount: number,
    closeWindow: ()=>void
}

const Sapper = (props: PropsType) => {

    const inputCookiePayedRef: any = useRef(null)
    const inputBombsQualRef: any = useRef(null)

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
        if (!cell.isOpen && props.state.isGameStart) {
            props.setIsOpen(cell.id)
            if (cell.isBombContain) {
                props.setEarnedCookie(0)
                setTimeout(() => {
                    props.setLoseGameStatus()
                }, 500)
            } else {
                props.setEarnedCookie(cell.bonus)
            }
        }
    }

    const startGame = () => {
        if (inputCookiePayedRef.current.value > 0) {
            props.setCookie(props.cookieCount - parseInt(inputCookiePayedRef.current.value))
            props.setStartGame()
        }
    }

    const endGame = () => {
        props.setCookie(Math.ceil(props.cookieCount + +(props.state.earnedCookie).toFixed(2)))
        props.setEndGame()
    }

    return (
        <div className="game-container">
            {props.state.isGameLose ?
                <div className='loseGame'>
                    <p>Поражение</p>
                </div>
                : null}
            <div className="game-settings-block">
                <div className="set-cookie-payed-block">
                    <p>Ставка</p>
                    <div className="range-container">
                        <input disabled={props.state.isGameStart} type="range" ref={inputCookiePayedRef} max={props.cookieCount} value={props.state.cookiePayed} onChange={() => { props.setCookiePayed(inputCookiePayedRef.current == null ? 0 : parseInt(inputCookiePayedRef.current.value)) }} />
                    </div>
                    <p>{props.state.cookiePayed}</p>
                </div>
                <div className="set-cookie-payed-block">
                    <p className='settings-block-titile'>Количество бомб</p>
                    <div className="range-container">
                        <input type="range" disabled={props.state.isGameStart} ref={inputBombsQualRef} max={8} min={1} value={props.state.bombQuality} onChange={() => { props.setBombsQuality(inputBombsQualRef.current == null ? 0 : inputBombsQualRef.current.value) }} />
                    </div>
                    <p>{props.state.bombQuality}</p>
                </div>
                {props.state.isGameStart ? <button className="end-game-button game-button" onClick={endGame}>Собрать выигрыш: {props.state.earnedCookie}</button> : <button className="start-game-button game-button" onClick={startGame}>Сделать ставку</button>}
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

export default connect(mapStateToProps, { setIsOpen, setCookiePayed, setStartGame, setCookie, setEndGame, setEarnedCookie, setLoseGameStatus, setBombsQuality })(withGameModalWindow(Sapper));