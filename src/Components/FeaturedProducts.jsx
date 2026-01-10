import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
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
        let data = ProductsData.filter((product) => {
            return Object.keys(product).includes('tag')
        })

        setfeatureData(data.filter((prod) => {
            return prod.tag === 'featured-product'
        }))

    }
    return (
        <>
            <div>
                {

                    featureData.length > 0 ? (
                        <div>
                            {console.log(featureData)}
                            <Swiper navigation
                                autoplay={{ delay: 2000 }}
                                slidesPerGroup={1}
                                slidesPerView={1}
                                className='swiper'>
                                <SwiperSlide>
                                    {
                                        featureData.map((prod) => (
                                            <h2 className=' text-white'>{prod.title}</h2>
                                        ))
                                    }

                                </SwiperSlide>
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
