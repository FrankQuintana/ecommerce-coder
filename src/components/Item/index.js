import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

const Item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className='case'>
        <img src={info.image} alt={info.title} />
        <p>{info.title}</p>
    </Link>
  )
}

export default Item