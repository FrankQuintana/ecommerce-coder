import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'
// import ItemCount from '../ItemCount'

const Item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className='case'>
        <img src={info.image} alt={info.title} className='img' />
        <p>{info.title}</p>
        <p>$1500</p>
        {/* <ItemCount /> */}
    </Link>
  )
}

export default Item