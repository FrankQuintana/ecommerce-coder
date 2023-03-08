import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";

const cover = {
    id: 1,
    image: "../assets/iph-11.jpg",
    title: "funda iphone 11"
};

export const ItemDetailContainer = () => {

    const [data, setData] =useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(cover);
            }, 3000);
        });
        getData.then(res => setData(res));
    });

    return (
        <ItemDetail />
    )
}

export default ItemDetailContainer;