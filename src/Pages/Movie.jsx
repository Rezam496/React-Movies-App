import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchMoviesPopular } from '../Services/movieslist'
import { Link } from 'react-router-dom';
import { shortenText } from '../helper/helper';
import ScrollToTop from '../helper/ScrollToTop';

function Movie() {

  const {data}=useQuery({
    queryKey:["popular"],
    queryFn:fetchMoviesPopular,
  });
  console.log(data?.data.results)
  return (
    <div className="container flex flex-col mt-28">
      <ScrollToTop/>
       <h2 className="text-2xl font-bold mb-10">🎬 Popular</h2>
       <div className="flex flex-wrap gap-8 justify-center">
        {data?.data.results.map((item)=>(         
            <Link to={`/details/:${item.id}`} key={item.id}>
              <div className="  shadow-md rounded-lg overflow-hidden  h-full w-36 md:w-48 lg:w-80  bg-slate-600 cursor-pointer">
                <div className="relative">
                  <img
                    src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'default_image_url_here'}
                    alt={item.title}
                    className="w-full  object-cover "
                  />
                  <div className="absolute bottom-0 left-0 bg-[rgba(0,0,0,0.78)] w-full p-2 lg:p-4">
                    <h2 className="text-white text-sm lg:text-2xl font-semibold">{shortenText(item.original_title)}</h2>
                    <span className="mr-2 text-yellow-300 text-sm lg:text-xl">{`★ ${item.vote_average.toFixed(1)}/10`}</span>
                  </div>
                </div>
              </div>
            </Link>
        ))}
       </div>
    </div>
  )
}

export default Movie