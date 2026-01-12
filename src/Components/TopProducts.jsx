import React, { useEffect, useState } from 'react'
import productsData from '../Data/productsData'
import Pstyle from '../Components/TopProducts.module.css'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";


const TopProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productsData.slice(0, 11))

    }, [])

    const handleClick = (param) => {
        if (param === 'all') {
            setProducts(productsData.slice(0, 11))
        }
        else if (param === 'headphone') {
            setProducts(productsData.filter((e) => {
                return e.category === 'Headphones'
            }))
        }
        else if (param === 'earbuds') {
            setProducts(productsData.filter((e) => {
                return e.category === 'Earbuds'
            }))
        }
        else if (param === 'earphone') {
            setProducts(productsData.filter((e) => {
                return e.category === 'Earphones'
            }))
        }
        else {
            setProducts(productsData.filter((e) => {
                return e.category === 'Neckbands'
            }))
        }
    }

    return (
        <>
            <div className={Pstyle.Products}>
                <h1>Top Products</h1>

                <div className={Pstyle.btns}>
                    <button onClick={() => handleClick('all')}>All</button>
                    <button onClick={() => handleClick('headphone')}>HeadPhones</button>
                    <button onClick={() => handleClick('earbuds')}>Earbuds</button>
                    <button onClick={() => handleClick('earphone')}>Earphones</button>
                    <button onClick={() => handleClick('neckband')}>NeckBand</button>
                </div>
                <div className={Pstyle.productMain}>
                    {
                        products.length > 0 ? (
                            products.map((item) => (
                                <div className={Pstyle.item} key={item.id}>
                                    <div>
                                        <img src={item.images[0]} />
                                    </div>
                                    <div>
                                        {
                                            [...Array(item.rateCount)].map((_, i) => (
                                                <FaStar key={i} color="red" />
                                            ))
                                        }

                                    </div>
                                    <br />
                                    <h2>{item.title}</h2>
                                    <p>{item.info}</p>
                                    <br /><hr /><br />
                                    <div>
                                        <h1>₨ {item.finalPrice}</h1>
                                        <h4>₨ {item.originalPrice}</h4>

                                    </div>
                                    <button>Add to Cart</button>
                                </div>
                            ))
                        ).concat(<div className={Pstyle.item} id={Pstyle.browse}>
                            <h2>Browse All products<br />
                                <GoArrowRight className={Pstyle.arrow} />
                            </h2>

                        </div>) : (<>Loading</>)
                    }

                </div>
            </div>
        </>
    )
}

export default TopProducts
