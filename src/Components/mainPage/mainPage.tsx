import React, { FC, useState } from 'react';
import "./../../Assets/styles/mainPage_style.scss";
import cookie from "./../../Assets/img/cookie_1.png"

const MainPage: FC = () => {

    const Aab = () => {
        return(
            <p className={`text ${activeClassName}`} style={{position:'absolute', marginLeft: ClientX+'px', marginTop: (ClientY)+'px'}}>+1</p>
        )
    }
    
    const [cookieCount, setCookieCount] = useState(0);
    const [activeClassName, setactiveClassName] = useState('notActive');
    const [ClientX, setClientX] = useState('notActive');
    const [ClientY, setClientY] = useState('notActive');

    const grabCookies = (event: any) => {
        setactiveClassName('active')
        setTimeout(()=>{setactiveClassName('notActive')}, 400)
        setClientX(event.clientX) 
        setClientY(event.clientY)
        setCookieCount((prev: number) => prev+=1)
    }

    return (
        <div className="mainPage_wrapper">
            <p className={`text ${activeClassName}`} style={{position:'absolute', marginLeft: ClientX+'px', marginTop: (ClientY)+'px'}}>+1</p>
            <div className="gameArea_menu">
                <h1 className="cookiesCount">{cookieCount}</h1>
                <div className="cookie_block" >
                    <img className="cookie-img" src={cookie} onClick={(event)=>{grabCookies(event)}}/>
                </div>
            </div>
            
        </div>
    );
};

export default MainPage;