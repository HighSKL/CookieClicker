import React, { useState } from 'react';
import { connect } from 'react-redux';
import withModalWindow from '../../Assets/Common/withModalWindow';
import { InitialStateType } from '../../Redux/Reducers/shopReducer';
import { AppStateType } from '../../Redux/store';

type PropsType = {
    closeWindow: () => void;
    shopPage: InitialStateType
}

const ShopWindow = (props: PropsType) => {
    return (
        <div className="shop-wrapper">
            
        </div>
    );
};

let mapStateToProps = (state: AppStateType) => ({
    shopPage: state.shopWindow
})

export default connect(mapStateToProps, { })(withModalWindow(ShopWindow));