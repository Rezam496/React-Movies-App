import React, { useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Slider from '../components/header/Slider'
import { useLocation } from 'react-router-dom'
import image from '../assets/bg.jpg'
function Layout({children}) {
  const location=useLocation();
  const [background,setBackground]=useState(image);
  return (
    <>
    <Header background={background}/>
    {location.pathname=="/"&&<Slider setBackground={setBackground}/>}
    {children}
    <Footer/>
    </>
  )
}

export default Layout