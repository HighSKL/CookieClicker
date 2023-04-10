import { useReducer } from 'react';
import "./../../Assets/styles/navigation_style.scss";
import { GiHamburgerMenu, GiSchoolBag } from "react-icons/gi";
import { CgShoppingCart } from "react-icons/cg";
import ShopWindow from '../ShopWindow/ShopWindow';
import InventoryWindow from '../InventoryWindow/InventoryWindow';
import { MdOutlineCasino } from "react-icons/md";
import CasinoWindow from '../CasinoWindow/CasinoWindow';
import navigationMenuReducer, { ActionsTypes, NavigationMenuInitialStateType } from '../../Redux/Reducers/navigationMenuReducer'

const NavigationMenu = () => {

    const [state, dispatch] = useReducer(navigationMenuReducer, {
        isSwitchedHamburgerMenu: false,
        isSwitchedShopWindow: false,
        isSwitchedInventotyWindow: false,
        isSwitchedGameMenuWindow: false
    } as NavigationMenuInitialStateType)

    return (
        <>
            {(state.isSwitchedShopWindow&&<ShopWindow closeWindow={()=>{dispatch({type: ActionsTypes.SET_OPEN_SHOP_WINDOW})}}/>)}
            {(state.isSwitchedInventotyWindow&&<InventoryWindow closeWindow={()=>{dispatch({type: ActionsTypes.SET_OPEN_INVENTORY_WINDOW})}}/>)}
            {(state.isSwitchedGameMenuWindow&&<CasinoWindow closeWindow={()=>{dispatch({type: ActionsTypes.SET_OPEN_GAME_WINDOW})}}/>)}
            <div className="navigaton_wrapper">
                <div className="navigate-list">
                    <div className="hamburger-menu"><GiHamburgerMenu onClick={() => dispatch({type: ActionsTypes.SET_OPEN_HAMBURGER_MENU})} /></div>
                    <div className={state.isSwitchedHamburgerMenu ? "secoundMenuOpen" : "secoundMenuClose"}>
                        <div className="shop-menu icon"><CgShoppingCart onClick={() => dispatch({type: ActionsTypes.SET_OPEN_SHOP_WINDOW})} /></div>
                        <div className="user-bag icon"><GiSchoolBag onClick={() => dispatch({type: ActionsTypes.SET_OPEN_INVENTORY_WINDOW})} /></div>
                        <div className="icon"><MdOutlineCasino onClick={() => dispatch({type: ActionsTypes.SET_OPEN_GAME_WINDOW})}/></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationMenu;