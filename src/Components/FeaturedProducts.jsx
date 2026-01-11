import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import style from './FeaturedProducts.module.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductsData from '../Data/productsData'
import { useEffect, useState } from 'react';

const FeaturedProducts = () => {

    const [featureData, setfeatureData] = useState([])

    useEffect(() => {
        featureProducts()
    }, [])

    const featureProducts = () => {
        // let data = 
        setfeatureData(ProductsData.filter((product) => {
            return Object.keys(product).includes('tag')
        }))

        // setfeatureData(data.filter((prod) => {
        //     return prod.tag === 'featured-product'
        // }))

    }
    return (
        <>


            <div className={style.mainDiv}>
                <h2>- - Featured Products - -</h2>
                {

                    featureData.length > 0 ? (
                        <div className={style.featureMain}>
                            {console.log(featureData)}
                            <Swiper
                                centeredSlides={true}
                                slidesPerView={5}
                                loop={true}
                                spaceBetween={30}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                navigation
                                breakpoints={{
                                    0: {            // from 0px up
                                        slidesPerView: 2,
                                        centeredSlides: true,
                                    },
                                    768: {          // from 768px up (tablet)
                                        slidesPerView: 3,
                                    },
                                    1024: {         // from 1024px up (desktop)
                                        slidesPerView: 5,
                                    },
                                }}

                                pagination={{ clickable: true }}
                                modules={[Navigation, Pagination, Autoplay]}
                            >
                                {featureData.map((prod) => (
                                    <SwiperSlide key={prod.id}>
                                        <div className={style.slide}>
                                            <p>{prod.title}</p>
                                            <img src={prod.images[0]} />
                                            <div>
                                                <h3>{prod.finalPrice}</h3>
                                                <h5>{prod.originalPrice}</h5>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>) : (
                        <h2>no data</h2>
                    )
                }

            </div>
        </>
    )
}

export default FeaturedProducts
