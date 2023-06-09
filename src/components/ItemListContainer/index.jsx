import React, {useState, useEffect} from 'react';
import "./itemListContainer.css";
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


const products = [
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


const ItemListContainer = () => {
  const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 3000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(covers => covers.category === categoriaId)));
        } else {
            getData.then(res => setData(res))
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