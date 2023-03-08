import React from "react";

export const ItemDetail = ({ data }) => {
    return (
        <div className="detail__container">
            <div className="detail">
                <img className="detail__img" src="{data.image}" alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;