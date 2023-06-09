import React, {useState} from 'react'
import "./itemDetail.css"
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ( { data } ) => {
  const [goCart, setGoCart] = useState(false)

  const onAdd = (quantity) => {
    setGoCart(true)
  }

  return (
    <div className="detail__container">
        <div className="detail">
            <img className="detail__img" src={data.image} alt={data.title} />
            <div className="content">
                <h1>{data.title}</h1>
                {
                  goCart
                  ? <Link to="/cart">Terminar compra</Link>
                  : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail