import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../Data/productsData'
import { FaStar } from "react-icons/fa";
import Dstyle from '../Components/ProductDetails.module.css'
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/CartSlice';

const ProductDetails = () => {
    const [activeimage, setActiveimage] = useState()
    const dispatch = useDispatch()
    const { Pid } = useParams()
    const [cbtn, setCbtn] = useState(false)


    const product = productsData.find((item) => {
        return item.id === Number(Pid)
    })

    const handledetail = (prod) => {


        dispatch(addTocart(prod))
        setCbtn(true)

        setTimeout(() => {
            setCbtn(false)
        }, 2000)
    }

    return (
        <>


            <div>
                {
                    product ? (
                        <div className={Dstyle.detailMain}>
                            <div className={Dstyle.Div1}>
                                <div >
                                    {
                                        product.images.map((image, i) => (
                                            <div onClick={() => setActiveimage(image)} className={Dstyle.PreviewImage}>
                                                <img src={image} key={i} />
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className={Dstyle.Div2}>
                                <img src={activeimage || product.images[0]} />
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
                                <button onClick={() => handledetail(product)} >{cbtn ? (<p className={Dstyle.btns}>Added</p>) : ("Add to cart")}</button>
                            </div>
                        </div>

                    ) : (<>No data</>)
                }

            </div >
        </>
    )
}

export default ProductDetails
