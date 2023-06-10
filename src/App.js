import './App.css';
import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Index';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;