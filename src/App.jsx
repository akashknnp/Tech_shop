import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Sliders from './Components/Sliders'
import Login from './Components/Login'
import FeaturedProducts from './Components/FeaturedProducts'
import TopProducts from './Components/TopProducts'
import Advantages from './Components/Advantages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Sliders />
      <FeaturedProducts />
      <TopProducts />
      <Advantages />

    </>
  )
}

export default App
