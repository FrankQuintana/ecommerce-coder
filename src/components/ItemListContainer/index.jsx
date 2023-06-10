import React, {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import "./itemListContainer.css";
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        }
        
    }, [categoriaId]);


  return (
    <>
      <div className="item__container">
          <h1><Title greeting="CeluMusic" /></h1>
      </div>
      
      <div className="listItem__container">
          <ItemList data={data} />
      </div>
        
    </>
    
  )
}

export default ItemListContainer