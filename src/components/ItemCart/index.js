import "./itemCart.css";
import React from "react";
import { useCartContext } from "../../context/CartContext"

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart">
            <img src={product.img} alt={product.title} />
            <div>
                <p>Producto: {product.title}</p>
                <p>Unidades: {product.quantity}</p>
                <p>Precio c/u: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;