import React from 'react'
import { useState } from 'react'
import "./formulary.css";
import { useCartContext } from '../../context/CartContext';
import { db } from '../../firebase/config'
import { addDoc, collection } from 'firebase/firestore';

const Formulary = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer:{
            nombre: '',
            email: '',
            telefono: ''
        },
        items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
        total: totalPrice()
        
    }
    
    const [form, setForm] = useState(order);

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            buyer:{
                ...form.buyer,
                [name]:value
            }
        })
    }

    const handleClick = () => {
        // const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then(({id}) => alert(id));
    }
  return (
    <div className='container-form'>
        <h1>Checkout</h1>
        <form action='' onChange={handleChange} className='formulary'>
            <label>Nombre y Apellido</label>
            <input onChange={handleChange} type="text" name='nombre' className='form-input' />
            <label>Correo</label>
            <input onChange={handleChange} type="email" name="email" id="email" className='form-input' />
            <label>Telefono</label>
            <input onChange={handleChange} type="text" name='telefono' className='form-input' />
            <button type="submit" className='form-boton' onClick={handleClick}>Comprar</button>
        </form>
    </div>
  )
}

export default Formulary