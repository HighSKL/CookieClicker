import React from 'react';
import { connect } from 'react-redux';
import { tempImproveProductsRender } from '../../Assets/Common/renders';
import withModalWindow from '../../Assets/Common/withModalWindow';
import { IBooster } from '../../Assets/Types/types';
import { GameStateInitialStateType, setActiveBooster } from '../../Redux/Reducers/gameStateReducer';
import { InventoryPageInitialStateType, activateBooster } from '../../Redux/Reducers/inventoryReducer';
import { AppStateType } from '../../Redux/store';
import "./../../Assets/styles/inventoryWindow_style.scss"

type PropsType = {
    closeWindow: () => void,
    inventory: InventoryPageInitialStateType,
    gameState: GameStateInitialStateType,
    activateBooster: (booster: IBooster) => void,
    setActiveBooster: (booster: IBooster) => void
}

const InventoryWindow = (props: PropsType) => {
    
    const activateBooster = (booster: IBooster) => {
        props.activateBooster(booster)
        props.setActiveBooster(booster)
    }

    const tempImproveProductsRender = props.inventory.products.map((element: IBooster) => 
    <div className="product">
        <div className="product-image-container">
            <img className="product-image" src={`${element.img}`} alt="" />
        </div>
        <p className="product-name">{element.name}</p>
        <div className="product-description">{element.description}</div>
        <button className="product-buy-button" onClick={() => { activateBooster(element) }}>Активировать</button>
    </div>)

    return (
        <div className="inventory-wrapper">
            <div className="production-container">
                {tempImproveProductsRender}
            </div>
        </div>
    );
};

let mapStateToProps = (state: AppStateType) => ({
    inventory: state.inventoryState,
    gameState: state.gameState
})

export default connect(mapStateToProps, { activateBooster, setActiveBooster })(withModalWindow(InventoryWindow));