import React from 'react'
import './navBar.css'
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='container'>
      <nav className='nav'>
        <div className='brand'>
          <NavLink className='nav__link' to="/" >CeluMusic</NavLink>
        </div>
        <ul className='nav__list'>
          <li>
            <NavLink className='nav__link' to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink className='nav__link' >Fundas</NavLink>
          </li>
          <li>
            <NavLink className='nav__link' >Cargadores</NavLink>
          </li>
          <li>
            <NavLink className='nav__link' >Accesorios</NavLink>
          </li>
          <li>
            <a className='nav__link' >
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;