import React, { useState, useEffect, useRef } from 'react'
import Nstyle from './Navigation.module.css'
import { IoSearchSharp, IoPerson } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Login from './Login'

const Navigation = () => {
    const [search, setSearch] = useState(false)
    const [cart, setcart] = useState(false)
    const [person, setperson] = useState(false)
    const [islogin, setislogin] = useState(false)
    const personRef = useRef(null); // 👈 NEW

    const handlehover = (param) => {
        if (param === 'search') setSearch(true)
        else if (param === 'cart') setcart(true)
        else setperson(true)
    }

    const handleleave = (param) => {
        if (param === 'search') setSearch(false)
        else if (param === 'cart') setcart(false)
    }

    const handleLogin = () => {
        setislogin(true)
    }

    // 👇 OUTSIDE CLICK DETECTION
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                personRef.current &&
                !personRef.current.contains(e.target)
            ) {
                setperson(false);

            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className={Nstyle.navigation}>
                <div className={Nstyle.logo}>
                    <Link to="/">
                        <p>Tech-Shop</p>
                    </Link>
                </div>

                <div>
                    {/* SEARCH */}
                    <div>
                        <div
                            className={Nstyle.Search}
                            onMouseEnter={() => handlehover('search')}
                            onMouseLeave={() => handleleave('search')}
                        >
                            <IoSearchSharp />
                        </div>
                        {search && <p className={Nstyle.back}>search</p>}
                    </div>

                    {/* CART */}

                    <div>
                        <Link to="/cart">
                            <div
                                className={Nstyle.Cart}
                                onMouseEnter={() => handlehover('cart')}
                                onMouseLeave={() => handleleave('cart')}
                            >
                                <HiShoppingCart />
                            </div>

                        </Link>


                    </div>{cart && <p className={Nstyle.backcart}>Cart</p>}




                    {/* PERSON */}
                    <div ref={personRef}> {/* 👈 WRAPPER WITH REF */}
                        <div
                            className='person'
                            onClick={() => setperson(prev => !prev)}
                        >
                            <IoPerson />
                        </div>

                        {person && (
                            <div className='backperson'>
                                <div>
                                    <p>Hello!</p><br />
                                    <p>Access Account and manage orders</p><br />
                                    <div>
                                        <p><span onClick={handleLogin}>Login</span>/<span>SignUp</span></p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
            {
                islogin && <div className=' position-absolute z-8'>
                    <div> <Login /></div>

                </div>
            }
        </>
    )
}

export default Navigation
