import React from 'react'
import './cartItem.css'
import { useCartContext } from '../../context/CartContext'

const CartItem = ({ product }) => {
    const { deleteProduct } = useCartContext();

  return (
    <div className='itemcart'>
        <img src={product.img} alt={product.title} />
        <div>
            <p>Nombre: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio c/u: {product.price}</p>
            <p>Subtotal: {product.quantity * product.price}</p>
            <button onClick={() => deleteProduct(product.id)}>X</button>
        </div>
    </div>
  )
}

export default CartItem