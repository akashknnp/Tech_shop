import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import productsData from '../Data/productsData'
import styles from './Sliders.module.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Sliders = () => {
    const navigate = useNavigate()
    const [sliderData, setsliderData] = useState([])

    useEffect(() => {
        const filtered = productsData.filter(
            product => Object.keys(product).includes("heroImage")
        )
        setsliderData(filtered)
    }, [])


    const handleshop = (Pid) => {
        navigate(`/product/${Pid}`)
    }
    return (
        <>
            {
                sliderData.length > 0 ? (
                    <div className={styles.slider}>
                        <div className={styles.bgSlider}>
                            <h1>Over the <br />sound</h1>
                        </div>

                        <Swiper
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2800 }}
                            spaceBetween={20}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            loop={true}
                            modules={[Navigation, Pagination, Autoplay]}
                            className="swiper"   // ✅ swiper stays GLOBAL
                        >
                            {
                                sliderData.map((prod) => (
                                    <SwiperSlide key={prod.id}>
                                        <div className={styles.cards}>
                                            <div className={styles.slideDiv1}>
                                                <h2>{prod.title}</h2>
                                                <br /><br />
                                                <h1>{prod.tagline}</h1>
                                                <br /><br />

                                                <div className={styles.price}>
                                                    <p>₨  {prod.finalPrice}</p>
                                                    <p>₨  {prod.originalPrice}</p>
                                                </div>

                                                <button className={styles.shopBtn} onClick={() => handleshop(prod.id)}>
                                                    Shop Now
                                                </button>
                                            </div>

                                            <div className={styles.slideDiv2} onClick={() => handleshop(prod.id)}>
                                                <img src={prod.heroImage} alt={prod.title} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                ) : (<>loading</>)
            }
        </>
    )
}

export default Sliders
