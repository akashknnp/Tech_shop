import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sliders from './Components/Sliders'
import Login from './Components/Login'
import FeaturedProducts from './Components/FeaturedProducts'
import TopProducts from './Components/TopProducts'
import Advantages from './Components/Advantages'
import Footer from './Components/Footer'

import Navigation from '../src/Components/Navigation'
import Routing from './Routings/Routing'



function App() {


  return (
    <>
      <Navigation />
      <Sliders />
      <FeaturedProducts />
      <TopProducts />
      <Advantages />
      <Footer />
      <Routing />

    </>
  )
}

export default App
