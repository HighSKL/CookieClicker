import React, { MouseEventHandler, Dispatch, FC, SetStateAction } from 'react';
import "./../styles/modalWindow_style.scss";

type PropsType = {
    closeWindow: () => void;
}

const withModalWindow = <BaseProps extends PropsType>(Component: React.ComponentType<BaseProps>) => {
    return function (props: BaseProps) {

        const closeWindowHandler = (event: any) => {
            event.preventDefault();
            if (event.target === event.currentTarget)
                props.closeWindow();
        }

        return (
            <div className="modal-window_wrapper" onClick={closeWindowHandler}>
                <div className="modal-window-block">
                    <Component {...props} />
                </div>
            </div>
        );
    }

};

export default withModalWindow;