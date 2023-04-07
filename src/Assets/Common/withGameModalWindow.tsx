import React, { ComponentType } from 'react';
import '../../Assets/styles/gameWindow_style.scss'

type PropsType = {}

const withGameModalWindow = <BaseProps extends PropsType>(Component: ComponentType<BaseProps>) => {
    return function (props: BaseProps) {
        return (
            <div className="game-window">
                <div className="game-block-container">
                    <Component {...props} />
                </div>
            </div>
        );
    }
    
};

export default withGameModalWindow;