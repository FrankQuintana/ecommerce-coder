import React from "react";
import CarWidget from "../CarWidget";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a href="#" className="nav__link">CeluMusic</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a href="#" className="nav__link">Fundas</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Cargadores</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Accesorios</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link"><CarWidget/></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;