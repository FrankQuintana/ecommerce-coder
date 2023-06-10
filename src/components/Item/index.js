import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'
// import ItemCount from '../ItemCount'

const Item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className='case'>
        <img src={info.img} alt={info.title} className='img' />
        <p>{info.title}</p>
        <p>{info.price}</p>
        {/* <ItemCount /> */}
    </Link>
  )
}

export default Item