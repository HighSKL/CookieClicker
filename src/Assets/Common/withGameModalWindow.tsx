import React, { ComponentType } from 'react';
import '../../Assets/styles/gameWindow_style.scss'

type PropsType = {}

const withGameModalWindow = <BaseProps extends PropsType>(Component: ComponentType<BaseProps>) => {
    return function (props: BaseProps) {
        return (
            <div className='game-window'>
                <Component {...props} />
            </div>
        );
    }
    
};

export default withGameModalWindow;