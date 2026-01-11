import React, { useEffect, useState } from 'react'
import servicesData from '../Data/servicesData'
import Sstyle from '../Components/Advantages.module.css'
import { FaShippingFast, FaShieldAlt, FaTags, FaCreditCard } from 'react-icons/fa';

const Advantages = () => {
    const iconMap = {
        shipping: <FaShippingFast />,
        shield: <FaShieldAlt />,
        tags: <FaTags />,
        card: <FaCreditCard />,
    };
    const [service, setService] = useState([])

    useEffect(() => {
        setService(servicesData)
    }, [])

    return (
        <>
            <div className={Sstyle.serviceH1}>
                <h1>Our Advantages</h1>
                <div className={Sstyle.service}>
                    {


                        service.length > 0 ? (

                            service.map((ser) => (
                                <div key={ser.id} className={Sstyle.serviceCard}>
                                    <div>{iconMap[ser.icon]}</div>
                                    <div>
                                        <h2>{ser.title}</h2>
                                        <p>{ser.info}</p>
                                    </div>
                                </div>

                            ))
                        ) : (<h3>Loading</h3>)
                    }

                </div>
            </div >
        </>
    )
}

export default Advantages
