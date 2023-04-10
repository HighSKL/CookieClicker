import React, { ComponentType } from 'react';
import '../../Assets/styles/gameWindow_style.scss'
import { AiOutlineClose } from "react-icons/ai";

type PropsType = { closeWindow: () => void }

const withGameModalWindow = <BaseProps extends PropsType>(Component: ComponentType<BaseProps>) => {
    return function (props: BaseProps) {
        return (
            <div className="game-window-background">
                <div className="game-window">
                <button className="closeGameWindow" onClick={props.closeWindow}><AiOutlineClose /></button>
                <div className="game-block-container">
                    <Component {...props} />
                </div>
            </div>
            </div>
        );
    }
    
};

export default withGameModalWindow;