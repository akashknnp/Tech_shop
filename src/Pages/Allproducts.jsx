import React, { useEffect, useState } from 'react'
import AllStyle from '../Components/Allproducts.module.css'
import productsData from '../Data/productsData'
import { addTocart } from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'
import { FaStar } from "react-icons/fa"
import { brandsMenu, categoryMenu } from '../Data/filterBarData'
import Advantages from '../Components/Advantages'
import Footer from '../Components/Footer'

const Allproducts = () => {

    const dispatch = useDispatch()

    const [defaultProduct, setDefaultproduct] = useState([])
    const [cartbtn, setbtn] = useState(null)

    // FILTER STATES
    const [selectedFilters, setSelectedFilters] = useState([])
    const [price, setPrice] = useState(19999)
    const [sortType, setSortType] = useState('latest')

    // INITIAL LOAD
    useEffect(() => {
        setDefaultproduct(productsData)
    }, [])

    // APPLY FILTERS + SORT
    useEffect(() => {
        let filtered = [...productsData]

        // BRAND + CATEGORY FILTER
        if (selectedFilters.length > 0) {
            filtered = filtered.filter(item =>
                selectedFilters.includes(item.brand) ||
                selectedFilters.includes(item.category)
            )
        }

        // PRICE FILTER
        filtered = filtered.filter(item => item.finalPrice <= price)

        // SORTING
        if (sortType === 'featured') {
            filtered = filtered.filter(item => item.tag === 'featured-product')
        } else if (sortType === 'rated') {
            filtered = filtered.filter(item => item.rateCount >= 5)
        } else if (sortType === 'lowest') {
            filtered.sort((a, b) => a.finalPrice - b.finalPrice)
        } else if (sortType === 'highest') {
            filtered.sort((a, b) => b.finalPrice - a.finalPrice)
        }

        setDefaultproduct(filtered)
    }, [selectedFilters, price, sortType])

    // ADD TO CART
    const handleCart = (item) => {
        setbtn(item.id)
        dispatch(addTocart(item))
        setTimeout(() => setbtn(null), 2000)
    }

    // CHECKBOX HANDLER
    const handlecheck = (param) => {
        setSelectedFilters(prev =>
            prev.includes(param.label)
                ? prev.filter(item => item !== param.label)
                : [...prev, param.label]
        )
    }

    // RANGE HANDLER
    const handleRange = (e) => {
        setPrice(Number(e.target.value))
    }

    return (
        <>
            <div className={AllStyle.allmainProducts}>

                {/* FILTER SIDEBAR */}
                <div className={AllStyle.filterMainDiv}>

                    {/* SORT */}
                    <div>
                        <h3>Sort By</h3>
                        <p onClick={() => setSortType('latest')}>Latest</p>
                        <p onClick={() => setSortType('featured')}>Featured</p>
                        <p onClick={() => setSortType('rated')}>Top Rated</p>
                        <p onClick={() => setSortType('lowest')}>Price Low → High</p>
                        <p onClick={() => setSortType('highest')}>Price High → Low</p>
                    </div>

                    {/* BRANDS */}
                    <div>
                        <h3>Brands</h3>
                        {
                            brandsMenu.map(brand => (
                                <div key={brand.id}>
                                    <input
                                        type="checkbox"
                                        checked={selectedFilters.includes(brand.label)}
                                        onChange={() => handlecheck(brand)}
                                    />
                                    <p>{brand.label}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* CATEGORIES */}
                    <div>
                        <h3>Category</h3>
                        {
                            categoryMenu.map(cat => (
                                <div key={cat.id}>
                                    <input
                                        type="checkbox"
                                        checked={selectedFilters.includes(cat.label)}
                                        onChange={() => handlecheck(cat)}
                                    />
                                    <p>{cat.label}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* PRICE RANGE */}
                    <div>
                        <h3>Max Price</h3>
                        <input
                            type="range"
                            min="999"
                            max="19999"
                            value={price}
                            onChange={handleRange}
                        />
                        <p>₹ {price}</p>
                    </div>
                </div>

                {/* PRODUCTS */}
                <div className={AllStyle.productMain}>
                    {
                        defaultProduct.length > 0 ? (
                            defaultProduct.map(item => (
                                <div className={AllStyle.item} key={item.id}>

                                    <img src={item.images[0]} alt={item.title} />

                                    <div>
                                        {[...Array(item.rateCount)].map((_, i) => (
                                            <FaStar key={i} color="red" />
                                        ))}
                                    </div>

                                    <h2>{item.title}</h2>
                                    <p>{item.info}</p>

                                    <div>
                                        <h1>₹ {item.finalPrice}</h1>
                                        <h4>₹ {item.originalPrice}</h4>
                                    </div>

                                    <button onClick={() => handleCart(item)}>
                                        {cartbtn === item.id ? 'Added' : 'Add to cart'}
                                    </button>

                                </div>
                            ))
                        ) : (
                            <h2>No Products Found</h2>
                        )
                    }
                </div>

            </div>
            <Advantages />
            <Footer />
        </>
    )
}

export default Allproducts
