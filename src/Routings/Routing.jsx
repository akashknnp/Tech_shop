import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Components/Login'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import ProductDetails from '../Components/ProductDetails'
import Allproducts from '../Pages/Allproducts'



const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/' element={<Home />} />
                <Route path='/product/:Pid' element={<ProductDetails />} />
                <Route path='/allproducts' element={<Allproducts />} />
            </Routes>
        </div>
    )
}

export default Routing
