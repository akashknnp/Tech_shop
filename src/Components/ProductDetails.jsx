import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsData from '../Data/productsData'
import { FaStar } from "react-icons/fa";
import Dstyle from '../Components/ProductDetails.module.css'
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/CartSlice';
import reviewsData from '../Data/reviewsData';
import Footer from '../Components/Footer'
import Advantages from '../Components/Advantages'

const ProductDetails = () => {
    const navigate = useNavigate()
    const [activeimage, setActiveimage] = useState()
    const dispatch = useDispatch()
    const { Pid } = useParams()
    const [cbtn, setCbtn] = useState(false)
    const [Specify, setSpecify] = useState(true)
    const [overview, setOverview] = useState(false)
    const [review, setReview] = useState(false)

    const [cartbtn, setbtn] = useState(null)


    const product = productsData.find((item) => {
        return item.id === Number(Pid)
    })

    const relatedItems = productsData.filter((item) => {
        return product.category === item.category
    })

    const handledetail = (prod) => {
        dispatch(addTocart(prod))
        setCbtn(true)
        setTimeout(() => {
            setCbtn(false)
        }, 2000)
    }
    const handleCart = (param) => {
        console.log(param);
        setbtn(param.id)
        dispatch(addTocart(param))

        setTimeout(() => {
            setbtn(null)
        }, 2000)
    }
    const handleDetails = (itemId) => {
        navigate(`/product/${itemId}`)
    }


    const handletoggle = (param) => {
        if (param === 'overview') {
            setOverview(true)
            setReview(false)
            setSpecify(false)
        }
        else if (param === 'review') {
            setReview(true)
            setSpecify(false)
            setOverview(false)
        }
        else {
            setSpecify(true)
            setOverview(false)
            setReview(false)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

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


            <div className={Dstyle.Seconddiv}>
                <div className={Dstyle.menuDetails}>
                    <p onClick={() => handletoggle('specify')}>Specifications</p>
                    <p onClick={() => handletoggle('overview')}>Overview</p>
                    <p onClick={() => handletoggle('review')}>Review</p>
                </div>
                <div>
                    {
                        Specify && (
                            <div className={Dstyle.specifyDetails}>
                                <div>
                                    <p>Brand</p>
                                    <p>{product.brand}</p>
                                </div>
                                <div>
                                    <p>Model</p>
                                    <p>{product.title}</p>
                                </div>
                                <div>
                                    <p>Generic Name</p>
                                    <p>{product.category}</p>
                                </div>
                                <div>
                                    <p>HeadPhone Type</p>
                                    <p>{product.type}</p>
                                </div>
                                <div>
                                    <p>Connectivity</p>
                                    <p>{product.connectivity}</p>
                                </div>
                                <div>
                                    <p>Microphone</p>
                                    <p>Yes</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={Dstyle.overviews}>
                    {
                        overview && (
                            <div>
                                <h3>The <b color='red'>{product.title} {product.info}</b> provides with fabulous ans Sound quality</h3>
                                <ul>Sound Tunned to Perfection</ul>
                                <ul>Comfortable to Wear</ul>
                                <ul>Long Hours Playback Time</ul>
                                <p>Buy the <b><i> {product.title} {product.info} </i></b> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy the perfect flexibility and mobility with amazing music experience and quality with these neckbank giving you a truly awesome audio experience.</p>
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        review && (
                            <div>
                                {

                                    reviewsData.map((item) => (
                                        <div className={Dstyle.reviewsDetails}>
                                            <h4>{item.name}</h4>
                                            <div>
                                                {
                                                    [...Array(item.rateCount)].map((_, i) => (
                                                        <FaStar key={i} color="red" />
                                                    ))
                                                }
                                                <p>{item.date}</p>
                                            </div>

                                            <p>{item.review}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        )
                    }
                </div>
                <div className={Dstyle.relatedprod}>
                    <h1> - - Related Products - -</h1>

                    <div>
                        {
                            <div className={Dstyle.productMain}>
                                {
                                    relatedItems.length > 0 ? (
                                        relatedItems.map((item) => (
                                            <div className={Dstyle.item} key={item.id}>
                                                <div onClick={() => handleDetails(item.id)}>
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
                                                <button onClick={() => handleCart(item)}>
                                                    {cartbtn === item.id ? <p className={Dstyle.sucesbtn}>Added</p> : "Add to cart"}
                                                </button>

                                            </div>
                                        ))
                                    ) : (<>Loading</>)
                                }

                            </div>
                        }
                    </div>
                </div>
            </div>
            <Advantages />
            <Footer />
        </>
    )
}

export default ProductDetails
