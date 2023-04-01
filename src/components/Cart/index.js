import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "coder",
            lastname: "house",
            email: "coder@house.com"
        },
        items: cart.map(product => ({
             id: product.id, 
             title: product.title, 
             price: product.price, 
             quantity: product.quantity 
            })),

        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => console.log(id));

    }

    if (cart.length === 0) {
        return (
            <>
                <p>El carro esta vacio</p>
                <Link to="/">Pagina principal</Link>
            </>
        );
    }

    return (
        <>
            { cart.map(product => <ItemCart key={product.id} product={product} /> )}
            <p>Total: {totalPrice()}</p>
            <button onClick={handleClick}>Generar orden</button>
        </>
    )
}
export default Cart;