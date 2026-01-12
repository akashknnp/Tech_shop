import React, { useEffect, useState } from 'react'
import { footMenu, footSocial } from '../Data/footerData'
import Fstyle from '../Components/Footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const footerIcon = {
        facebook: <FaFacebookF />,
        twitter: <FaTwitter />,
        linkedin: <FaLinkedinIn />,
        instagram: <FaInstagram />
    }
    const [footer, setFooter] = useState([])
    const [design, setDesign] = useState([])
    useEffect(() => {
        setFooter(footMenu)
        setDesign(footSocial)
    }, [])
    return (
        <>
            <div className={Fstyle.footers}>
                <div className={Fstyle.DivFooter1}>
                    <h1>Tech-Shop</h1><br />
                    <p>Subscribe to our Email alerts to receive early discount offers, and new products info</p>
                    <br />
                    <input type='text' placeholder='Email Address*' /><br /><br />
                    <button>Subscribe</button>
                </div>
                <div className={Fstyle.footerMain}>
                    {
                        footer.length > 0 ? (
                            footer.map((menu) => (
                                <div className={Fstyle.cards}>
                                    <h3>{menu.title}</h3>
                                    {
                                        menu.menu.map((item) => (
                                            <p>{item.link}</p>
                                        ))
                                    }
                                    <p></p>
                                </div>
                            ))
                        ) : (<>loading</>)
                    }

                </div>
            </div>
            <div className={Fstyle.designerInfo}>
                <div>
                    <p>2026 | All rights reserved | ₨ <b>Designed By AKASH N N</b> </p>
                </div>
                <div>
                    {
                        design.length > 0 ? (
                            design.map((icon) => (
                                <div>
                                    <p>{footerIcon[icon.icon]}</p>
                                </div>
                            ))
                        ) : (
                            <>Loading</>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Footer
