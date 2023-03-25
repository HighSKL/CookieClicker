import { IBooster } from "../Types/types"

export const tempImproveProductsRender = (productsPath: any, cookieCount: number, activate: () => void, isBuy: Boolean = true) => {
    return (productsPath.map((element: IBooster) =>
        <div className="product">
            <div className="product-image-container">
                <img className="product-image" src={`${element.img}`} alt="" />
            </div>
            <p className="product-name">{element.name}</p>
            <div className="product-description">{element.description}</div>
            <p className="product-cost">{element.cost}</p>
            {
                cookieCount - element.cost >= 0 ? <button className="product-buy-button" onClick={() => { activate() }}>{isBuy?"Купить":"Активировать"}</button> :
                    <button disabled className="l">Купить</button>
            }
        </div>)
    )
}





    // return (props.inventory.products.map((element: IBooster) => 
    // <div className="product">
    //     <div className="product-image-container">
    //         <img className="product-image" src={`${element.img}`} alt="" />
    //     </div>
    //     <p className="product-name">{element.name}</p>
    //     <div className="product-description">{element.description}</div>
    //     <p className="product-cost">{element.cost}</p>
    //     {
    //         props.gameState.cookieCount - element.cost >= 0 ? <button className="product-buy-button" onClick={() => {}}>Купить</button> :
    //             <button disabled className="l">Купить</button>
    //     }
    // </div>)





        // const tempImproveProductsRender = props.shopPage.tempImproveProducts.map((element: IBooster) =>
    //         <div className="product">
    //             <div className="product-image-container">
    //                 <img className="product-image" src={`${element.img}`} alt="" />
    //             </div>
    //             <p className="product-name">{element.name}</p>
    //             <div className="product-description">{element.description}</div>
    //             <p className="product-cost">{element.cost}</p>
    //             {
    //                 props.gameState.cookieCount - element.cost >= 0 ? <button className="product-buy-button" onClick={() => { buyTempUpdateProduct(element) }}>Купить</button> :
    //                     <button disabled className="l">Купить</button>
    //             }
    //         </div>
    // );