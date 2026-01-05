import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import productsData from '../Data/productsData'

const Sliders = () => {

    const [sliderData, setsliderData] = useState([])

    useEffect(() => {
        setsliderData(productsData.slice(0, 3))
        console.log(sliderData);
    }, [])


    return (
        <>
            {
                sliderData ? (
                    <Swiper navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500 }}>
                        {
                            sliderData.map((prod) => (
                                <SwiperSlide>
                                    <h2>{prod.title}</h2>
                                    <img src="prod.images[0]" />

                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                ) : (<h2>Loading . . .</h2>)
            }

        </>
    )
}

export default Sliders
