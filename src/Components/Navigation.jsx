import React, { useState, useEffect, useRef } from 'react'
import Nstyle from './Navigation.module.css'
import { IoSearchSharp, IoPerson } from "react-icons/io5"
import { HiShoppingCart } from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import productsData from '../Data/productsData'

const Navigation = () => {

    const navigate = useNavigate()

    // ICON STATES
    const [cart, setcart] = useState(false)
    const [person, setperson] = useState(false)
    const [islogin, setislogin] = useState(false)

    // SEARCH STATES
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState([])

    // REFS
    const personRef = useRef(null)
    const searchRef = useRef(null)

    // 🔍 SEARCH FILTER LOGIC
    useEffect(() => {
        if (searchValue.trim() === '') {
            setSearchResults([])
            return
        }

        const filtered = productsData.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )

        setSearchResults(filtered)
    }, [searchValue])

    // 🔗 SEARCH RESULT CLICK
    const handleSearchClick = (id) => {
        setShowSearch(false)
        setSearchValue('')
        setSearchResults([])
        navigate(`/product/${id}`)
    }

    // 🔐 LOGIN
    const handleLogin = () => {
        setislogin(true)
        setperson(false)
    }

    // ❌ OUTSIDE CLICK — PERSON
    useEffect(() => {
        const handleOutsidePerson = (e) => {
            if (personRef.current && !personRef.current.contains(e.target)) {
                setperson(false)
            }
        }

        document.addEventListener("mousedown", handleOutsidePerson)
        return () => document.removeEventListener("mousedown", handleOutsidePerson)
    }, [])

    // ❌ OUTSIDE CLICK — SEARCH
    useEffect(() => {
        const handleOutsideSearch = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSearch(false)
                setSearchValue('')
                setSearchResults([])
            }
        }

        document.addEventListener("mousedown", handleOutsideSearch)
        return () => document.removeEventListener("mousedown", handleOutsideSearch)
    }, [])

    return (
        <>
            <div className={Nstyle.navigation}>
                {/* LOGO */}
                <div className={Nstyle.logo}>
                    <Link to="/">
                        <p>Tech-Shop</p>
                    </Link>
                </div>

                <div className={Nstyle.navIcons}>

                    {/* 🔍 SEARCH */}
                    <div className={Nstyle.searchWrapper} ref={searchRef}>
                        <div
                            className={Nstyle.Search}
                            onClick={() => {
                                setShowSearch(prev => !prev)
                                setperson(false)
                            }}
                        >
                            <IoSearchSharp />
                        </div>

                        {showSearch && (
                            <div className={Nstyle.searchBox}>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    autoFocus
                                />

                                {searchResults.length > 0 && (
                                    <div className={Nstyle.searchResults}>
                                        {searchResults.map(item => (
                                            <div
                                                key={item.id}
                                                className={Nstyle.searchItem}
                                                onClick={() => handleSearchClick(item.id)}
                                            >
                                                <img src={item.images[0]} alt={item.title} />
                                                <div>
                                                    <p>{item.title}</p>
                                                    <span>₹ {item.finalPrice}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {searchValue && searchResults.length === 0 && (
                                    <p className={Nstyle.noResult}>No products found</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* 🛒 CART */}
                    <div>
                        <Link to="/cart">
                            <div
                                className={Nstyle.Cart}
                                onMouseEnter={() => setcart(true)}
                                onMouseLeave={() => setcart(false)}
                            >
                                <HiShoppingCart />
                            </div>
                        </Link>
                        {cart && <p className={Nstyle.backcart}>Cart</p>}
                    </div>

                    {/* 👤 PERSON */}
                    <div ref={personRef}>
                        <div
                            className={Nstyle.Person}
                            onClick={() => {
                                setperson(prev => !prev)
                                setShowSearch(false)
                            }}
                        >
                            <IoPerson />
                        </div>

                        {person && (
                            <div className={Nstyle.backperson}>
                                <p>Hello!</p>
                                <p>Access account & manage orders</p>

                                <div className={Nstyle.authLinks}>
                                    <span onClick={handleLogin}>Login</span> /
                                    <span> Sign Up</span>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* 🔐 LOGIN MODAL */}
            {islogin && <Login onClose={() => setislogin(false)} />}
        </>
    )
}

export default Navigation
