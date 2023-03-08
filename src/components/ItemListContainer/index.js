import "./itemListContainer.css";
import ItemList from "../ItemList";
import React, {useState, useEffect} from "react";

const cover = [
    {
        id: 1,
        image: "./assets/iph-11.jpg",
        title: "Funda iPhone 11"
    },
    {
        id: 2,
        image: "../assets/iph-13.jpg",
        title: "Funda iPhone 13"
    },
    {
        id: 3,
        image: "../assets/iph-14.jpg",
        title: "Funda iPhone 14"
    }

];

export const ItemListContainer = ({greeting}) => {

    const [data, setData] =useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(cover);
            }, 3000);
        });
        getData.then(res => setData(res))
    }, []);

    return (
        <>
            <div className="item__container">
                <h1>{greeting}</h1>
            </div>
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;