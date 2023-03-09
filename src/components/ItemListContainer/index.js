import "./itemListContainer.css";
import ItemList from "../ItemList";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const products = [
    {
        id: 1,
        image: "/assets/iph-11.jpg",
        category: "fundas",
        title: "Funda iPhone 11"
    },
    {
        id: 2,
        image: "/assets/iph-13.jpg",
        category: "fundas",
        title: "Funda iPhone 13"
    },
    {
        id: 3,
        image: "/assets/iph-14.jpg",
        category: "fundas",
        title: "Funda iPhone 14"
    },
    {
        id: 4,
        image: "/assets/ms-iph.jpg",
        category: "cargadores",
        title: "MagSafe Charger"
    },
    {
        id: 5,
        image: "/assets/lgn-1m.jpg",
        category: "cargadores",
        title: "Lightning to USB (1m)"
    }

];

export const ItemListContainer = ({greeting}) => {

    const [data, setData] =useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 3000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(product => product.category === categoriaId)));
        } else {
            getData.then(res => setData(res))
        }
        
    }, [categoriaId]);

    return (
        <>
            <div className="item__container">
                <h1>{greeting}</h1>
            </div>
            <div className="listItem__container">
                <ItemList data={data} />
            </div>
            
        </>
    );
}

export default ItemListContainer;