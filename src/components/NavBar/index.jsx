import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='container'>
      <nav className='nav'>

        <div className='brand'>
          <NavLink className='nav__link' to="/" >CeluMusic</NavLink>
        </div>

        <ul className='nav__list'>
          <li>
            <NavLink className='nav__link' to="/" >Inicio</NavLink>
          </li>
          <li>
            <NavLink className='nav__link' to="/categoria/covers" >Fundas</NavLink>
          </li>
          <li>
            <NavLink className='nav__link' to="/categoria/cargador" >Cargadores</NavLink>
          </li>
          <li>
            <NavLink className='nav__link' to="/categoria/accesorio" >Accesorios</NavLink>
          </li>
          <li>
            <NavLink className='nav__link' to="/cart" ><CartWidget /></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;