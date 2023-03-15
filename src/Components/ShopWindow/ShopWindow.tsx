import React, { ReactNode, useState } from 'react';
import { connect } from 'react-redux';
import withModalWindow from '../../Assets/Common/withModalWindow';
import { ProductType } from '../../Assets/Types/types';
import { StoreInitialStateType } from '../../Redux/Reducers/shopReducer';
import { GameStateInitialStateType, setPower, setCookie } from '../../Redux/Reducers/gameStateReducer'
import { AppStateType } from '../../Redux/store';
import "./../../Assets/styles/shopWindow_style.scss"

type PropsType = {
    closeWindow: () => void;
    shopPage: StoreInitialStateType,
    gameState: GameStateInitialStateType,
    setPower: (cookiePerClick: number) => void
    setCookie: (cookie: number) => void
}

const ShopWindow = (props: PropsType, button: string) => {

    const buyItem = (product: ProductType) => {
        props.setCookie(props.gameState.cookieCount - product.cost)
        props.setPower(props.gameState.cookiePerClick + product.effect)
    }

    const productsRender = props.shopPage.products.map((element: ProductType) => {
        return(
            <div className="product">
                    <div className="product-image-container">
                        <img className="product-image" src={`${element.img}`} alt="" />
                    </div>
                    <p className="product-name">{element.name}</p>
                    <div className="product-description">{element.description}</div>
                    <p className="product-cost">{element.cost}</p>
                    {
                        props.gameState.cookieCount - element.cost >= 0?<button className="product-buy-button" onClick={() => { buyItem(element) }}>Купить</button>:
                        <button disabled className="l">Купить</button>
                    }
            </div>
        );
    })

    return (
        <div className="shop-wrapper">
            <h1 className="modal-window-title">Магазин</h1>
            <div className="production-container">
                {productsRender}
            </div>
        </div>
    );
};

let mapStateToProps = (state: AppStateType) => ({
    shopPage: state.shopWindow,
    gameState: state.gameState
})

export default connect(mapStateToProps, { setPower, setCookie })(withModalWindow(ShopWindow));