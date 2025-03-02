import React from 'react'
import Navigation from './Navigation'
import SearchBox from './SearchBox'
import FollowUs from './FollowUs'

function Header() {
  return (
    <header>
        <Navigation/>
        <SearchBox/>
        <FollowUs/>
    </header>
  )
}

export default Header