import "./itemListContainer.css";
import ItemList from "../ItemList";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({greeting}) => {

    const [data, setData] =useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products");
        if (categoriaId) {
            const queryFilter = query(queryCollection, where("category", "==", categoriaId),);
            getDocs(queryFilter)
                .then((res) => setData(res.docs.map((product) => ({id: product.id, ...product.data() })),),);
        } else {
            getDocs(queryCollection)
                .then((res) => setData(res.docs.map((product) => ({id: product.id, ...product.data() })),),);
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
};

export default ItemListContainer;