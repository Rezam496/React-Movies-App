import React from 'react'
import { Link } from 'react-router-dom'

function FindMovies({item}) {
  return (
    <Link to={`/details/${item.id}`}>
      <div className="shadow-md rounded-lg overflow-hidden h-full w-24 md:w-24 lg:w-32 bg-slate-600 cursor-pointer">
        <div className="relative">
          <img
            src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'default_image_url_here'}
            alt={item.title || 'Untitled'}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-[rgba(0,0,0,0.78)] w-full p-2 lg:p-4">
            <h2 className="text-white text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              {item.title || 'No Title'}
            </h2>
            {item.vote_average !== undefined && (
              <span className="mr-2 text-yellow-300 text-sm">
                {`★ ${item.vote_average.toFixed(1)}/10`}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FindMovies