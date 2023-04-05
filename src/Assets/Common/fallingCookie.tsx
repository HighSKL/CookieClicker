import React, { useEffect, useState } from 'react';
import cookie from "../img/cookie_1.png"
import "../styles/fallingCookie_style.scss"

let random = (max: number = 100) => Math.floor(Math.random() * max)

const FallingCookie = () => {

    const [startFallingPos, setStartFallingPos] = useState(random())

    return (
        //@ts-ignore       
        <div className="falling-cookie-block" style={{ marginLeft: startFallingPos + "%", marginTop: 0 + "%" }}>
            <img src={cookie} alt="" />
        </div>
    );
};

export default FallingCookie;