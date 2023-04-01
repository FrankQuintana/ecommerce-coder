import "./itemDetail.css"
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";


export const ItemDetail = ({ data }) => {
    const [toCart, setToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setToCart(true);
        addProduct(data, quantity);
    };

    return (
        <div className="detail__container">
            <div className="detail">
                <img className="detail__img" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>${data.price}</p>
                    {
                        toCart
                            ? (<Link to="/cart">Terminar Compra</Link>)
                            : (<ItemCount initial={0} stock={10} onAdd={onAdd}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;