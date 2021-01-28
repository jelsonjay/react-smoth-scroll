import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import {homeItemOne, homeItemTwo, homeItemThree, homeItemFour, homeItemFive} from '../components/Info/Data'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Info from '../components/Info'
import Footer from '../components/Footer'


const Home = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
setIsOpen(!isOpen)
}
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/> 
    <Navbar toggle={toggle}/> 
    <Hero />
    <Info {...homeItemOne}/>
    <Info {...homeItemTwo}/>
    <Info {...homeItemThree}/>
    <Services />
    <Info {...homeItemFour}/>
    <Info {...homeItemFive}/>
    <Footer />

    </>
  )
}

export default Home
