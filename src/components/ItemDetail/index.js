import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext';
import "./itemDetail.css"
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ( { data } ) => {
  const [goCart, setGoCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoCart(true);
    addProduct(data, quantity)
  }

  return (
    <div className="detail__container">
        <div className="detail">
            <img className="detail__img" src={data.img} alt={data.title} />
            <div className="content">
                <h1 className='title-detail'>{data.title}</h1>
                <h2 className='text-detail'>Precio: ${data.price}</h2>
                {
                  goCart
                  ? <Link to="/cart"><button className='boton-detail'>Terminar compra</button></Link>
                  : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail