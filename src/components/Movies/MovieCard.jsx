import React from 'react'
import { shortenText } from '../../helper/helper'

function MovieCard({item}) {
  
  return (
    <div className=" shadow-md rounded-lg overflow-hidden mb-4 h-full bg-slate-600 cursor-pointer">
      <div>
      <img
        src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'default_image_url_here'}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      </div>
      <div className=" bottom-0 left-0 right-0 bg-gradient-to-t  via-transparent to-transparent p-2 ">
        <h2 className="text-white text-base font-semibold">{shortenText(item.title)}</h2>
        <span className="mr-2 text-yellow-300">{`★ ${item.vote_average.toFixed(1)}/10`}</span>
      </div>
    </div>
  )
}

export default MovieCard