import React from 'react'
import './navBar.css'

export const NavBar = () => {
  return (
    <div className='container'>
      <nav className='nav'>
        <div className='brand'>
          <a className='nav__link' href='#'>CeluMusic</a>
        </div>
        <ul className='nav__list'>
          <li>
            <a className='nav__link' href="#">Fundas</a>
          </li>
          <li>
            <a className='nav__link' href="#">Cargadores</a>
          </li>
          <li>
            <a className='nav__link' href="#">Carro</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;