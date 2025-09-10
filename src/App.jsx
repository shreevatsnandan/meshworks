import { useState } from 'react'
import './App.css'
import Navbarhead from './components/Navbar'
import Banner from './components/Banner'
import Program from './components/Program'
import Partners from './components/Partners'
import PartnerBenefits from './components/PartnerBenefits'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarhead/>
      <Banner/>
      <Program />
      <Partners/>
      <PartnerBenefits/>
      <Footer/>
      </>
  )
}

export default App
