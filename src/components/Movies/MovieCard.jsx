import React from 'react'

function MovieCard({item}) {
  console.log(item)
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'default_image_url_here'}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-2">
        <h2 className="text-white text-base font-semibold">{item.title}</h2>
        <p className="text-white text-sm">امتیاز: {item.vote_average}</p>
      </div>
    </div>
  )
}

export default MovieCard