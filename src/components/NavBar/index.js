import "./navBar.css";
import React from "react";
import CarWidget from "../CarWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <NavLink to="/" className="nav__logo">CeluMusic</NavLink>
                </div>
                <ul className="nav__list">
                    <li>
                        <NavLink to="/categoria/fundas" className="nav__link">Fundas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/cargadores" className="nav__link">Cargadores</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="nav__link"><CarWidget/></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;