import "./carWidget.css";
import React from "react";
import { useCartContext } from "../../context/CartContext";

export const CarWidget = () => {

    const { totalProducs } = useCartContext();

    return (
        <>
            <i className="bi bi-cart icon">
                <span className="number">
                    {totalProducs() || ""}
                </span>
            </i>
        </>
        
    );
}

export default CarWidget;