import React, { FC } from 'react';
import "./../styles/modalWindow_style.scss";

const withModalWindow = (Component: FC) => {
    return function (props: any) {
        return (
            <div className="modalWindow_wrapper">
                <Component {...props} />
            </div>
        );
    }
    
};

export default withModalWindow;