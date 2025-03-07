import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpenMenu,setIsOpenMenu]=useState(false);
  
  return (
    <>
    <nav className={`flex  items-center text-slate-400 bg-slate-900 px-4  h-20`}>
       <div className="flex items-center w-3/4">
        <Link to="/">
            <h1 className="text-2xl mr-8 text-white cursor-pointer">React <span className="text-red-500">Movies</span> App</h1>
        </Link>
            <ul className="hidden md:flex text-sm lg:text-base gap-4 uppercase ">
              <li className="hover:text-slate-100"><Link to="./movies">Movies</Link></li>
              <li className="hover:text-slate-100"><Link to="./tv">TV Shows</Link></li>
              <li className="hover:text-slate-100"><Link to="./people">People</Link></li>
            </ul>
        </div>
        <div className="hidden md:block lg:text-base ml-auto uppercase">
            <ul className="flex gap-4">
                <li><Link to="/login" className="hover:text-slate-100">Login</Link></li>
                <li><Link to="/signup" className="bg-red-700 hover:bg-rose-500 px-6 py-3 rounded-3xl text-white">Sign up</Link></li>
            </ul>
        </div>

        <div className="md:hidden ml-auto">
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
      style={{height:isOpenMenu?215:0}}
      >
      <ul className="flex flex-col gap-3">
        <li><Link to="./movies">Movies</Link></li>
        <li><Link to="./tv">TV Shows</Link></li>
        <li><Link to="./people">People</Link></li>
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