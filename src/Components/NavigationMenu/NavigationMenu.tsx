import React, { FC, useEffect, useState } from 'react';
import "./../../Assets/styles/navigation_style.scss";
import { GiHamburgerMenu, GiSchoolBag } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import ShopWindow from '../ShopWindow/ShopWindow';
import InventoryWindow from '../InventoryWindow/InventoryWindow';


const NavigationMenu: FC = () => {

    const [isSwitchedHamMenu, setIsSwitchedHamMenu] = useState<boolean>(false)
    const [isSwitchedShopWind, setIsSwitchedShopWind] = useState<boolean>(false)
    const [isSwitchedInvent, setIsSwitchedInvent] = useState<boolean>(false)

    const menuSwitcher: (value: boolean, hookFunc: any) => void = (value: boolean, hookFunc: any) => hookFunc(value ? false : true)

    return (
        <>
            {(isSwitchedShopWind&&<ShopWindow closeWindow={()=>{menuSwitcher(isSwitchedShopWind, setIsSwitchedShopWind)}}/>)}
            {(isSwitchedInvent&&<InventoryWindow closeWindow={()=>{menuSwitcher(isSwitchedInvent, setIsSwitchedInvent)}}/>)}
            <div className="navigaton_wrapper">
                <div className="navigate-list">
                    <div className="hamburger-menu"><GiHamburgerMenu onClick={() => menuSwitcher(isSwitchedHamMenu, setIsSwitchedHamMenu)} /></div>
                    <div className={isSwitchedHamMenu ? "secoundMenuOpen" : "secoundMenuClose"}>
                        <div className="shop-menu icon"><CgShoppingCart onClick={() => menuSwitcher(isSwitchedShopWind, setIsSwitchedShopWind)} /></div>
                        <div className="user-bag icon"><GiSchoolBag onClick={() => menuSwitcher(isSwitchedInvent, setIsSwitchedInvent)} /></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationMenu;