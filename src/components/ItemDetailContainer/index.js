import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

const covers = [
    {
        id: 1,
        image: "/assets/iph-11.jpg",
        category: "covers",
        title: "Funda iPhone 11"
    },
    {
        id: 2,
        image: "/assets/iph-13.jpg",
        category: "covers",
        title: "Funda iPhone 13"
    },
    {
        id: 3,
        image: "/assets/iph-14.jpg",
        category: "covers",
        title: "Funda iPhone 14"
    },
    {
        id: 5,
        image: "/assets/ms-iph.jpg",
        category: "cargador",
        title: "MagSafe Charger"
    },
    {
        id: 5,
        image: "/assets/lgn-1m.jpg",
        category: "cargador",
        title: "Lightning to USB (1m)"
    }
  
  ];

export const ItemDetailContainer = () => {
    const [data, setData] =useState({});

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(covers);
            }, 2000);
        });
        getData.then(res => setData(res.find(covers => covers.id === parseInt(detalleId))));
    });

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer