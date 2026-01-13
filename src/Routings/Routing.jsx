import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Components/Login'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import ProductDetails from '../Components/ProductDetails'



const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/' element={<Home />} />
                <Route path='/product/:Pid' element={<ProductDetails />} />
            </Routes>
        </div>
    )
}

export default Routing
