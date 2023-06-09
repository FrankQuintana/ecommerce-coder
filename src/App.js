import './App.css';
import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'CeluMusic'} />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'Productos'} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;