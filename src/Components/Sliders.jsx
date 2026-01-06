import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import productsData from '../Data/productsData'
import './Sliders.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Sliders = () => {

    const [sliderData, setsliderData] = useState([])

    useEffect(() => {
        sliders()
        console.log(sliderData);

    }, [])

    const sliders = () => {
        setsliderData(productsData.filter((product) => {
            return Object.keys(product).includes("heroImage")
        }))
    }

    return (
        <>
            {
                sliderData.length > 0 ? (
                    <div className='slider'>
                        <div className='bg-slider'>
                            <h1>Over the <br />sound</h1>
                        </div>
                        <Swiper navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2800 }}
                            spaceBetween={20}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            loop={true}
                            modules={[Navigation, Pagination, Autoplay]} className='swiper'>
                            {
                                sliderData.map((prod) => (
                                    < SwiperSlide >
                                        <div className='cards'>
                                            <div className='slide-div-1'>
                                                <h2>{prod.title}</h2>
                                                <br /><br />
                                                <br />
                                                <h1>{prod.tagline}</h1>
                                                <br /><br />
                                                <div className='price'>
                                                    <p>${prod.finalPrice}</p>
                                                    <p>${prod.originalPrice}</p>
                                                </div>
                                                <button>Shop Now</button>
                                            </div>
                                            <div className='slide-div-2'>
                                                <img src={prod.heroImage} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper >

                    </div >
                ) : (<>loading</>)
            }

        </>
    )
}

export default Sliders
