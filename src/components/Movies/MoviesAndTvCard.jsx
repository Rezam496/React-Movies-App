import React from 'react'
import { shortenText } from '../../helper/helper';
import { Link, useLocation } from 'react-router-dom';

function MoviesAndTvCard({item}) {
    const location=useLocation();
  return (  
        <Link to={`/details/:${item.id}`} >
              <div className="  shadow-md rounded-lg overflow-hidden  h-full w-36 md:w-48 lg:w-80  bg-slate-600 cursor-pointer">
                <div className="relative">
                  <img
                    src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'default_image_url_here'}
                    alt={item.title}
                    className="w-full  object-cover "
                  />
                  <div className="absolute bottom-0 left-0 bg-[rgba(0,0,0,0.78)] w-full p-2 lg:p-4">
                    <h2 className="text-white text-sm lg:text-2xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{location.pathname=="/movies" ?item.original_title:item.name}</h2>
                    <span className="mr-2 text-yellow-300 text-sm lg:text-xl">{`★ ${item.vote_average.toFixed(1)}/10`}</span>
                  </div>
                </div>
              </div>
            </Link>   
  )
}
export default MoviesAndTvCard