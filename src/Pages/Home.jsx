import React from 'react'
import Sliders from '../Components/Sliders'
import Login from '../Components/Login'
import FeaturedProducts from '../Components/FeaturedProducts'
import TopProducts from '../Components/TopProducts'
import Advantages from '../Components/Advantages'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <Sliders />
            <FeaturedProducts />
            <TopProducts />
            <Advantages />
            <Footer />
        </>
    )
}

export default Home
