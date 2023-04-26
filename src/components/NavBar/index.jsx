import React from 'react'
import './navBar.css'
import CartWidget from '../CartWidget'

export const NavBar = () => {
  return (
    <div className='container'>
      <nav className='nav'>
        <div className='brand'>
          <a className='nav__link' >CeluMusic</a>
        </div>
        <ul className='nav__list'>
          <li>
            <a className='nav__link' >Fundas</a>
          </li>
          <li>
            <a className='nav__link' >Cargadores</a>
          </li>
          <li>
            <a className='nav__link' >Accesorios</a>
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