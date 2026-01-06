import React, { useState } from 'react'
import './Navigation.css'
import { IoSearchSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { useEffect } from 'react';
import "tailwindcss";
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [search, setSearch] = useState(false)
    const [cart, setcart] = useState(false)
    const [person, setperson] = useState(false)

    const handlehover = (param) => {
        if (param === 'search') {
            setSearch(true)
            console.log(search);
        }
        else if (param === 'cart') {
            setcart(true)
        }
        else {
            setperson(true)
        }
    }
    const handleleave = (param) => {
        if (param === 'search') {
            setSearch(false)
        }
        else if (param === 'cart') {
            setcart(false)
        }
        else {
            setperson(false)
        }
    }

    return (
        <>
            <div className="navigation">
                <div className="logo">
                    <p>Tech-Shop</p>
                </div>
                <div>
                    <div className='Search' onMouseEnter={() => handlehover('search')} onMouseLeave={() => handleleave('search')}><IoSearchSharp /></div>
                    {
                        search && <p className='back'>search</p>
                    }
                    <div className='Cart' onMouseEnter={() => handlehover('cart')} onMouseLeave={() => handleleave('cart')}><HiShoppingCart /></div>
                    {
                        cart && <p className='back-cart'>Cart</p>
                    }
                    <div className='person' onMouseEnter={() => handlehover('person')} onMouseLeave={() => handleleave('person')}><IoPerson /></div>
                    {
                        person && <div className='backperson'>
                            <div>
                                <p>Hello !</p>
                                <p>Access Account and manage orders</p>
                                <div>
                                    <p><span>Login</span>/<span>SignUp</span></p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navigation
