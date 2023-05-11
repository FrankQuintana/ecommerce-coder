import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Checkout from '../pages/Checkout'
import ItemDetail from '../pages/ItemDetail'
import NavBar from '../components/NavBar'

const Rutas = () => {
  return (
    <BrowserRouter>
        <NavBar/> 
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/item/:id' element={<ItemDetail />} />
        </Routes>
    
    </BrowserRouter>
  )
}

export default Rutas