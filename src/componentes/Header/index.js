import React from "react";
import './Header.css' 

function Header() {
    const onClickCart = (msg) => {
        alert(msg);
    }
    return (
        <div className="header">
            <button className="cart">
                CARRITO
            </button>
        </div>
    );
}

export {Header}