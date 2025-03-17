import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import image from '../../../public/logo.png'
import { useTheme } from "../../helper/ThemProvider";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
function Navigation() {
  const [isOpenMenu,setIsOpenMenu]=useState(false);
  const{darkMode,toggleDarkMode}=useTheme();
  const location=useLocation()
  return (
    <>
    <nav className={`flex  items-center text-slate-400 bg-slate-900 px-4  h-20`}>
       <div className="flex items-center w-3/4">
        <Link to="/" className="flex items-center">
          <img src={image} className="h-12 w-12 rounded-2xl" />
          <h1 className="text-xl lg:text-2xl mr-8 text-white cursor-pointer">React <span className="text-red-500">Movies</span> App</h1>
        </Link>
            <ul className="hidden md:flex text-sm lg:text-base gap-4 uppercase ">
              <li className={`${location.pathname=="/movies"?"text-slate-100 ":"hover:text-slate-100"}`}><Link to="./movies">Movies</Link></li>
              <li className={`${location.pathname=="/tv"?"text-slate-100":"hover:text-slate-100"}`}><Link to="./tv">TV Shows</Link></li>
            </ul>
        </div>
        <div className="hidden md:block lg:text-base ml-auto uppercase">
            <ul className="flex gap-3 items-center">
                <button onClick={toggleDarkMode} className="p-2 bg-slate-900 dark:bg-slate-900 text-white dark:text-white">
                  {darkMode ? <IoSunnyOutline className="h-8 w-8" /> : <FaRegMoon className="h-7 w-7" />}
                </button>
                <li><Link to="/login" className="hover:text-slate-100">Login</Link></li>
                <li><Link to="/signup" className="bg-red-700 hover:bg-rose-500 px-6 md:px-2 py-3 rounded-3xl text-white">Sign up</Link></li>
            </ul>
        </div>

        <div className="md:hidden ml-auto flex items-center">
          <button onClick={toggleDarkMode} className="p-2 bg-slate-900 dark:bg-slate-900 text-white dark:text-white pr-5">
            {darkMode ? <IoSunnyOutline className="h-5 w-5" /> : <FaRegMoon className="h-4 w-4" />}
          </button>
          <button onClick={()=>setIsOpenMenu(!isOpenMenu)}>
            {isOpenMenu?(<LiaTimesSolid className="w-7 h-7"/>):(
              <GiHamburgerMenu className="w-7 h-7"/>
            )}
          </button>
        </div>
    </nav>

    <div onClick={()=>setIsOpenMenu(false)} className={`md:hidden bg-slate-900 text-center overflow-hidden transition-all duration-300 text-slate-300 ${
      isOpenMenu?"h-full py-4 border-t-2 border-stone-700" 
      : "py-0 h-0  border-none"}`}
      style={{height:isOpenMenu?180:0}}
      >
      <ul className="flex flex-col gap-3">
        <li><Link to="./movies">Movies</Link></li>
        <li><Link to="./tv">TV Shows</Link></li>
      </ul>
      <div className="mt-8 flex gap-4 justify-center items-center border-t-2 pt-4 border-slate-700">
          <Link to="/login" className="text-xl ">Login</Link>
          <Link to="/signup" className="bg-red-700 hover:bg-rose-500 px-4 py-2 rounded-3xl text-white">Sign up</Link>
      </div>
    </div>
    </>
  )
}

export default Navigation