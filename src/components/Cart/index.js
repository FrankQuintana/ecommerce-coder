import React from 'react'
import "./cart.css"
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem'

const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
    return(
      <>
        <p>No hay productos</p>
        <Link to='/'>Comprar productos</Link>
      </>
    );
  }

  return (
    <>
      {
        cart.map(product => <CartItem key={product.id} product={product} />)
      }
      <p>Total: {totalPrice()}</p>
    </>
  )
}

export default Cart