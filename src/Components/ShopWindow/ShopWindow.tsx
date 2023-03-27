import React, { useState } from 'react';
import { connect } from 'react-redux';
import withModalWindow from '../../Assets/Common/withModalWindow';
import { IBooster, MultipliesType, ProductType } from '../../Assets/Types/types';
import { StoreInitialStateType } from '../../Redux/Reducers/shopReducer';
import { GameStateInitialStateType, setPower, setCookie } from '../../Redux/Reducers/gameStateReducer'
import { AppStateType } from '../../Redux/store';
import "./../../Assets/styles/shopWindow_style.scss"
import { addBooster, InventoryPageInitialStateType } from '../../Redux/Reducers/inventoryReducer';

type PropsType = {
    closeWindow: () => void,
    shopPage: StoreInitialStateType,
    gameState: GameStateInitialStateType,
    inventoryPage: InventoryPageInitialStateType
    setPower: (cookiePerClick: number) => void
    setCookie: (cookie: number) => void
    addBooster: (product: IBooster) => void
}

const ShopWindow = (props: PropsType) => {

    const [chosedProduct, setChosedProduct] = useState<MultipliesType | null>(null);

    const buyUpdateProduct = ( product: ProductType ) => {
        props.setCookie(props.gameState.cookieCount - (product.cost*(chosedProduct?chosedProduct.multiplie:1)))
        props.setPower((props.gameState.cookiePower.basePower + product.effect)*(chosedProduct?chosedProduct.multiplie:1))
    }

    const buyTempUpdateProduct = ( product: IBooster ) => {
        props.setCookie(props.gameState.cookieCount - (product.cost*(chosedProduct?chosedProduct.multiplie:1)))
        for(let i = 0; i < (chosedProduct?chosedProduct.multiplie:1); i++){
            props.addBooster(product);
        }
    }


    const productsRender = props.shopPage.products.map((element: ProductType) =>
            <div className="product">
                <div className="product-image-container">
                    <img className="product-image" src={`${element.img}`} alt="" />
                </div>
                <p className="product-name">{element.name}</p>
                <div className="product-description">{element.description}</div>
                <p className="product-cost">{element.cost*(chosedProduct?chosedProduct.multiplie:1)}</p>
                {
                    props.gameState.cookieCount - (element.cost*(chosedProduct?chosedProduct.multiplie:1)) >= 0 ? <button className="product-buy-button" onClick={() => { buyUpdateProduct(element) }}>Купить</button> :
                        <button disabled>Купить</button>
                }
            </div>
    )

    const multiplieBlockRender = props.gameState.multiplies.map((element: MultipliesType) =>
        <div className={`multiplier-block ${element == chosedProduct ? "chosed" : ""}`} onClick={() => { element == chosedProduct ? setChosedProduct(null) : setChosedProduct(element) }}><p>{`x${element.multiplie}`}</p></div>
    )

    const tempImproveProductsRender = props.shopPage.tempImproveProducts.map((element: IBooster) => 
            <div className="product">
                <div className="product-image-container">
                    <img className="product-image" src={`${element.img}`} alt="" />
                </div>
                <p className="product-name">{element.name}</p>
                <div className="product-description">{element.description}</div>
                <p className="product-cost">{element.cost*(chosedProduct?chosedProduct.multiplie:1)}</p>
                {
                    props.gameState.cookieCount - (element.cost*(chosedProduct?chosedProduct.multiplie:1)) >= 0 ? <button className="product-buy-button" onClick={() => { buyTempUpdateProduct(element) }}>Купить</button> :
                        <button disabled className="l">Купить</button>
                }
            </div>
    );

    return (
        <div className="shop-wrapper">
            <h1 className="modal-window-title">Магазин</h1>
            <div className="multiplier-container">
                {multiplieBlockRender}
            </div>
            <div className="shop-container">
                <p className="improve-title">Улучшения</p>
                <div className="production-container">
                    {productsRender}
                </div>
                <p className="improve-title">Временные улучшения</p>
                <div className="production-container">
                    {tempImproveProductsRender}
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = (state: AppStateType) => ({
    shopPage: state.shopWindow,
    gameState: state.gameState,
    inventoryPage: state.inventoryState
})

export default connect(mapStateToProps, { setPower, setCookie, addBooster })(withModalWindow(ShopWindow));