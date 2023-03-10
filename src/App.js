import './App.css';

import Cart from './components/Cart';
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'CeluMusic'} />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'CeluMusic'} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
        
        
        
      </BrowserRouter>
    </>
  );
}

export default App;