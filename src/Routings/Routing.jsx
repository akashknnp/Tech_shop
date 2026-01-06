import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Components/Login'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default Routing
