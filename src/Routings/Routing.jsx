import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Components/Login'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'



const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/' element={<Home />} />

            </Routes>
        </div>
    )
}

export default Routing
