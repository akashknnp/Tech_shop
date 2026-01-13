import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../Data/productsData'
import { FaStar } from "react-icons/fa";
import Dstyle from '../Components/ProductDetails.module.css'

const ProductDetails = () => {

    const { Pid } = useParams()


    const product = productsData.find((item) => {
        return item.id === Number(Pid)
    })

    return (
        <>


            <div>
                {
                    product ? (
                        <div className={Dstyle.detailMain}>
                            <div className={Dstyle.Div1}>
                                <p>{product.title}</p>
                            </div>
                            <div className={Dstyle.Div2}>
                                <img src={product.images[0]} />
                            </div>
                            <div className={Dstyle.Div3}>
                                <h1>{product.title}</h1>
                                <p>{product.info}</p>
                                <div>
                                    <div>
                                        {
                                            [...Array(product.rateCount)].map((_, i) => (
                                                <FaStar key={i} color="red" />
                                            ))
                                        }
                                    </div>
                                    <p> | {product.ratings} Ratings</p>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <div>
                                    <h1>₨ {product.finalPrice}</h1>
                                    <h3>₨ {product.originalPrice}</h3>
                                </div>

                                <p className={Dstyle.green}>You save : ₨ {product.originalPrice - product.finalPrice} </p>
                                <br />
                                <hr />
                                <br />
                                <h4>Offers and Discounts</h4>
                                <div className={Dstyle.boxdiv}>

                                    <div>

                                        <p>No Cost EMI on <br />credit Card</p>
                                    </div>
                                    <div>
                                        <p>Pay later & Avail <br />Cashback</p>
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <button>Add To Cart</button>
                            </div>
                        </div>

                    ) : (<>No data</>)
                }

            </div >
        </>
    )
}

export default ProductDetails
