import React from 'react'

function Navigation() {
  return (
    <nav className="container flex mt-10 items-center text-slate-400">
       <div className="flex items-center ">
            <h1 className="text-2xl mr-8 text-white">React <span className="text-red-500">Movies</span> App</h1>
            <ul className="flex gap-4 uppercase">
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">More</a></li>
            </ul>
        </div>
        <div className="ml-auto uppercase">
            <ul className="flex gap-4">
                <li><a href="#">Login</a></li>
                <li><a href="#" className="bg-red-700 hover:bg-rose-500 px-6 py-3 rounded-3xl text-white">Sign up</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation