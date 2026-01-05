import React from 'react'
import './Navigation.css'
import { IoSearchSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <div className="logo">
                    <p>Tech-Shop</p>
                </div>
                <div>
                    <div><IoSearchSharp /></div>
                    <div><HiShoppingCart /></div>
                    <div><IoPerson /></div>
                </div>
            </div>
        </>
    )
}

export default Navigation
