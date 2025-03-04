import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpenMenu,setIsOpenMenu]=useState(false);
  const listMenu=["Movies","","People"] 
  return (
    <>
    <nav className="flex  items-center text-slate-400 bg-slate-900 p-4 md:container md:bg-transparent ">
       <div className="flex items-center ">
        <Link to="/">
            <h1 className="text-2xl mr-8 text-white cursor-pointer">React <span className="text-red-500">Movies</span> App</h1>
        </Link>
            <ul className="hidden md:flex text-sm lg:text-base gap-4 uppercase">
              <li><Link to="./movies">Movies</Link></li>
              <li><Link to="./tv">TV Shows</Link></li>
              <li><Link to="./people">People</Link></li>
            </ul>
        </div>
        <div className="hidden md:block lg:text-base ml-auto uppercase">
            <ul className="flex gap-4">
                <li><a href="#">Login</a></li>
                <li><a href="#" className="bg-red-700 hover:bg-rose-500 px-6 py-3 rounded-3xl text-white">Sign up</a></li>
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

    <div className={`md:hidden bg-slate-900 text-center overflow-hidden transition-all duration-300 text-slate-300 ${
      isOpenMenu?"h-full py-4 border-t-2 border-stone-700" 
      : "py-0 h-0  border-none"}`}
      style={{height:isOpenMenu?255:0}}
      >
      <ul className="flex flex-col gap-3">
       {listMenu.map((i)=><li><a href="#">{i}</a></li>)}
      </ul>
      <div className="mt-8 flex gap-4 justify-center items-center border-t-2 pt-4 border-slate-700">
          <a href="#" className="text-xl ">Login</a>
          <a href="#" className="bg-red-700 hover:bg-rose-500 px-4 py-2 rounded-3xl text-white">Sign up</a>
      </div>
    </div>
    </>
  )
}

export default Navigation