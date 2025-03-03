import React, { useState } from 'react'
import Navigation from './Navigation'
import SearchBox from './SearchBox'
import FollowUs from './FollowUs'
import Slider from './Slider'
import image from '../../assets/bg.jpg'

function Header() {
  const [background,setBackground]=useState(image);
  return (
    <header
      className=" bg-cover bg-center pb-8 md:py-8 "
      style={{
        backgroundImage: `linear-gradient(
            to bottom,
            rgb(30 41 59 / 81%),
            rgb(30 41 59 / 53%),
            rgb(30 41 59)
        ), url(${background})`
    }}
    >
        <Navigation/>
      <div className="container md:py-12">
        <SearchBox/>
        <FollowUs/>
        <Slider setBackground={setBackground}/>
      </div>
    </header>
  )
}

export default Header