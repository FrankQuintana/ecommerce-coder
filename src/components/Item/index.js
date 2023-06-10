import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

const Item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className='case'>
        <img src={info.img} alt={info.title} className='img' />
        <h3 className='title-it'>{info.title}</h3>
        <p className='text-it'>${info.price}</p>
        <button className='boton-it'>+ Info</button>
    </Link>
  )
}

export default Item